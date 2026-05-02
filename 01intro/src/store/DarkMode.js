import { create } from 'zustand'

export const useDarkMode = create((set) => ({
    darkMode: true,
    ghumJaa: () => set((state) => ({ darkMode: !state.darkMode })),

}))