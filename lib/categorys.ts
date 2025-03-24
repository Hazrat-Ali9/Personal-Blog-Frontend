export const categorys: Category[] = [
  {
    id: 1,
    name: "All",
    slug: "/articles",
  },
  {
    id: 22,
    name: "Technology",
    slug: "/category/technology",
    path: "technology",
    image: "/category/technology.avif",
  },
  {
    id: 2,
    name: "Programming",
    slug: "/category/programming",
    path: "programming",
    image: "/category/programming.png",
  },
  {
    id: 7,
    name: "Web Development",
    slug: "/category/webdevelopment",
    path: "webdevelopment",
    image: "/category/web-dev.png",
  },
  {
    id: 8,
    name: "Software Q/A Testing ",
    slug: "/category/softwaretesting",
    path: "softwaretesting",
    image: "/category/st.png",
  },
  {
    id: 10,
    name: "Dart",
    slug: "/category/dart",
    path: "dart",
    image: "/category/dart.png",
  },
  {
    id: 9,
    name: "Software Engineering",
    slug: "/category/softwareengineering",
    path: "softwareengineering",
    image: "/category/se.png",
  },
  {
    id: 3,
    name: "Machine Learning",
    slug: "/category/machinelearning",
    path: "machinelearning",
    image: "/category/ml.png",
  },
  {
    id: 4,
    name: "Git and Github",
    slug: "/category/gitandgithub",
    path: "gitandgithub",
    image: "/category/git.png",
  },
  {
    id: 5,
    name: "Data Science",
    slug: "/category/datascience",
    path: "datascience",
    image: "/category/data-science.png",
  },
  {
    id: 6,
    name: "Artificial Intelligence",
    slug: "/category/ai",
    image: "/category/ai.png",
    path: "ai",
  },
];

export interface Category {
  id: number;
  name: string;
  slug: string;
  path?: string;
  image?: string;
}
