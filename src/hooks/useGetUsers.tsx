import { useEffect } from "react";
import { useUsersStore } from "../modules/usersTable";

export const useGetUsers = () => {
  const { users, status, error, getUsers } = useUsersStore();

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return {
    data: users,
    isPending: status === "pending",
    isLoaded: status === "loaded",
    isError: status === "error",
    error,
  };
};
