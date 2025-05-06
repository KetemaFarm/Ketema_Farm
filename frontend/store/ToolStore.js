import { create } from "zustand";

const useToolStore = create((set) => ({
  // Tool filter states
  selectedToolCategory: "All",
  setSelectedToolCategory: (category) =>
    set({ selectedToolCategory: category }),

  toolPriceRange: [0, 1000],
  setToolPriceRange: (range) => set({ toolPriceRange: range }),

  // Reset all tool filters
  resetToolFilters: () =>
    set({
      selectedToolCategory: "All",
      toolPriceRange: [0, 1000],
    }),
}));

export default useToolStore;
