import { postActions } from "./PostSlice";
import axios from "axios";

export const fetchPosts = () => async (dispatch) => {
  dispatch(postActions.fetchPostsRequest());
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    const posts = response.data;
    const updatedPosts = posts.map(post => ({
      ...post,
      image: `https://picsum.photos/seed/${post.id}/200/300`
    }));
    dispatch(postActions.fetchPostsSuccess(updatedPosts));
  } catch (error) {
    dispatch(postActions.fetchPostsFailure(error.message));
  }
};

export const fetchPostById = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
      dispatch(postActions.setpostHandler(response.data));
    } catch (error) {
      console.error("Failed to fetch post:", error);
    }
  };
};