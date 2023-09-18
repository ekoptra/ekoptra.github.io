import { create } from "zustand";

interface FilterState {
  displayRawan: boolean;
  displayTahan: boolean;
  toggleDisplayRawan: () => void;
  toggleDisplayTahan: () => void;
}

const useFilterStore = create<FilterState>()((set) => ({
  displayRawan: true,
  toggleDisplayRawan: () =>
    set((state) => ({ displayRawan: !state.displayRawan })),
  displayTahan: false,
  toggleDisplayTahan: () =>
    set((state) => ({ displayTahan: !state.displayTahan })),
}));

export default useFilterStore;
