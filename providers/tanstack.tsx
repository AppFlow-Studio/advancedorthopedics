"use client"; // Mark this as a Client Component

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

export default function TanstackProvider({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // Global defaults for all queries
            staleTime: 2 * 60 * 1000, // 2 minutes - data considered fresh
            gcTime: 5 * 60 * 1000, // 5 minutes - keep in cache (React Query v5 uses gcTime)
            refetchOnWindowFocus: false, // Don't refetch on window focus
            refetchOnMount: true, // Refetch on mount if data is stale
            retry: 1, // Retry failed requests once
            retryDelay: 1000, // Wait 1 second before retry
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}