import { fetchPosts, fetchPostById } from './PostActions';
import axios from 'axios';
import { postActions } from './PostSlice';
import { configureStore } from '@reduxjs/toolkit';
import { render, screen, cleanup } from '@testing-library/react';
import thunk from 'redux-thunk';

// Mock the axios module
// jest.mock('axios');

// Create a mock Redux store
const store = configureStore({
  reducer: { post: postActions.reducer },
  middleware: [thunk],
});

describe('Post Actions', () => {
  afterEach(cleanup);

  it('fetchPosts should dispatch setpostListHandler action when API call is successful', async () => {
    // Mock the response from the API
    axios.get.mockResolvedValueOnce({
      data: [
        { id: 1, title: 'Post 1', body: 'Body 1' },
        { id: 2, title: 'Post 2', body: 'Body 2' },
      ],
    });

    const dispatch = jest.fn();

    // Run the fetchPosts thunk
    await fetchPosts()(dispatch);

    // Ensure the correct action is dispatched
    expect(dispatch).toHaveBeenCalledWith(
      postActions.setpostListHandler([
        { id: 1, title: 'Post 1', body: 'Body 1' },
        { id: 2, title: 'Post 2', body: 'Body 2' },
      ])
    );
  });

  it('fetchPosts should log an error when API call fails', async () => {
    // Mock axios to reject the API call
    axios.get.mockRejectedValueOnce(new Error('Failed to fetch posts'));

    const dispatch = jest.fn();

    // Run the fetchPosts thunk and expect an error to be logged
    console.error = jest.fn(); // Mock console.error
    await fetchPosts()(dispatch);

    // Ensure that the error is logged
    expect(console.error).toHaveBeenCalledWith('Failed to fetch posts:', expect.any(Error));
  });

  it('fetchPostById should dispatch setpostHandler action when API call is successful', async () => {
    // Mock the response from the API
    axios.get.mockResolvedValueOnce({
      data: { id: 1, title: 'Post 1', body: 'Body 1' },
    });

    const dispatch = jest.fn();

    // Run the fetchPostById thunk
    await fetchPostById(1)(dispatch);

    // Ensure the correct action is dispatched
    expect(dispatch).toHaveBeenCalledWith(
      postActions.setpostHandler({ id: 1, title: 'Post 1', body: 'Body 1' })
    );
  });

  it('fetchPostById should log an error when API call fails', async () => {
    // Mock axios to reject the API call
    axios.get.mockRejectedValueOnce(new Error('Failed to fetch post'));

    const dispatch = jest.fn();

    // Run the fetchPostById thunk and expect an error to be logged
    console.error = jest.fn(); // Mock console.error
    await fetchPostById(1)(dispatch);

    // Ensure that the error is logged
    expect(console.error).toHaveBeenCalledWith('Failed to fetch post:', expect.any(Error));
  });
});
