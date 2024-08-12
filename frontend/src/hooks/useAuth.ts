import { useQuery } from "@tanstack/react-query";
import { fetchUser } from "../services/AuthService";

export const useAuth = () => {
  return useQuery({
    queryKey: ["user"],
    queryFn: fetchUser,
    staleTime: 1000 * 60 * 10,
  });
};
