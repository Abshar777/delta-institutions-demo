"use client";

import { useQueryData } from "./useQueryData";
import { getBlogs, getBlogById } from "@/api/blogs";
import { useMutationData } from "./useMutation";
import useZodForm from "./useZodForm";
import { useRouter } from "next/navigation";
import { $generateHtmlFromNodes } from '@lexical/html'
import { toast } from "sonner";
import { useEffect, useState } from "react";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $getRoot } from "lexical";
import { $generateNodesFromDOM } from '@lexical/html';
import { IBlog } from "@/types/IBlogPost";

export const useBlogs = () => {
 
  const [blogs, setBlogs] = useState<IBlog[]>([]);
  const { data, isPending } = useQueryData(["blogs"], () =>
    getBlogs()
  );

  useEffect(() => {
    if (data) {
      setBlogs((data as any).blogs);
    }
  }, [data])
  const response = data as any;
  return { data: response,blogs, isPending };
};

export const useBlogById = (id: string) => {
  const [blog, setBlog] = useState<IBlog | null>(null);
  const { data, isPending } = useQueryData(["blogById"], () =>
    getBlogById(id)
  );
  useEffect(() => {
    if (data) {
      setBlog((data as any).blog);
    }
  }, [data])
  return {data, blog, isPending };
};






