"use client";

import { useFeedQuery } from "./hooks/useFeedQuery";
import { differenceInHours, differenceInDays } from "date-fns";
import { useRef, useEffect } from "react";
import Navbar from "./components/Navbar";

export default function Home() {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, error } =
    useFeedQuery();

  const observerRef = useRef<HTMLDivElement | null>(null);

  const formatTimeAgo = (dateString: string): string => {
    const date = new Date(dateString);
    const now = new Date();
    const hoursDifference = differenceInHours(now, date);

    if (hoursDifference <= 12) {
      return `${hoursDifference}h`;
    }

    const daysDifference = differenceInDays(now, date);
    return `${daysDifference} days`;
  };

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

  const posts = data?.pages.flatMap((page) => page.data) || [];

  return (
    <div className="bg-gray-100 min-h-screen mb-5">
      <Navbar />

      <ul className="flex flex-col items-center space-y-6 mt-8">
        {posts.map((item: any) => (
          <li
            key={item.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden w-full h-full max-w-[1120px] min-w-[250px] h-[753px] flex flex-col"
          >
            {/* Top section: Avatar and information */}
            <div className="flex items-center mt-4 mx-6">
              <img
                src={item.avatar}
                alt={item.username}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h2 className="font-bold text-lg text-[#282F2D]">
                  {item.username}
                </h2>
                <div className="flex gap-2">
                  <p className="text-sm text-blue-800 font-bold">
                    {item.shopName || "No Shop Name"}
                  </p>
                  <p className="text-sm text-gray-500 flex items-center gap-1">
                    <span className="text-gray-400">•</span>
                    {formatTimeAgo(item.date)}
                  </p>
                </div>
              </div>
            </div>

            {/* Scrollable content */}
            <div className="pb-4 h-[517px]">
              <p className="text-gray-700 mx-6 my-4">{item.text}</p>

              {/* Images */}
              {item.images && (
                <div
                  className={`${
                    item.images.length === 1
                      ? "flex mt-2 bg-[#CACE5D] justify-center"
                      : "flex mt-2 gap-2 bg-[#CACE5D] justify-center"
                  }`}
                >
                  {item.images
                    .slice(0, 2)
                    .map((image: string, index: number) => (
                      <img
                        key={index}
                        src={image}
                        alt="Post"
                        className={`${
                          item.images.length === 1
                            ? "w-full object-cover rounded-lg max-w-[881px] max-h-[517px]"
                            : "w-full object-cover rounded-lg max-w-[547px] max-h-[517px]"
                        }`}
                      />
                    ))}
                </div>
              )}
            </div>

            {/* Bottom section: Likes and comments */}
            <div className="px-6 py-4 bg-gray-50 border-t flex items-center justify-between ">
              <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-500">
                <img src="/icons/like.svg" alt="Like" className="w-5 h-5" />

                <span>{item.likes} Likes</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-500">
                <span>{item.comments} Comments</span>
              </button>
            </div>
            <div className="bg-slate-50 px-6 py-2">
              <div className="border-t border-gray-300"></div>
            </div>

            <div className="flex justify-around py-4 items-center bg-slate-50 ">
              <button className="flex gap-2 items-center hover:text-blue-500">
                <img
                  src="/icons/Frame1.svg"
                  alt="Like"
                  className="w-5 h-5 hover:text-blue-500"
                />
                <span>Like</span>
              </button>
              <button className="flex gap-2 items-center hover:text-blue-500">
                <img
                  src="/icons/Frame2.svg"
                  alt="Comment"
                  className="w-5 h-5 hover:text-blue-500"
                />
                <span>Comment</span>
              </button>
            </div>
          </li>
        ))}
      </ul>

      {/* Intersection observer target */}
      <div
        ref={observerRef}
        className="h-10 w-full flex items-center justify-center text-gray-500"
      >
        {isFetchingNextPage && <p>Loading more...</p>}
      </div>
    </div>
  );
}
