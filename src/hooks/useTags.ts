"use client";
import { Tags } from "@/entities/Tags";
import { tagsService } from "@/services/tagsService";
import { useQuery } from "@tanstack/react-query";

export function useTags() {
  const { data, isFetching } = useQuery<Tags[]>({
    queryKey: ["getTags"],
    queryFn: tagsService.getAll,
  });

  return { tags: data ?? [], isFetching };
}
