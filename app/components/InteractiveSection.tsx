"use client";

import { useLikes } from "../context/LikesContext";
import Image from "next/image";
import { LikeButtonProps } from "../types/post";
import Frame2 from "../src/assets/icons/Frame2.svg";
import LikeIco from "../src/assets/icons/LikeIco.svg";
const InteractiveSection = ({
  postId,
  didLike,
  likes,
  comments,
}: LikeButtonProps) => {
  const { likesState, toggleLike } = useLikes();

  const isLiked = likesState[postId]?.didLike ?? didLike;
  const totalLikes = likesState[postId]?.likes ?? likes;

  return (
    <div>
      <div className="px-6 py-4 bg-gray-50 border-t flex items-center justify-between ">
        <div className="flex items-center space-x-2 text-gray-600 pointer-events-none">
          <Image width={20} height={20} src="/icons/like.svg" alt="Like" />
          <span>{totalLikes} Likes</span>
        </div>
        <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-500">
          <span>{comments} Comments</span>
        </button>
      </div>
      <div className="bg-slate-50 px-6 py-2">
        <div className="border-t border-gray-300"></div>
      </div>

      <div className="flex justify-around py-4 items-center bg-slate-50 ">
        <button className="flex items-center gap-2 hover:text-blue-500 group">
          <label className="container flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={isLiked}
              onChange={() => toggleLike(postId, likes, didLike)}
            />
            <LikeIco className="svg-action h-[18px] w-[18px]  like-icon group-hover" />
            <span>Like</span>
          </label>
        </button>

        <button className="comment-button group">
          <Frame2 className="svg-action comment-icon" />
          <span>Comment</span>
        </button>
      </div>
    </div>
  );
};

export default InteractiveSection;
