import { create } from "zustand";
import axios from "axios";
import { Config, UserInfoT } from "../../types";

const useAuthStore = create<Config>((set) => ({
  registerData: "",
  verifyData: <UserInfoT>{},
  loginData: <UserInfoT>{},
  forgotPasswordData: "",
  forgotPasswordVerifyData: "",
  
  error: "",
  // register
  register: async (user) => {
    
    try {
      const res = await axios.post(
        "https://app.olimjanov.uz/v1/auth/register",
        user
      );
      const data = await res.data;
      set({ registerData: data.message, error: "" });
    } catch (error) {
      set({ error: error });
    } 
  },
  //verify
  verify: async (user) => {
    
    try {
      const res = await axios.post(
        "https://app.olimjanov.uz/v1/auth/verify",
        user
      );
      const data = await res.data;
      set({ verifyData: data, error: "" });
    } catch (error) {
      console.log("error", error);
    } 
    
  },
  // login
  login: async (user) => {
  
    try {
      const res = await axios.post(
        "https://app.olimjanov.uz/v1/auth/login",
        user
      );
      const data = await res.data;
      set({ loginData: data, error: "" });
    } catch (error) {
      console.log("error", error);
      set({ error: error });
    } 
  },
  // forgotPassword
  forgotPassword: async (user) => {
   
    try {
      const res = await axios.post(
        "https://app.olimjanov.uz/v1/auth/forgot-password",
        user
      );
      const data = await res.data;
      console.log(res);

      set({ forgotPasswordData: data.message, error: "" });
    } catch (error) {
      console.log("error", error);
      set({ error: error });
    } 
  },
  // forgotPasswordVerify
  forgotPasswordVerify: async (user) => {
    
    try {
      const res = await axios.post(
        "https://app.olimjanov.uz/v1/auth/verify-forgot-password",
        user
      );
      const data = await res.data;
      console.log(data);
      set({ forgotPasswordVerifyData: data.message, error: "" });
    } catch (error) {
      console.log("error", error);
      set({ error: error });
    } 
  },
}));

export default useAuthStore;
