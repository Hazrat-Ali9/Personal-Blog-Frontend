"use client";
import React from "react";
import { BookOpen, Facebook, Github, Mail, Twitter } from "lucide-react";
import { Input } from "antd";
import RecentArticle from "./RecentArticle";
import { Category, categorys } from "@/lib/categorys";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
const Sidebar = () => {
  const router = useRouter();
  return (
    <div className="lg:col-span-1">
      <div className="bg-gray-900 rounded-lg shadow-md p-6 mb-6">
        <Input.Search
          placeholder="input search text"
          allowClear
          enterButton="Search"
          size="large"
          onSearch={(value) => {
            if (value) {
              router.push(`/search?q=${value}`);
            }
          }}
        />
      </div>
      <div className="bg-gray-900 rounded-lg shadow-md p-6 mb-6">
        <h3 className="text-lg font-semibold mb-4 text-white">Categories</h3>
        <ul className="space-y-2">
          {categorys.map((category: Category) => (
            <li key={category.id}>
              <Link
                href={`${category.slug}`}
                className="text-gray-200 hover:text-blue-200"
              >
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <RecentArticle />
      <div className="bg-gray-900 rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold mb-4 text-white">Connect</h3>
        <div className="flex flex-wrap space-x-4">
          <a
            target="_blank"
            href="https://github.com/Hazrat-Ali9"
            className="text-gray-200 hover:text-blue-200"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href="https://www.hackerrank.com/profile/Hazrat_Ali9"
            target="_blank"
            className="text-gray-200 hover:text-blue-200"
          >
            <Image
              src={"/icon/hr.png"}
              width={30}
              height={30}
              alt="icon"
              className="h-6 w-6"
            />
          </a>
          <a
            href="https://www.hackerearth.com/@Hazrat-Ali9/"
            target="_blank"
            className="text-gray-200 hover:text-blue-200"
          >
            <Image
              src={"/icon/ha.png"}
              width={30}
              height={30}
              alt="icon"
              className="h-6 w-6"
            />
          </a>
          <a
            href="https://codeforces.com/profile/Hazrat_Ali9"
            target="_blank"
            className="text-gray-200 hover:text-blue-200"
          >
            <Image
              src={"/icon/cf.png"}
              width={30}
              height={30}
              alt="icon"
              className="h-6 w-6"
            />
          </a>
          <a
            href="https://www.codechef.com/users/hazratali9"
            target="_blank"
            className="text-gray-200 hover:text-blue-200"
          >
            <Image
              src={"/icon/cc.png"}
              width={30}
              height={30}
              alt="icon"
              className="h-6 w-6"
            />
          </a>
          <a
            href="https://leetcode.com/u/Hazrat-Ali9/"
            target="_blank"
            className="text-gray-200 hover:text-blue-200"
          >
            <Image
              src={"/icon/lc.png"}
              width={30}
              height={30}
              alt="icon"
              className="h-6 w-6"
            />
          </a>
          <a
            href="https://x.com/Hazrat_Ali9"
            target="_blank"
            className="text-gray-200 hover:text-blue-200"
          >
            <Image
              src={"/icon/x.png"}
              width={30}
              height={30}
              alt="icon"
              className="h-6 w-6"
            />
          </a>
          <a
            href="https://www.facebook.com/HAZRATALIML"
            target="_blank"
            className="text-gray-200 hover:text-blue-200"
          >
            <Facebook className="h-6 w-6" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
