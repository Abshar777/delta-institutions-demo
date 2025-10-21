"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

interface BlogPost {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
  category: string;
}

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  // Truncate description to 150 characters
  const truncatedDescription =
    post.description.length > 150
      ? post.description.substring(0, 150) + "..."
      : post.description;

  const router = useRouter();

  return (
    <article className="group  overflow-hidden rounded-lg border border-border bg-zinc-500/5 hover:shadow-lg transition-shadow duration-300">
      {/* Image Container */}
      <div className="relative h-64 w-full overflow-hidden bg-muted">
        <Image
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {/* Category Badge */}
        {/* <div className="absolute top-4 right-4">
          <span className="inline-block bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
            {post.category}
          </span>
        </div> */}
      </div>

      {/* Content Container */}
      <div className="p-6 flex flex-col h-full">
        {/* Date */}
        <p className="text-sm text-muted-foreground mb-2">{post.date}</p>

        {/* Title */}
        <h4 className="text-xl font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
          {post.title}
        </h4>

        {/* Description */}
        <p className="text-muted-foreground mb-6  line-clamp-3">
          {truncatedDescription}
        </p>

        {/* Read More Button */}
        {/* <a href={`/blogs/${post.title}`} className="tt-btn tt-btn-primary">
          <span data-hover="Read More">Read More</span>
        </a> */}
        <a href={`/blogs/${post.title}`} className="tt-btn tt-btn-primary">
          <span data-hover="Read More">Read More</span>
        </a>
      </div>
    </article>
  );
}
