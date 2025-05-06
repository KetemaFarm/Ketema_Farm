import { create } from "zustand";

const useStore = create((set) => ({
  // Search state
  searchQuery: "",
  setSearchQuery: (query) => set({ searchQuery: query }),

  // Category state
  selectedCategory: "All",
  setSelectedCategory: (category) => set({ selectedCategory: category }),

  // Filter states
  priceRange: [0, 1000],
  setPriceRange: (range) => set({ priceRange: range }),

  selectedCity: "All",
  setSelectedCity: (city) => set({ selectedCity: city }),

  // Reset all filters
  resetFilters: () =>
    set({
      searchQuery: "",
      selectedCategory: "All",
      priceRange: [0, 1000],
      selectedCity: "All",
    }),
}));

export default useStore;
