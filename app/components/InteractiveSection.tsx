"use client";

import { useLikes } from "../context/LikesContext";
import Image from "next/image";
type LikeButtonProps = {
  postId: string;
  likes: number;
  comments: number;
};

const InteractiveSection = ({ postId, likes, comments }: LikeButtonProps) => {
  const { likesState, toggleLike } = useLikes();
  const isLiked = likesState[postId] || false;

  return (
    <div>
      <div className="px-6 py-4 bg-gray-50 border-t flex items-center justify-between ">
        <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-500">
          <Image
            width={5}
            height={5}
            src="/icons/like.svg"
            alt="Like"
            className="w-5 h-5"
          />
          <span>{likes} Likes</span>
        </button>
        <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-500">
          <span>{comments} Comments</span>
        </button>
      </div>
      <div className="bg-slate-50 px-6 py-2">
        <div className="border-t border-gray-300"></div>
      </div>

      <div className="flex justify-around py-4 items-center bg-slate-50 ">
        <div className=" items-center hover:text-blue-500">
          <label className="container" onClick={() => toggleLike(postId)}>
            <input type="checkbox" />
            <svg
              id="Glyph"
              version="1.1"
              viewBox="0 0 32 32"
              xmlSpace="preserve"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              className="svg-action"
            >
              <path
                d="M29.845,17.099l-2.489,8.725C26.989,27.105,25.804,28,24.473,28H11c-0.553,0-1-0.448-1-1V13  c0-0.215,0.069-0.425,0.198-0.597l5.392-7.24C16.188,4.414,17.05,4,17.974,4C19.643,4,21,5.357,21,7.026V12h5.002  c1.265,0,2.427,0.579,3.188,1.589C29.954,14.601,30.192,15.88,29.845,17.099z"
                id="XMLID_254_"
              ></path>
              <path
                d="M7,12H3c-0.553,0-1,0.448-1,1v14c0,0.552,0.447,1,1,1h4c0.553,0,1-0.448,1-1V13C8,12.448,7.553,12,7,12z"
                id="XMLID_256_"
              ></path>
            </svg>
            <span>{isLiked ? "Liked" : "Like"}</span>
          </label>
        </div>
        <button className="flex gap-2 items-center hover:text-blue-500">
          <Image
            src="/icons/Frame2.svg"
            alt="Comment"
            width={18}
            height={24}
            className="svg-action hover:text-blue-500"
          />
          <span>Comment</span>
        </button>
      </div>
    </div>
  );
};

export default InteractiveSection;
