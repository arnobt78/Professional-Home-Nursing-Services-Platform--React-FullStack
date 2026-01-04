/**
 * ========================================================================
 * REACT QUERY CLIENT CONFIGURATION
 * ========================================================================
 * 
 * React Query (TanStack Query) client configuration for data fetching and caching.
 * 
 * Purpose:
 *   - Manage server state (API data)
 *   - Cache API responses to reduce network requests
 *   - Handle loading states and errors automatically
 *   - Provide optimistic updates
 * 
 * Configuration Explained:
 *   - cacheTime: How long unused data stays in cache (5 minutes)
 *   - staleTime: How long data is considered fresh (5 minutes)
 *   - retry: Number of retry attempts for failed requests (1 attempt)
 *   - refetchOnWindowFocus: Prevent refetch when user switches browser tabs
 * 
 * ========================================================================
 */

import { QueryClient } from "@tanstack/react-query";

// Create and configure React Query client instance
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Cache Time: Duration (in ms) that unused/inactive cache data remains in memory
      // After this time, cached data is garbage collected
      cacheTime: 1000 * 60 * 5, // 5 minutes (300,000 ms)
      
      // Stale Time: Duration (in ms) that data is considered "fresh"
      // Fresh data won't trigger a background refetch
      staleTime: 1000 * 60 * 5, // 5 minutes (data is fresh for 5 minutes)
      
      // Retry: Number of times to retry failed requests
      retry: 1, // Retry failed requests once before showing error
      
      // Refetch on Window Focus: Disable automatic refetch when user returns to the tab
      // This prevents unnecessary API calls when user switches between browser tabs
      refetchOnWindowFocus: false,
    },
  },
});

export default queryClient;
