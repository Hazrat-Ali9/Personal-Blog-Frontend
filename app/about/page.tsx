import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="max-w-7xl mx-auto py-10">
      <h1 className="text-4xl font-bold text-center">About Me</h1>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 mt-20">
        <Image
          src={"/images/me.png"}
          width={1000}
          height={1000}
          alt="Me"
          className="object-cover object-center"
        />
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-semibold">Web Application Developer</h2>
          <p className="lg:text-base text-sm mt-5">
            Hello, I'm Hazrat Ali, a dedicated Software Developer with a passion
            for crafting robust and innovative solutions. My journey in the
            world of technology has been an exciting exploration, and I'm
            thrilled to share a bit about myself with you.
          </p>
          <p className="lg:text-base text-sm mt-2">
            Proficient in MERN Stack and Python: I specialize in MERN (MongoDB,
            Express.js, React, Node.js) stack development, harnessing the power
            of these technologies to build dynamic and scalable applications.
            Additionally, my proficiency extends to Python, where I've had the
            pleasure of working on diverse projects, including those leveraging
            the Django framework.
          </p>
          <p className="lg:text-base text-sm mt-2">
            Passion for Problem-Solving: What fuels my enthusiasm for software
            development is the thrill of problem-Solving. I thrive on
            challenges, and the dynamic nature of the tech world keeps me
            constantly engaged. My goal is not just to write code but to
            architect solutions that stand the test of time.
          </p>
          <p className="lg:text-base text-sm mt-2">
            Let's Collaborate: Whether you have a project in mind, wish to
            discuss the latest trends in tech, or just want to connect with a
            fellow enthusiast, I'm always open to collaboration and
            conversation. Feel free to reach out to me via email or connect with
            me on LinkedIn.
          </p>
          <p className="lg:text-base text-sm mt-2">
            Thank you for visiting my corner of the web. Let's embark on a
            journey of innovation together!
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
