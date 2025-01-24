"use client";

import { createContext, useContext, useState } from "react";

type LikeState = {
  [postId: string]: {
    didLike: boolean;
    likes: number;
  };
};

type LikesContextType = {
  likesState: LikeState;
  toggleLike: (postId: string) => void;
  setLikesState: React.Dispatch<React.SetStateAction<LikeState>>;
};

const LikesContext = createContext<LikesContextType | undefined>(undefined);

export const LikesProvider = ({ children }: { children: React.ReactNode }) => {
  const [likesState, setLikesState] = useState<LikeState>({});

  const toggleLike = (postId: string) => {
    setLikesState((prevState) => {
      const currentPost = prevState[postId] || { didLike: false, likes: 0 };

      return {
        ...prevState,
        [postId]: {
          didLike: !currentPost.didLike,
          likes: currentPost.didLike
            ? currentPost.likes - 1
            : currentPost.likes + 1,
        },
      };
    });
  };
  return (
    <LikesContext.Provider value={{ likesState, toggleLike, setLikesState }}>
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
