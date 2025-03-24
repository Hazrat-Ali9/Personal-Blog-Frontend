import React from "react";
import BreadCrumb from "../_UI/BreadCrumb";
import ArticleCard from "@/components/ArticleCard";
import { PostType } from "@/lib/posts";
import { categorys } from "@/lib/categorys";
import { getAllByCategory } from "@/lib/firebase/blogs";
import Sidebar from "@/components/Sidebar/Sidebar";
import Link from "next/link";

export const generateMetadata = async ({
  params,
}: {
  params: { slug: string };
}) => {
  try {
    const { slug } = await params;
    const category = categorys.find((category) => category.path === slug);

    if (!category) {
      throw new Error("Category not found");
    }

    const title = `${category.name} - Hazrat Ali Problem Solving Website`;
    const desc = `Read all ${category.name} articles in Hazrat Ali Problem Solving Website.`;

    return {
      title: title,
      description: desc,
      openGraph: {
        title: title,
        description: desc,
        images: [
          {
            url: category.image, // Ensure this file exists in the `public/` folder
            width: 100,
            height: 100,
            alt: category.name,
          },
        ],
      },
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    throw error;
  }
};

const page = async ({ params }: { params: { slug: string } }) => {
  const { slug } = await params;
  const category = categorys.find((category) => category.path === slug);

  if (!category) {
    return (
      <div className="text-center mt-10">
        <h1 className="text-2xl font-bold text-gray-100">Category not found</h1>
        <Link href="/articles" className="text-blue-600">
          Go back to Articles
        </Link>
      </div>
    );
  }

  let blogs: PostType[] = [];
  try {
    blogs = await getAllByCategory(category.name);
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return (
      <div className="text-center mt-10">
        <h1 className="text-2xl font-bold text-gray-200">
          Error loading articles
        </h1>
        <Link href="/articles" className="text-blue-400">
          Go back to Articles
        </Link>
      </div>
    );
  }

  return (
    <div>
      <BreadCrumb category={category} />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mt-10 lg:p-0 p-4">
        <div className="space-y-6 lg:col-span-2">
          {blogs.length === 0 ? (
            <div className="text-center text-2xl font-bold text-gray-200 mt-10">
              No articles found in this category{" "}
              <Link className="text-blue-600" href="/articles">
                Read All →
              </Link>
            </div>
          ) : (
            blogs.map((post) => <ArticleCard key={post.id} post={post} />)
          )}
        </div>
        <Sidebar />
      </div>
    </div>
  );
};

export default page;
