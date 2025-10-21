"use client"
import { BLOG_URL } from "@/const/api"
import AxiosInstance from "@/lib/axios"

export const getBlogs = async () => {
    const response = await AxiosInstance().get(`${BLOG_URL}/`)
    return response.data
}

export const getBlogById = async ( id: string) => {

    const response = await AxiosInstance().get(`${BLOG_URL}/${id}`)
    return response.data
}








