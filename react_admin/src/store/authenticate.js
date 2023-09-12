import { create } from "zustand";

const user = JSON.parse(window.localStorage.getItem("user"));

const initUser = user
	? { auth: user, isLoggedIn: true }
	: { auth: null, isLoggedIn: false };

export const useAuthenticate = create((set) => ({
	auth: initUser,
	setAuth: (user) => set(() => ({ auth: user })),
	removeAuth: () => set(() => ({ auth: { auth: null, isLoggedIn: false } })),
}));
