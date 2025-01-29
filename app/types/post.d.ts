import { RefObject } from "react";

export type ItemProps = {
  id: string;
  avatar: string;
  username: string;
  shopName?: string;
  text: string;
  images: string[];
  comments: number;
  didLike: boolean;
  date: string;
  likes: number;
};

export type PostProps = {
  posts: ItemProps[];
  status: boolean;
  ref: RefObject<HTMLDivElement | null>;
};

export type LikeButtonProps = {
  postId: string;
  likes: number;
  didLike: boolean;
  comments: number;
};

export type LikesContextType = {
  likesState: LikeState;
  toggleLike: (postId: string, currentLikes: number, didLike: boolean) => void;
};


export type LikeState = {
  [postId: string]: {
    didLike: boolean;
    likes: number;
  };
};

