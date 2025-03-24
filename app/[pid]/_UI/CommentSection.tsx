"use client";
import React, { useEffect, useState } from "react";
import { ThumbsUp, Reply } from "lucide-react";
import { Avatar } from "antd";
import { PostType } from "@/lib/posts";
import { getCommentByPostId, getComments } from "@/lib/firebase/comment";
import CommentForm from "./CommentForm";
import CommentComponent from "./CommentCard";

interface Comment {
  id: string;
  user: {
    name: string;
    avatar: string;
  };
  content: string;
  timestamp: string;
  likes: number;
  replies: Comment[];
}

export type CommentType = {
  id: string;
  pid: string;
  user: string;
  email: string;
  content: string;
  timestamp: string;
  likes: string[];
  createdAt: Date;
  repliedTo?: string;
  replies: CommentType[];
};
export function CommentSection({ post }: { post: PostType }) {
  const [sortBy, setSortBy] = useState("newest");
  const [comments, setComments] = useState<CommentType[]>([]);
  const [reloadComments, setReloadComments] = useState<any>(null);
  
  useEffect(() => {
    (async () => {
      try {
        const comments = await getCommentByPostId(post.id);
        setComments(comments);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [post, reloadComments]);
  const sortedComments = comments.sort((a, b) => {
    if (sortBy === "newest") {
      return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime();
    } else if (sortBy === "oldest") {
      return new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime();
    } else if (sortBy === "popular") {
      return b.likes.length - a.likes.length;
    }
    return 0;
  })
  return (
    <section className="mt-12 space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-100">Comments</h2>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="px-3 py-2 border rounded-lg text-gray-100"
        >
          <option value="newest">Newest First</option>
          <option value="oldest">Oldest First</option>
          <option value="popular">Most Popular</option>
        </select>
      </div>

      <CommentForm
        post={post}
        reloadComments={() => setReloadComments(Date.now())}
      />

      <div className="space-y-6">
        {sortedComments.map((comment, index) => (
          <CommentComponent
            mainComment={comment}
            key={index}
            comment={comment}
            depth={0}
            post={post}
            reloadComments={() => setReloadComments(Date.now())}
          />
        ))}
      </div>
    </section>
  );
}
