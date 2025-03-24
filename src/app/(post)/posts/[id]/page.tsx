"use client";


import { GET_POST } from '@/graphql/posts';
import { useQuery } from '@apollo/client';
import { get } from 'lodash';
import { useParams } from 'next/navigation';
import React, { useState, useEffect } from 'react'
import { Editor } from "@monaco-editor/react";
import socket from '@/utils/socket';
import { SOCKET } from '@/constants';

const PostDetail = () => {
  const { id } = useParams();
  const { data, loading, error } = useQuery(GET_POST, { variables: { id } });
  const [code, setCode] = useState(get(data, 'post.code', ''));

  useEffect(() => {
    if (data?.post) {
      const code = get(data, 'post.code', '');
      setCode(code);
    }
    socket.emit(SOCKET.JOIN_ROOM, id);
    socket.on(SOCKET.CODE_UPDATE, (newCode) => setCode(newCode));
    return () => {
      socket.off(SOCKET.CODE_UPDATE);
    };
  }, [data, id]);

  const handleCodeChange = (newValue: string | undefined) => {
    setCode(newValue || "");
    socket.emit(SOCKET.UPDATE_CODE, { room: id, code: newValue });
  };
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading post...</p>;
  return (
    <div className="p-4">
    <h1 className="text-xl font-bold">{data?.post?.title}</h1>
    <Editor
     height="60vh"
      defaultLanguage="javascript"
      value={code} 
      onChange={handleCodeChange}
      theme='vs-dark'
       />
  </div>  )
}

export default PostDetail