"use client";

import { GET_POST } from '@/graphql/posts';
import { useQuery } from '@apollo/client';
import { get } from 'lodash';
import React, { useState, useEffect } from 'react'
import { Editor } from "@monaco-editor/react";
import socket from '@/utils/socket';
import { SOCKET } from '@/constants';
import Compiler from '@/components/Posts/Compiler';
import { Button } from '@/components/_shared/UI';
import { executeCode } from '@/components/Posts/services';

const PostDetail = ({id}: {id:string}) => {
  const { data, loading, error } = useQuery(GET_POST, { variables: { id } });
  const [code, setCode] = useState(get(data, 'post.code', ''));
  const [result, setResult] = useState(null);


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

  const runCode = async(code: string) => {
    const data = await executeCode(code);
    setResult(data);
    console.log('data', data)
  }


  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading post...</p>;
  return (
    <div className="p-4 h-screen flex flex-col">
    <h1 className="text-xl font-bold mb-4">{data?.post?.title}</h1>

    <div className="flex flex-1 gap-4">
      {/* 🖊 Code Editor */}
      <div className="w-1/2 border rounded-lg overflow-hidden shadow">
        <Editor
          height="100%"
          defaultLanguage="javascript"
          value={code}
          onChange={handleCodeChange}
          theme="vs-dark"
        />
      </div>

      {/* ⚡ Compiler Output */}
      <div className="w-1/2 flex flex-col border rounded-lg p-4 shadow bg-black">
        <Button className="mb-4 self-start" onClick={()=>runCode(code)}>
          Run Code
        </Button>
        <Compiler result={result}/>
      </div>
    </div>
  </div>
    )
}

export default PostDetail