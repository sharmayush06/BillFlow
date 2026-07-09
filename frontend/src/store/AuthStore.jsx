import { create } from 'zustand';

const useAuthStore = create((set) => ({
    user: null,
    userName: '',
    email: '',
    authToken: null,
    setUser: (user) => set({ user, userName: user?.name || '', email: user?.email || '' }),
    setUserName: (userName) => set({ userName }),
    setEmail: (email) => set({ email }),
    setAuthToken: (authToken) => set({ authToken }),
    logout: () => set({ user: null, userName: '', email: '', authToken: null }),
}));

const useAuth = (selector) => useAuthStore(selector);

export { useAuth, useAuthStore };
export default useAuthStore;

