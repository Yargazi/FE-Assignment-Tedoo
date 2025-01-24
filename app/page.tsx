"use client";

import { useFeedQuery } from "./hooks/useFeedQuery";
import { useRef, useEffect } from "react";
import Navbar from "./components/Navbar";
import Loader from "./components/Loader";
import Post from "./components/Post";

export default function Home() {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, error } =
    useFeedQuery();

  const observerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      },
      { threshold: 1 }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, [fetchNextPage, hasNextPage]);

  if (error) return <div>An error occurred while loading the feed!</div>;
  if (!data && !error) return <Loader />;

  const posts = data?.pages.flatMap((page) => page.data) || [];

  return (
    <div className="bg-gray-100 min-h-screen mb-5">
      <Navbar />
      <Post posts={posts} status={isFetchingNextPage} ref={observerRef} />
    </div>
  );
}
