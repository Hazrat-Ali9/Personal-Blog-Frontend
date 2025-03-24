'use client'
import React from "react";
import {
  Clock,
  Share2,
  Facebook,
  Twitter,
  Linkedin as LinkedIn,
} from "lucide-react";
import { Avatar } from "antd";
import moment from "moment";
interface ArticleHeaderProps {
  title: string;
  author: {
    name: string;
    avatar: string;
  };
  user: string;
  date: string;
  readingTime: string;
  category: string;
  tags: string[];
}

export function ArticleHeader({
  title,
  author,
  date,
  user,
  readingTime,
  category,
  tags,
}: ArticleHeaderProps) {
  return (
    <header className="mb-8">
      <div className="space-y-4">
        <div className="flex items-center space-x-2 text-sm text-gray-300">
          <span className="uppercase tracking-wider">{category}</span>
          <span>•</span>
          <span>{moment(date).format("MMM DD, YYYY")}</span>
        </div>

        <h1 className="text-2xl md:text-5xl font-bold text-white leading-tight">
          {title}
        </h1>

        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-x-4">
            <Avatar
              size={40}
              src={'/images/me.png'}
              alt={user}
              className="w-10 h-10 rounded-full border border-white bg-white"
            />
            <div>
              <p className="font-xl font-semibold text-gray-200">{user}</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Facebook className="w-5 h-5 text-blue-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Twitter className="w-5 h-5 text-blue-400" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <LinkedIn className="w-5 h-5 text-blue-700" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Share2 className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
            {category}
          </span>
        </div>
      </div>
    </header>
  );
}
