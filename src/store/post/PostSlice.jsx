import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  postList: [],
  loading: false,
  error: null
};

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    fetchPostsRequest(state) {
      state.loading = true;
      state.error = null;
    },
    fetchPostsSuccess(state, action) {
      state.loading = false;
      state.postList = action.payload;
    },
    fetchPostsFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    setpostListHandler(state, action) {
      state.postList = action.payload;
    },
    setpostHandler(state, action) {
      state.post = action.payload;
    }
  }
});

export const postActions = postSlice.actions;

export default postSlice;