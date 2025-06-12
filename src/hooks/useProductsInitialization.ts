import { useEffect } from "react";
import { useProductStore } from "../stores/productStore";

export const useProductsInitialization = () => {
  const { fetchProducts, fetchCategories, clearError } = useProductStore();

  useEffect(() => {
    const initializeData = async () => {
      try {
        await Promise.all([fetchProducts(), fetchCategories()]);
      } catch (error) {
        console.error("Error initializing data:", error);
      }
    };

    initializeData();
  }, [fetchProducts, fetchCategories]);

  useEffect(() => {
    return () => {
      clearError();
    };
  }, [clearError]);
};
