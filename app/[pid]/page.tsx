import React from "react";
import { CommentSection } from "./_UI/CommentSection";
import { ArticleHeader } from "./_UI/ArticleHeader";
import { getSingleBlog } from "@/lib/firebase/blogs";
import { PostType } from "@/lib/posts";

export const generateMetadata = async ({
  params,
}: {
  params: { pid: string };
}) => {
  const { pid } = await params;
  const post: PostType = await getSingleBlog(pid);
  if (!post) {
    return {
      title: "Page not found",
      description: "Page not found",
      openGraph: {
        title: "Page not found",
        description: "Page not found",
      },
    };
  }
  return {
    title: post.title?.slice(0, 60),
    description: post.excerpt?.slice(0, 160),
    openGraph: {
      title: post.title?.slice(0, 60),
      description:post.excerpt?.slice(0, 160),
      images: [
        {
          url: post.coverImage,
          width: 800,
          height: 600,
          alt: post.title,
        },
      ]
    },
  };
};

async function SingleArticle({ params }: { params: { pid: string } }) {
  const { pid } = await params;
  const post: PostType = await getSingleBlog(pid);
  if (!post) {
    return (
      <h1 className="text-center text-2xl font-bold text-gray-200 mt-10">
        Page not found
      </h1>
    );
  }
  return (
    <div className="min-h-screen bg-black text-white">
      <main className="max-w-7xl mx-auto shadow-lg shadow-gray-600 rounded-xl my-10 px-4 py-8 bg-gray-900">
        <article className="rounded-xl shadow-sm p-6 md:p-8 overflow-hidden">
          <ArticleHeader
            title={post.title}
            author={{ name: post.user, avatar: "" }}
            user={post.user}
            date={post.date}
            readingTime={"5"}
            category={post.category}
            tags={[]}
          />

          <div
            className="prose prose-lg max-w-none text-gray-200 mt-8 border-b overflow-x-auto pb-10"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <CommentSection post={post} />
        </article>
      </main>
    </div>
  );
}

export default SingleArticle;
