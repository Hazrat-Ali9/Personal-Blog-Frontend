"use client";
import { Category } from "@/lib/categorys";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const CategoryCard = ({ category }: { category: Category }) => {
  const router = useRouter();
  return (
    <div
      key={category.id}
      onClick={() => router.push(`${category.slug}`)}
      className="bg-white rounded-lg shadow-md p-4 w-full cursor-pointer"
    >
      <Image
        height={400}
        width={400}
        objectFit="cover"
        alt="example"
        src={category.image ? category.image : "/category/leet-codea.jpeg"}
        className="w-full h-[270px] object-contain object-center rounded-2xl"
      />
    </div>
  );
};

export default CategoryCard;
