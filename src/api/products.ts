import { apiClient } from "./auth";
import type {
  Product,
  ProductsResponse,
  Category,
  ProductFilters,
  PaginationParams,
} from "../types";
import { ENDPOINTS } from "../constants/endpoints";
import { ERRORS } from "../constants/errors";

const buildQueryParams = (
  params: Record<string, string | number | boolean>
): string => {
  const searchParams = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== "") {
      searchParams.append(key, String(value));
    }
  });

  return searchParams.toString();
};

export const fetchProducts = async (
  params: Partial<PaginationParams & ProductFilters> = {}
) => {
  try {
    const {
      limit = 20,
      skip = 0,
      search,
      category,
      sortBy,
      order,
      ...otherParams
    } = params;

    let endpoint = ENDPOINTS.PRODUCTS.GET;
    const queryParams: Record<string, string | number | boolean> = {
      limit,
      skip,
      ...otherParams,
    };

    if (category && category !== "all") {
      endpoint = ENDPOINTS.PRODUCTS.GET_BY_CATEGORY + category;
    }

    if (search && search.trim()) {
      queryParams.q = search.trim();
    }

    if (sortBy) {
      queryParams.sortBy = sortBy;
      queryParams.order = order || "asc";
    }

    const queryString = buildQueryParams(queryParams);
    const url = queryString ? `${endpoint}?${queryString}` : endpoint;

    const response = await apiClient.get<ProductsResponse>(url);

    if (search && search.trim() && response.data.products.length > 0) {
      const searchLower = search.trim().toLowerCase();
      const filteredProducts = response.data.products.filter((product) => {
        const title = product.title?.toLowerCase() || "";
        const description = product.description?.toLowerCase() || "";
        const brand = product.brand?.toLowerCase() || "";

        return (
          title.includes(searchLower) ||
          description.includes(searchLower) ||
          brand.includes(searchLower)
        );
      });

      return {
        ...response.data,
        products: filteredProducts,
        total: filteredProducts.length,
      };
    }

    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw new Error(ERRORS.PRODUCTS.FAILED_TO_FETCH);
  }
};

export const fetchProductById = async (id: number) => {
  try {
    const response = await apiClient.get<Product>(
      `${ENDPOINTS.PRODUCTS.GET_BY_ID}${id}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching product:", error);
    throw new Error(ERRORS.PRODUCTS.FAILED_TO_FETCH);
  }
};

export const fetchCategories = async () => {
  try {
    const response = await apiClient.get<Category[]>(
      ENDPOINTS.PRODUCTS.GET_CATEGORIES
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw new Error(ERRORS.PRODUCTS.FAILED_TO_FETCH);
  }
};

export const fetchCategoryList = async () => {
  try {
    const response = await apiClient.get<string[]>(
      ENDPOINTS.PRODUCTS.GET_CATEGORY_LIST
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching category list:", error);
    throw new Error(ERRORS.PRODUCTS.FAILED_TO_FETCH);
  }
};

export const searchProducts = async (
  query: string,
  params: Partial<PaginationParams> = {}
) => {
  if (!query.trim()) {
    return fetchProducts(params);
  }

  return fetchProducts({
    ...params,
    search: query,
  });
};

export const fetchProductsByCategory = async (
  category: string,
  params: Partial<PaginationParams> = {}
) => {
  return fetchProducts({
    ...params,
    category,
  });
};
