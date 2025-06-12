import { create } from "zustand";
import { devtools } from "zustand/middleware";
import type { ProductState } from "../types";
import * as productsApi from "../api/products";

const ITEMS_PER_PAGE = 20;

export const useProductStore = create<ProductState>()(
  devtools(
    (set, get) => ({
      products: [],
      categories: [],
      total: 0,
      currentPage: 1,
      itemsPerPage: ITEMS_PER_PAGE,
      filters: {},
      isLoading: false,
      isLoadingCategories: false,
      error: null,

      fetchProducts: async (params = {}) => {
        set({ isLoading: true, error: null });

        try {
          const state = get();
          const {
            limit = state.itemsPerPage,
            skip = (state.currentPage - 1) * state.itemsPerPage,
            ...otherParams
          } = params;

          const mergedParams = {
            limit,
            skip,
            ...state.filters,
            ...otherParams,
          };

          const response = await productsApi.fetchProducts(mergedParams);

          set({
            products: response.products,
            total: response.total,
            isLoading: false,
            error: null,
          });
        } catch (error) {
          const errorMessage =
            error instanceof Error ? error.message : "Error loading products";
          set({
            products: [],
            total: 0,
            isLoading: false,
            error: errorMessage,
          });
        }
      },

      fetchCategories: async () => {
        set({ isLoadingCategories: true });

        try {
          const categories = await productsApi.fetchCategories();
          set({
            categories,
            isLoadingCategories: false,
          });
        } catch (error) {
          const errorMessage =
            error instanceof Error ? error.message : "Error loading categories";
          set({
            isLoadingCategories: false,
            error: errorMessage,
          });
        }
      },

      searchProducts: async (query) => {
        const trimmedQuery = query.trim();
        const currentFilters = get().filters;

        set({
          filters: {
            ...currentFilters,
            search: trimmedQuery,
          },
          currentPage: 1,
        });

        await get().fetchProducts({
          search: trimmedQuery,
          category: currentFilters.category,
          skip: 0,
        });
      },

      clearSearch: () => {
        const currentFilters = get().filters;
        const { search, ...otherFilters } = currentFilters;

        set({
          filters: otherFilters,
          currentPage: 1,
        });

        get().fetchProducts({
          ...otherFilters,
          skip: 0,
        });
      },

      filterByCategory: async (category) => {
        const normalizedCategory = category === "all" ? undefined : category;
        const currentFilters = get().filters;
        const { search, ...otherFilters } = currentFilters;

        set({
          filters: {
            ...otherFilters,
            category: normalizedCategory,
          },
          currentPage: 1,
        });

        await get().fetchProducts({
          category: normalizedCategory,
          skip: 0,
        });
      },

      setFilters: (newFilters) => {
        const currentFilters = get().filters;
        const updatedFilters = { ...currentFilters, ...newFilters };

        set({
          filters: updatedFilters,
          currentPage: 1,
        });

        get().fetchProducts({
          ...updatedFilters,
          skip: 0,
        });
      },

      clearFilters: () => {
        set({
          filters: {},
          currentPage: 1,
        });

        get().fetchProducts({ skip: 0 });
      },

      setPage: async (page) => {
        const state = get();
        const skip = (page - 1) * state.itemsPerPage;

        set({ currentPage: page });

        await get().fetchProducts({ skip });
      },

      clearError: () => {
        set({ error: null });
      },
    }),
    {
      name: "product-store",
    }
  )
);
