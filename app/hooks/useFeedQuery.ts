"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchFeed = async ({ pageParam = 0 }) => {
  const response = await axios.get(
    `https://backend.tedooo.com/hw/feed.json?skip=${pageParam}`
  );
  return response.data;
};

export const useFeedQuery = () => {
  return useInfiniteQuery({
    queryKey: ["feed"],
    queryFn: fetchFeed,
    getNextPageParam: (lastPage, allPages) =>
      lastPage.hasMore ? allPages.length * 6 : undefined,
  });
};
