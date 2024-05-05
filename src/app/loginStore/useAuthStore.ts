import { create } from "zustand";
import { produce } from "immer";
import axios from "axios";

const AuthStore = (set: (produce: () => void) => void) => ({
  email: "",
  fullName: "",
  phoneNumber: "",
  password: "",
  login: async (user: { email: string; password: string }) => {
    try {
      const res = await axios.post(
        "https://app.olimjanov.uz/v1/auth/login",
        user
      );
      const data = await res.data;
      console.log(data);
      set(
        produce((state) => {
          state.email = data.email;
          state.password = data.password;
        })
      );
    } catch (error) {
      console.log((error as Error).message);
    }
  },
});

export const useAuthStore = create(AuthStore);