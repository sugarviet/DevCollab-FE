'use client'

import { GET_POSTS } from "@/graphql/posts";
import { useQuery } from "@apollo/client";
import React from "react";

type PostProps = {
    id: string,
    title: string,
    content: string,
    author: string,
    createdAt: string
}

const PostList = () => {
    const { data, loading, error } = useQuery(GET_POSTS);

    if (loading) return <p>Đang tải...</p>;
    if (error) return <p>Lỗi: {error.message}</p>;

    return (
        <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Danh sách bài viết</h2>
      <ul className="space-y-4">
        {data.posts.map((post: PostProps) => (
          <li key={post.id} className="p-4 border rounded-md shadow">
            <Post />
          </li>
        ))}
      </ul>
    </div>
    )
}

const Post = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg">
      {/* Tiêu đề bài viết */}
      <h1 className="text-3xl font-bold text-gray-900 mb-4">
        Tiêu đề bài viết
      </h1>

      {/* Thông tin tác giả và ngày đăng */}
      <div className="text-sm text-gray-500 mb-4">
        <span>Đăng bởi <strong>Nguyễn Văn A</strong></span> • <span>10 phút trước</span>
      </div>

      {/* Nội dung bài viết */}
      <div className="text-gray-800 leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut orci 
        a augue tincidunt tincidunt. Nam interdum nisl sit amet...
      </div>
      
      {/* Nút hành động */}
      <div className="flex justify-end mt-6">
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
          Chỉnh sửa
        </button>
      </div>
    </div>
  );
};

export default PostList;
