"use client";
import { getAllBlogs, getBlogs } from "@/lib/firebase/blogs";
import React, { useEffect, useState } from "react";
import ArticleCard from "./_UI/ArticleCard";
// Admin Page
const Page = () => {
  const [posts, setPosts] = useState([]);
  const [reload, setReload] = useState<any>(null);
  useEffect(() => {
    (async () => {
      try {
        const p = await getAllBlogs();
        setPosts(p);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [reload]);
  return (
    <div className="max-w-7xl mx-auto py-10 bg-gray-900 my-10 px-5 rounded-xl">
      <h1 className="text-2xl font-bold">Articles</h1>
      <div className="mt-10 flex flex-col gap-y-4">
        {posts.map((post: any) => (
          <ArticleCard setReload={setReload} post={post} key={post.id} />
        ))}
      </div>
    </div>
  );
};

export default Page;
