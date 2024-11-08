"use client";
import { useQuery } from "@tanstack/react-query";
import { Tags } from "@/entities/Tags";
import { tagsService } from "@/services/tagsService";

export function useTags() {
  const { data, isFetching } = useQuery<Tags[]>({
    queryKey: ["getTags"],
    queryFn: tagsService.getAll,
  });

  return { tags: data ?? [], isFetching };
}
