export interface PostType {
  id: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  user: string;
  tags?: string[];
  content: string;
  coverImage: string;
}
// posts
export const recentPosts = [
  {
    title: "Understanding Dynamic Programming",
    date: "March 15, 2024",
    category: "Algorithms",
    excerpt: "A deep dive into dynamic programming concepts and practical examples...",
    user: "",
    tags: []
  },
  {
    title: "Advanced Graph Algorithms",
    date: "March 12, 2024",
    category: "Data Structures",
    excerpt: "Exploring complex graph algorithms and their real-world applications...",
    user: "",
    tags: []
  },
  {
    title: "System Design Patterns",
    date: "March 10, 2024",
    category: "Architecture",
    excerpt: "Essential design patterns every programmer should know...",
    user: "",
    tags: []
  },
  {
    title: "System Design Patterns",
    date: "March 10, 2024",
    category: "Architecture",
    excerpt: "Essential design patterns every programmer should know...",
    user: "",
    tags: []
  },
];
// Posts Method