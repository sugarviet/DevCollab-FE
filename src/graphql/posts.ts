import { gql } from "@apollo/client";

export const GET_POST = gql`
  query Post($id: ID!) {
    post(id: $id) {
      id
      title
      content
      author
      createdAt,
      code
    }
  }
`;

export const GET_POSTS = gql`
  query GetPosts {
    posts {
      id
      title
      author
      createdAt
      content,
    }
  }
`;