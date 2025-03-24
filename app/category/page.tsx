import { Category, categorys } from "@/lib/categorys";
import React from "react";
import CategoryCard from "./_UI/CategoryCard";
export const metadata = {
  title: "Categories - Hazrat Ali Problem Solving Website",
  description: "Categories of Hazrat Ali Problem Solving Website",
};
const page = () => {
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:px-0 px-4 lg:py-20 py-10">
      {categorys.slice(1).map((category: Category) => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </div>
  );
};

export default page;
