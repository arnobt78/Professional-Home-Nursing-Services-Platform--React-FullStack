# ========================================================================
# DOCKERFILE - Backend Container Configuration
# ========================================================================
# 
# This Dockerfile creates a production-ready Docker image for the
# Sernitas Care Express.js backend server.
# 
# Architecture: Multi-stage build for optimized image size
# Stages:
#   1. base   - Base image with Node.js and system dependencies
#   2. deps   - Production dependencies installation
#   3. builder - Prisma Client generation (requires dev dependencies)
#   4. runner - Final production image with minimal footprint
# 
# Technologies:
#   - Node.js 20 LTS (Alpine Linux for smaller image size)
#   - Prisma ORM (requires OpenSSL for MongoDB connections)
#   - Express.js backend server
# 
# ========================================================================

# Stage 1: Base Image
# Use Node.js 20 LTS Alpine image (Alpine Linux = smaller image size)
FROM node:20-alpine AS base
WORKDIR /app

# Install system dependencies required for Prisma
# openssl: Required for MongoDB TLS/SSL connections
# libc6-compat: Compatibility layer for some Node.js native modules
RUN apk add --no-cache openssl libc6-compat

# ========================================================================
# Stage 2: Dependencies
# ========================================================================
# Install production dependencies only (smaller final image)
FROM base AS deps

# Copy package files (package.json, package-lock.json)
# These files are needed to install dependencies
COPY package*.json ./
COPY prisma ./prisma/

# Install only production dependencies (excludes devDependencies)
# npm ci: Clean install (faster, more reliable than npm install)
# --only=production: Skip devDependencies
# npm cache clean: Remove npm cache to reduce image size
RUN npm ci --only=production && npm cache clean --force

# ========================================================================
# Stage 3: Builder
# ========================================================================
# Generate Prisma Client (requires dev dependencies)
FROM base AS builder
COPY package*.json ./
COPY prisma ./prisma/

# Install ALL dependencies (including devDependencies)
# Prisma Client generation requires @prisma/client which is a dev dependency
RUN npm ci && npm cache clean --force

# Generate Prisma Client
# This creates the database client code based on schema.prisma
# The generated client is needed at runtime to interact with MongoDB
RUN npx prisma generate

# ========================================================================
# Stage 4: Production Runner (Final Image)
# ========================================================================
FROM base AS runner
WORKDIR /app

# Create non-root user for security
# Running containers as non-root user is a security best practice
# This limits the impact if the container is compromised
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nodejs

# Copy Prisma Client from builder stage
# These are the generated files needed for database access
COPY --from=builder --chown=nodejs:nodejs /app/node_modules/.prisma ./node_modules/.prisma
COPY --from=builder --chown=nodejs:nodejs /app/node_modules/@prisma ./node_modules/@prisma

# Copy production dependencies from deps stage
COPY --chown=nodejs:nodejs --from=deps /app/node_modules ./node_modules

# Copy application source code
# --chown=nodejs:nodejs: Change ownership to non-root user
COPY --chown=nodejs:nodejs package*.json ./
# Main server file
COPY --chown=nodejs:nodejs server.js ./
# Route handlers
COPY --chown=nodejs:nodejs server ./server
# Prisma schema
COPY --chown=nodejs:nodejs prisma ./prisma

# Switch to non-root user (security best practice)
USER nodejs

# App uses process.env.PORT || 5000 (local default 5000). In Coolify set PORT=3000 and Ports Mappings 5000:3000.
EXPOSE 3000

# Health Check Configuration
# Docker/Kubernetes will periodically check if the container is healthy
# --interval=30s: Check every 30 seconds
# --timeout=3s: Timeout after 3 seconds
# --start-period=5s: Wait 5 seconds before first check (allow server to start)
# --retries=3: Mark unhealthy after 3 consecutive failures
# The command sends HTTP GET to root endpoint, exits 0 if status 200, else 1
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD node -e "require('http').get('http://localhost:' + (process.env.PORT || 5000) + '/', (r) => {process.exit(r.statusCode === 200 ? 0 : 1)})"

# Start the application
# This command runs when the container starts
CMD ["node", "server.js"]

