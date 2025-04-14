import React from "react";
import Sidebar from "@/components/Sidebar/Sidebar";
import Link from "next/link";
import { Button } from "antd";
import ArticleCard from "@/components/ArticleCard";
import { getBlogs } from "@/lib/firebase/blogs";
import { PostType } from "@/lib/posts";
import SearchBar from "@/components/SearchBar";
import Image from "next/image";
// blogs Functions
async function App() {
  const blogs: PostType[] = await getBlogs(6);
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="text-start flex flex-col justify-center">
            <h1 className="text-4xl font-bold mb-4">
              Welcome to Hazrat Ali Blogs <br />{" "}
              <span className="text-gray-400 text-2xl">
                Your Gateway to the World of Programming and Technology!
              </span>
            </h1>
            <p className="text-sm text-gray-300 max-w-4xl mx-auto text-start">
              At Hazrat Ali Blog Site, we bring you insightful blogs on
              technology and programming. Whether you’re a beginner exploring
              the basics or an experienced developer looking for in-depth
              discussions, our platform offers valuable content to enhance your
              knowledge. Discover expert insights, coding tutorials, and the
              latest trends in the tech world. Join our community, stay updated,
              and take your programming skills to the next level!
            </p>
          </div>
          <div className="w-full">
            <Image
              src={"/images/hazrat-ali.png"}
              width={1000}
              height={1000}
              alt="Me"
              className="w-full "
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Posts */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-6 text-gray-200">
              Recent Articles
            </h2>
            <div className="space-y-8">
              {blogs.map((post, index) => (
                <ArticleCard key={index} post={post} />
              ))}
            </div>
            <div className="mt-10">
              {/* <Pagination current={2} pageSize={10} total={50} /> */}
              <Link href="/articles">
                <Button type="primary" size="large">
                  Read More Articles →
                </Button>
              </Link>
            </div>
          </div>

          {/* Sidebar */}
          <Sidebar />
        </div>
      </main>
    </div>
  );
}

export default App;
