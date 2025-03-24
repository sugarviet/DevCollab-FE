'use client'

import React from "react";
import { useQuery } from "@apollo/client";
import { GET_POSTS } from "@/graphql/posts";
import { timeSince } from "./services";
import useNavigation from "@/hooks/useNavigation";

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
        <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg my-4">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Danh sách bài viết</h2>
      <ul className="space-y-4">
        {data.posts.map((post: PostProps) => (
          <li key={post.id} className="p-4 border rounded-md shadow mt-4">
            <Post {...post}/>
          </li>
        ))}
      </ul>
    </div>
    )
}

const Post = (props: PostProps) => {
  const {author, content, createdAt, id, title} = props;
  const { handleGotoPost } = useNavigation();
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg" key={id}>
      <h1 className="text-3xl font-bold text-gray-900 mb-4">
       {title}
      </h1>
      <div className="text-sm text-gray-500 mb-4">
        <span>Đăng bởi <strong>{author}</strong></span> • <span>{timeSince(createdAt)}</span>
      </div>
      <div className="text-gray-800 leading-relaxed">
        {content}
      </div>
        <div className="flex justify-end mt-6">
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition" onClick={()=>{handleGotoPost(id)}}>
           Tham Gia
        </button>
      </div>
    </div>
  );
};

export default PostList;
