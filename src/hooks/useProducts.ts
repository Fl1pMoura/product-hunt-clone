"use client";
import { productsService } from "@/services/productsService";
import { useQuery } from "@tanstack/react-query";
import { Product } from "../entities/Products";

export function useProducts() {
  const { data, isFetching } = useQuery<Product[]>({
    queryKey: ["getProducts"],
    queryFn: productsService.getAll,
  });

  return { products: data ?? [], isFetching };
}
