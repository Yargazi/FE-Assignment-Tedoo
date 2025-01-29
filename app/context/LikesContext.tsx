"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { LikeState, LikesContextType } from "../types/post";

const LikesContext = createContext<LikesContextType | undefined>(undefined);

export const LikesProvider = ({ children }: { children: React.ReactNode }) => {
  const [likesState, setLikesState] = useState<LikeState>({});

  useEffect(() => {
    const storedLikes = localStorage.getItem("likedPosts");
    if (storedLikes) {
      setLikesState(JSON.parse(storedLikes));
    }
  }, []);

  const toggleLike = (
    postId: string,
    currentLikes: number,
    didLike: boolean
  ) => {
    setLikesState((prevState) => {
      const currentPost = prevState[postId] ?? { didLike, likes: currentLikes };

      const updatedPost = {
        didLike: !currentPost.didLike,
        likes: currentPost.didLike
          ? currentPost.likes - 1
          : currentPost.likes + 1,
      };

      const updatedState = { ...prevState, [postId]: updatedPost };

      localStorage.setItem("likedPosts", JSON.stringify(updatedState));

      return updatedState;
    });
  };

  return (
    <LikesContext.Provider value={{ likesState, toggleLike }}>
      {children}
    </LikesContext.Provider>
  );
};

export const useLikes = () => {
  const context = useContext(LikesContext);
  if (!context) {
    throw new Error("useLikes must be used within a LikesProvider");
  }
  return context;
};
