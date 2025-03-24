"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import BlogWriter from "../_UI/BlogWriter";
import { categorys } from "@/lib/categorys";
import { Button, Input, Select } from "antd";
import { addBlog } from "@/lib/firebase/blogs";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function Page() {
  const [title, setTitle] = useState("");
  const [brief, setBrief] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const router = useRouter();
  const handleSubmit = async () => {
    if (!title || !content || !category || !brief) {
      alert("Title and content cannot be empty!");
      return;
    }
    try {
      const result = await addBlog({
        title,
        content,
        category,
        coverImage,
        excerpt: brief,
        date: new Date().toISOString(),
        user: "Hazrat Ali",
      });
      alert("Blog saved successfully!");
      router.push("/admin/articles");
    } catch (error) {
      console.error("Error saving blog:", error);
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-5 bg-gray-800 my-10">
      <h1 className="text-2xl font-bold mb-4">Write a New Blog</h1>
      <Input
        type="text"
        placeholder="Blog Title"
        size="large"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <div className="mt-5" />
      <Input.TextArea
        size="large"
        placeholder="Brief Description"
        className="w-full p-2 border rounded mb-4"
        value={brief}
        onChange={(e) => setBrief(e.target.value)}
      />
       <div className="mt-5" />
      <Input
        type="text"
        placeholder="Cover Image URL"
        size="large"
        value={coverImage}
        onChange={(e) => setCoverImage(e.target.value)}
      />
      <div className="mt-5" />
      <Select
        defaultValue=""
        className="w-full"
        size="large"
        //   onChange={handleChange}
        options={[
          {
            value: "",
            label: "Select Category",
          },
          ...categorys.slice(1).map((category: any) => ({
            value: category.name,
            label: category.name,
          })),
        ]}
        value={category}
        onChange={(value) => setCategory(value)}
      />
      <div className="mt-5" />
      <BlogWriter content={content} setContent={setContent} />
      <Button
        onClick={handleSubmit}
        type="primary"
        size="large"
        className="mt-5"
      >
        Publish Blog
      </Button>
    </div>
  );
}
