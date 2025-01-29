import InteractiveSection from "./InteractiveSection";
import { differenceInHours, differenceInDays } from "date-fns";
import Image from "next/image";
import { ItemProps, PostProps } from "../types/post";

const Post = ({ posts, status, ref }: PostProps) => {
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

  return (
    <div>
      <ul className="flex flex-col items-center space-y-6 mt-8">
        {posts.map((item: ItemProps) => (
          <li
            key={item.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden w-full h-full max-w-[1120px] min-w-[250px] max-h-[753px] flex flex-col"
          >
            {/* Top section: Avatar and information */}
            <div className="flex items-center mt-4 mx-6">
              <Image
                height={40}
                width={40}
                src={item.avatar}
                alt={item.username}
                className="h-[40px] w-[40px] object-cover object-center rounded-full mr-4"
              />
              <div>
                <h2 className="font-medium text-lg text-[#282F2D]">
                  {item.username}
                </h2>
                <div className="flex gap-2">
                  <p className="text-sm text-[#0A66C2] font-medium">
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
                      <Image
                        key={index}
                        src={image}
                        width={item.images.length === 1 ? 881 : 547}
                        height={517}
                        alt="Post"
                        className={`${
                          item.images.length === 1
                            ? "w-full object-cover object-center max-w-[881px] max-h-[517px]"
                            : "w-full object-cover object-center max-w-[547px] max-h-[517px]"
                        }`}
                      />
                    ))}
                </div>
              )}
            </div>
            {/* Bottom section: Likes and comments */}
            <InteractiveSection
              postId={item.id}
              likes={item.likes}
              didLike={item.didLike}
              comments={item.comments}
            />
          </li>
        ))}
      </ul>

      {/* Intersection observer target */}
      <div
        ref={ref}
        className="h-10 w-full flex items-center justify-center text-gray-500"
      >
        {status && <p>Loading more...</p>}
      </div>
    </div>
  );
};

export default Post;
