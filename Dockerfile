# ========================================================================
# BACKEND DOCKERFILE FOR SERNITAS CARE
# Express.js + Prisma + MongoDB Backend
# ========================================================================

# Use Node.js 20 LTS as base image
FROM node:20-alpine AS base
WORKDIR /app

# Install dependencies needed for Prisma
RUN apk add --no-cache openssl libc6-compat

# ========================================================================
# Dependencies stage
# ========================================================================
FROM base AS deps
# Copy package files
COPY package*.json ./
COPY prisma ./prisma/

# Install dependencies
RUN npm ci --only=production && npm cache clean --force

# ========================================================================
# Build stage (generate Prisma Client)
# ========================================================================
FROM base AS builder
COPY package*.json ./
COPY prisma ./prisma/

# Install all dependencies (including dev dependencies for Prisma)
RUN npm ci && npm cache clean --force

# Generate Prisma Client
RUN npx prisma generate

# ========================================================================
# Production stage
# ========================================================================
FROM base AS runner
WORKDIR /app

# Create non-root user for security
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nodejs

# Copy necessary files from builder
COPY --from=builder --chown=nodejs:nodejs /app/node_modules/.prisma ./node_modules/.prisma
COPY --from=builder --chown=nodejs:nodejs /app/node_modules/@prisma ./node_modules/@prisma
COPY --from=deps --chown=nodejs:nodejs /app/node_modules ./node_modules

# Copy application code
COPY --chown=nodejs:nodejs package*.json ./
COPY --chown=nodejs:nodejs server.js ./
COPY --chown=nodejs:nodejs server ./server
COPY --chown=nodejs:nodejs prisma ./prisma

# Switch to non-root user
USER nodejs

# Expose port (default 5000, but will use PORT env var)
EXPOSE 5000

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD node -e "require('http').get('http://localhost:' + (process.env.PORT || 5000) + '/', (r) => {process.exit(r.statusCode === 200 ? 0 : 1)})"

# Start the application
CMD ["node", "server.js"]

