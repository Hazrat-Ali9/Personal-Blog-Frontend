import { Image } from "antd";
import React from "react";
export const metadata = {
  title: "Achivements - Hazrat Ali Problem Solving Website",
  description: "Achivements of Hazrat Ali Problem Solving Website.",
};
const page = () => {
  const activements = [
    "/achivement/1.jpeg",
    "/achivement/2.jpeg",
    "/achivement/3.jpeg",
    "/achivement/4.jpeg",
    "/achivement/5.jpeg",
    "/achivement/6.jpeg",
    "/achivement/7.jpeg",
    "/achivement/8.jpeg",
    "/achivement/9.jpeg",
    "/achivement/10.jpeg",
    "/achivement/12.jpeg",
    "/achivement/13.jpeg",
    "/achivement/11.jpeg",
  ];
  return (
    <div className="max-w-7xl mx-auto py-10 px-5">
      <h1 className="text-3xl font-bold text-center">Achievements</h1>
      <div className="grid grid-cols-3 gap-10 mt-10">
        {activements.map((activement, index) => (
          <Image
            src={activement}
            alt=""
            key={index}
            className="w-full h-full object-cover object-center"
          />
        ))}
      </div>
    </div>
  );
};

export default page;
