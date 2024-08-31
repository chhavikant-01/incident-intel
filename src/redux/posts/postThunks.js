import { setPosts, setStatus, setError } from "./postSlice";

export const fetchPosts = () => async (dispatch) => {
    dispatch(setStatus('loading'));
  try {
    const response = await fetch("http://localhost:5001/api/v1/post", {
          method: 'GET',
        });
    const data = await response.json();
    dispatch(setPosts(data));
    dispatch(setStatus('succeeded'));
  } catch (error) {
    dispatch(setError(error.toString()));
    dispatch(setStatus('failed'));
  }
};
