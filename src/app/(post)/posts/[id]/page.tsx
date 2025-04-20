import { Metadata } from "next";
import PostDetail from "./postDetail";

// export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
//   return {
//     title: `Bài viết ${params.id}`,
//     description: "Chi tiết bài viết",
//     openGraph: {
//       title: `Bài viết ${params.id}`,
//       description: "Chi tiết bài viết",
//       url: `https://yourwebsite.com/posts/${params.id}`,
//       images: [{ url: "https://yourwebsite.com/default-post.jpg", width: 1200, height: 630 }],
//       type: "article",
//     },
//   };
// }

export default function PostPage({ params }: { params: { id: string } }) {
  return <PostDetail id={params.id} />;
}
