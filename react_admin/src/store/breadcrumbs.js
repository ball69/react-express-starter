import { create } from "zustand";

export const useBreadcrumbs = create((set) => ({
	title: "",
	setTitle: (payload) => set(() => ({ title: payload })),
	breadcrumbs: [],
	setBreadcrumbs: (payload) => set(() => ({ breadcrumbs: payload })),
}));
