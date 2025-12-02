import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../api/productsApi";

// Custom hook for fetching products with React Query
export function useProducts() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts
  });
  return { products: data || [], loading: isLoading, error: error ? error.message : null };
}
