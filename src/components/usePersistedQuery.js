// import { useQuery } from "@tanstack/react-query";

// export const usePersistedQuery = (key, fetchData, options = {}) => {
//   const cachedData = localStorage.getItem(key);
//   if (cachedData) {
//     return { data: JSON.parse(cachedData), isLoading: false, error: null };
//   }

//   const queryResult = useQuery(key, fetchData, {
//     ...options,
//     onSuccess: (data) => {
//       localStorage.setItem(key, JSON.stringify(data));
//     },
//   });

//   return queryResult;
// };

// Example
// const fetchServices = async () => {
//   const response = await fetch("/api/services");
//   if (!response.ok) {
//     throw new Error("Failed to fetch services");
//   }
//   return response.json();
// };

// const Services = () => {
//   const { data, isLoading, error } = usePersistedQuery(
//     "services",
//     fetchServices,
//     {
//       staleTime: 1000 * 60 * 5, // Data is fresh for 5 minutes
//     }
//   );

//   if (isLoading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error.message}</p>;

//   return (
//     <ul>
//       {data.map((service) => (
//         <li key={service.id}>{service.name}</li>
//       ))}
//     </ul>
//   );
// };

import { useQuery } from "@tanstack/react-query";

/**
 * usePersistedQuery: React Query useQuery with localStorage persistence.
 * While loading, returns previously cached data (if any) so UI shows last data immediately.
 * Cache key is JSON.stringify(queryKey). Used by AdminDashboard for applications list.
 */
export const usePersistedQuery = ({ queryKey, queryFn, options = {} }) => {
  const cachedData = localStorage.getItem(JSON.stringify(queryKey));

  // Always call useQuery (required by React hooks rules)
  const queryResult = useQuery({
    queryKey,
    queryFn,
    ...options,
    onSuccess: (data) => {
      // Cache the data in localStorage
      localStorage.setItem(JSON.stringify(queryKey), JSON.stringify(data));
      if (options.onSuccess) {
        options.onSuccess(data); // Call any additional onSuccess logic passed in options
      }
    },
  });

  // If cached data exists and the query is loading, return the cached data
  if (cachedData && queryResult.isLoading) {
    return {
      data: JSON.parse(cachedData),
      isLoading: false,
      error: null,
    };
  }

  // Otherwise, return the query result
  return queryResult;
};

// Example usage (for reference):
// const fetchServices = async () => {
//   const response = await fetch("/api/services");
//   if (!response.ok) {
//     throw new Error("Failed to fetch services");
//   }
//   return response.json();
// };

// const Services = () => {
//   const { data, isLoading, error } = usePersistedQuery({
//     queryKey: ["services"],
//     queryFn: fetchServices,
//     options: {
//       staleTime: 1000 * 60 * 5, // Data is fresh for 5 minutes
//     },
//   });

//   if (isLoading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error.message}</p>;

//   return (
//     <ul>
//       {data.map((service) => (
//         <li key={service.id}>{service.name}</li>
//       ))}
//     </ul>
//   );
// };
