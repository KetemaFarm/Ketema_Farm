import { create } from "zustand";

const useLandStore = create((set) => ({
  // Land filter states
  selectedLandCategory: "All",
  setSelectedLandCategory: (category) =>
    set({ selectedLandCategory: category }),

  landPriceRange: [0, 100000],
  setLandPriceRange: (range) => set({ landPriceRange: range }),

  selectedLandCity: "All",
  setSelectedLandCity: (city) => set({ selectedLandCity: city }),

  // Reset all land filters
  resetLandFilters: () =>
    set({
      selectedLandCategory: "All",
      landPriceRange: [0, 100000],
      selectedLandCity: "All",
    }),
}));

export default useLandStore;
