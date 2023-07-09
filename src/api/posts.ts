import axios from "axios";

export interface Post {
  id: number;
  userId: string;
  title: string;
  body: string;
}

export const getPosts = async (userId: string): Promise<Post[]> => {
  const response = await axios.get(`${process.env.REACT_APP_API_URL}/posts?userId=${userId}`);
  const posts: Post[] = response.data;
  return posts;
};

export const deletePost = async (postId: number): Promise<void> => {
  await axios.delete(`${process.env.REACT_APP_API_URL}/posts?postId=${postId}`);
};
