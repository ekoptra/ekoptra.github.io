import { create } from "zustand";

interface FilterState {
  displayRawan: boolean;
  toggleDisplayRawan: () => void;
}

const useFilterStore = create<FilterState>()((set) => ({
  displayRawan: false,
  toggleDisplayRawan: () =>
    set((state) => ({ displayRawan: !state.displayRawan })),
}));

export default useFilterStore;
