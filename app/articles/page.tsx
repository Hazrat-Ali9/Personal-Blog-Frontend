import ArticleCard from "@/components/ArticleCard";
import Sidebar from "@/components/Sidebar/Sidebar";
import { getAllBlogs } from "@/lib/firebase/blogs";
import { PostType } from "@/lib/posts";
import React from "react";
export const metadata = {
  title: "All Articles - Hazrat Ali Problem Solving Website",
  description: "Read All Articles Hazrat Ali Problem Solving Website.",
};

const page = async () => {
  const posts = await getAllBlogs();
  return (
    <div className="max-w-7xl mx-auto py-10">
      <h1 className="text-2xl font-bold">Articles</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8  mt-10">
        <div className="space-y-6 lg:col-span-2">
          {posts.map((post: PostType) => (
            <ArticleCard key={post.id} post={post} />
          ))}
        </div>
        <Sidebar />
      </div>
    </div>
  );
};

export default page;
