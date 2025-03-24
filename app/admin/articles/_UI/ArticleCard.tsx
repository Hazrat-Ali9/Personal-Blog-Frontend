"use client";
import { deleteBlog } from "@/lib/firebase/blogs";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { PostType } from "@/lib/posts";
import { Popconfirm } from "antd";
import Link from "next/link";
import React from "react";
import toast from "react-hot-toast";

const ArticleCard = ({
  post,
  setReload,
}: {
  post: PostType;
  setReload: any;
}) => {
  const deleteArticle = async () => {
    try {
      await deleteBlog(post.id);
      toast.success("Article deleted successfully");
      setReload(new Date());
    } catch (error) {
      console.error("Error deleting article:", error);
    }
  };
  return (
    <article className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
      <div className="text-sm text-gray-500 mb-2">
        {post.date} • {post.category}
      </div>
      <h3 className="text-xl font-semibold mb-2 hover:text-blue-800 text-gray-700">
        <Link href={"/" + post.id}>{post.title}</Link>
      </h3>
      <p className="text-gray-600 mb-4">{post.excerpt}</p>
      <div className="flex">
        <Link
          href={"/admin/articles/" + post.id}
          className="text-blue-700 hover:text-blue-900 font-medium"
        >
          Update This
        </Link>
        <Popconfirm
          title="Are you sure you want to delete this article?"
          onConfirm={() => {
            deleteArticle();
          }}
        >
          <button className="text-red-600 hover:text-red-800 font-medium ml-4">
            Delete
          </button>
        </Popconfirm>
      </div>
    </article>
  );
};

export default ArticleCard;
