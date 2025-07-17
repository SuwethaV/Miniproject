// src/store/useAuthStore.js
import { create } from 'zustand';

const useAuthStore = create((set) => ({
  token: localStorage.getItem('token'),
  setToken: (token) => set({ token }),
  clearToken: () => set({ token: null }),
}));

export default useAuthStore;
