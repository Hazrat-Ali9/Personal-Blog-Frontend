"use client";
// Use Effect Suspense
import React, { useEffect, Suspense } from "react";
import BreadCrumb from "./_UI/BreadCrumb";
import { useSearchParams } from "next/navigation";
import Sidebar from "@/components/Sidebar/Sidebar";
import { getAllBlogs } from "@/lib/firebase/blogs";
import ArticleCard from "@/components/ArticleCard";
import { PostType } from "@/lib/posts";



const SearchPage = () => {
  const searchQuery = useSearchParams().get("q") as string;
  const [posts, setPosts] = React.useState([]);

  useEffect(() => {
    (async () => {
      try {
        const p = await getAllBlogs();
        const result = p.filter((post: any) =>
          post.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setPosts(result);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [searchQuery]); // Ensure useEffect runs when searchQuery changes

  return (
    <div>
      <BreadCrumb results={posts?.length || 0} query={searchQuery} />
      <div className="grid grid-cols-1 max-w-7xl mx-auto lg:grid-cols-3 gap-8 mt-10 overflow-y-auto">
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

// ✅ Wrap the component with Suspense in the main export
const Page = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <SearchPage />
  </Suspense>
);

export default Page;
