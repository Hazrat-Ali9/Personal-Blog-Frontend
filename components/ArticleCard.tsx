/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { categorys } from "@/lib/categorys";
import { PostType } from "@/lib/posts";
import moment from "moment";
import Link from "next/link";
import React from "react";
// Article Card
const ArticleCard = ({ post }: { post: PostType }) => {
  return (
    <article className="bg-gray-900 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow shadow-gray-800 flex lg:flex-row flex-col gap-x-7 items-center">
      <Link href={`/${post.id}`} className="overflow-hidden min-w-[200px] lg:max-w-[200px] max-w-max h-auto relative">
        <img
          src={post.coverImage}
          alt="Post Cover"
          className="w-full h-full object-contain rounded-lg"
        />
      </Link>
      <div className="mt-4 lg:mt-0">
        <div className="text-sm text-gray-200 mb-2">
          {moment(post.date).format("MMM DD, YYYY")} •{" "}
          <Link
            href={
              categorys.find((category) => category.name === post.category)
                ?.slug as string
            }
          >
            {post.category as string}
          </Link>
        </div>
        <h3 className="text-xl font-semibold mb-2 hover:text-blue-300 text-gray-100">
          <Link href={`/${post.id}`}>{post.title}</Link>
        </h3>
        <p className="text-gray-300 mb-4">{post.excerpt?.slice(0, 200)}...</p>
        <Link
          href={`/${post.id}`}
          className="text-blue-500 hover:text-blue-300 font-medium"
        >
          Read more →
        </Link>
      </div>
    </article>
  );
};

export default ArticleCard;
