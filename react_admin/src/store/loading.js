import { create } from "zustand";

export const usePageLoading = create((set) => ({
	loading: true,
	setLoading: (payload) => set(() => ({ loading: payload })),
}));
