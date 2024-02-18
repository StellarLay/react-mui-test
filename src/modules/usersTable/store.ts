import { create } from "zustand";

import type { User } from "../../app/types";

interface UsersState {
  users: User[];
  status: string;
  error?: string;
  getUsers: () => void;
}

const url = "https://jsonplaceholder.typicode.com/users";

export const useUsersStore = create<UsersState>((set) => ({
  users: [],
  status: "",
  error: "",
  getUsers: async () => {
    set({ status: "pending" });

    const response = await fetch(url);

    try {
      if (!response.ok) {
        throw new Error("Данные не удалось загрузить...");
      }
      
      const json = (await response.json()) as User[];

      set({ users: json });
      set({status: "loaded"});
    } catch (e) {
      set({status: "error"})
      set({ error: (<Error>e).message });
    }
  },
}));
