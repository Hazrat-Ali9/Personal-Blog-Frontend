"use client";
// Search Bar Tsx
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const router = useRouter();
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
      <div className="bg-white rounded-lg shadow-lg p-4">
        <div className="relative">
          <Search
            className="absolute left-3 top-3 h-5 w-5 text-gray-400"
            onClick={() => {
              if (searchQuery) {
                router.push(`/search?q=${searchQuery}`);
              }
            }}
          />
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            type="text"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                if (searchQuery) {
                  router.push(`/search?q=${searchQuery}`);
                }
              }
            }}
            placeholder="Search articles..."
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
