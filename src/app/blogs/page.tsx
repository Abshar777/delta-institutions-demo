"use client";
import PageHeader from "@/components/global/page-header";
import React from "react";
import BlogList from "@/components/page-sections/blogsGrid";
import BlogCard from "@/components/ui/blogCard";
import { useBlogs } from "@/hooks/useBlog";

const blogPosts = [
  {
    id: 1,
    title: "Getting Started with Next.js 15",
    description:
      "Learn the fundamentals of Next.js 15 and how to build modern web applications with server components, streaming, and more. This comprehensive guide covers everything you need to know to get started.",
      image: "/assets/imgs/our/g3.png",
    date: "Oct 15, 2025",
    category: "Tutorial",
  },
  {
    id: 2,
    title: "React Server Components Explained",
    description:
      "Dive deep into React Server Components and understand how they revolutionize the way we build applications. Explore the benefits, use cases, and best practices for implementing RSCs in your projects.",
      image: "/assets/imgs/our/g6.jpg",
    date: "Oct 12, 2025",
    category: "Guide",
  },
  {
    id: 3,
    title: "Tailwind CSS Best Practices",
    description:
      "Master Tailwind CSS with our comprehensive guide on best practices, utility-first workflows, and advanced techniques. Learn how to write maintainable and scalable styles for your applications.",
    image: "/assets/imgs/our/g5.jpg",
    date: "Oct 10, 2025",
    category: "Tips",
  },
  {
    id: 4,
    title: "Building Scalable APIs with Node.js",
    description:
      "Discover how to architect and build scalable APIs using Node.js and Express. Learn about database optimization, caching strategies, and deployment best practices for production-ready applications.",
    image: "/assets/imgs/our/g7.jpg",
    date: "Oct 8, 2025",
    category: "Backend",
  },
];

const page = () => {
    const { blogs: posts = [], isPending: isLoading } = useBlogs();
  return (
    <div id="tt-page-content">
      <PageHeader
        description1="Check our latest news"
        description2="Read our latest blogs and stay updated with the latest news and insights."
        firstTitle="Check our latest news"
        secondTitle="Blogs"
        maskTitle="Check our latest news"
      />
      <div className="w-full px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <BlogCard key={post._id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
