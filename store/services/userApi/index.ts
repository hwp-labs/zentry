import { type UseQueryOptions, useQuery } from "@tanstack/react-query";
import { userApiService } from "./service";

const getUserProfileQueryOptions: UseQueryOptions = {
  queryFn: userApiService.getProfile,
  queryKey: ['profile'],
  retry: false,
  refetchOnMount: false,
  refetchOnReconnect: false,
}

export function useUserApi() {
  const getUserProfileQuery = useQuery(getUserProfileQueryOptions);

  const getUserProfileQueryLazy = useQuery({
    ...getUserProfileQueryOptions,
    enabled: false,
  });

  return {
    getUserProfileQuery,
    getUserProfileQueryLazy,
  }
}