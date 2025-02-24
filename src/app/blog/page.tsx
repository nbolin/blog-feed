"use client";
import { useEffect, useState } from "react";
import TruncatedDescription from "@/components/TruncatedDescription";
import { BlogPost } from "@/interface/blogPost";
import Image from "next/image";

export default function BlogPage() {
  // ✅ Fix: Initialize state from localStorage immediately
  const [language, setLanguage] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("blogLanguage") || "en";
    }
    return "en";
  });

  const [posts, setPosts] = useState<BlogPost[]>([]);
  const API_BASE_URL = "https://www.varian.com";
  const API_URL = `${API_BASE_URL}/${language === "fi" ? "fi" : ""}/rest-api/varian-blog-data?_format=json&limit=10`;

  // ✅ Store language change in localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("blogLanguage", language);
    }
  }, [language]);

  // ✅ Fetch posts when language changes
  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch(API_URL);
        if (!res.ok) throw new Error(`Failed to fetch: ${res.statusText}`);
        const data = await res.json();
        setPosts(Array.isArray(data) ? data : data.blogs || []);
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    }
    fetchPosts();
  }, [API_URL]);

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Varian</h1>
        {/* Language Selector */}
        <button
          onClick={() => setLanguage(language === "en" ? "fi" : "en")}
          className="border px-4 py-2 rounded-md bg-white text-black font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {language === "en" ? "Finnish" : "English"}
        </button>

      </div>

      <div className="space-y-6">
        {posts.length > 0 ? (
          posts.map((blog) => {
            const postImage = `https://varian.widen.net/content/${blog.widen_image_id}/webp?w=640&h=360&crop=true`;

            return (
              <div key={blog.nid} className="border rounded-lg p-4 shadow-md bg-white flex flex-col sm:flex-row gap-4">
                {/* Responsive image */}
                {blog.widen_image_id && (
                  <div className="w-full sm:w-1/3 flex-shrink-0">
                    <Image
                      src={postImage}
                      alt={blog.alt_tag || "Blog Image"}
                      width={400} // Larger default width for better quality
                      height={240} // Maintain aspect ratio
                      sizes="(max-width: 639px) 100vw, (min-width: 640px) 33vw"
                      className="object-cover rounded-lg w-full h-auto"
                    />
                  </div>
                )}
                {/* Content */}
                <div className="sm:w-2/3">
                  <h2 className="text-lg font-semibold text-gray-900 mb-2">
                    <a
                      href={`https://www.varian.com${blog.node_alias}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      {blog.title}
                    </a>
                  </h2>
                  <p className="text-sm text-gray-600 mb-2">{blog.date_release}</p>
                  <TruncatedDescription html={blog.description} className="text-gray-800 mb-2" />
                  <a
                    href={`https://www.varian.com${blog.node_alias}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-blue-600 font-bold"
                  >
                    Read More
                  </a>
                </div>
              </div>
            );
          })
        ) : (
          <p>No blog posts available.</p>
        )}
      </div>
    </div>
  );
}
