// @reduxjs/toolkit uses Immer to avoid mutation
/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

import { Article } from '@typing/index';

export const fetchArticles = createAsyncThunk(
  'articles/fetch',
  async (query: string) => {
    // API doesn't support query-less search
    if (!query) {
      return [];
    }

    const res: Response = await fetch(`./api/v1/articles?q=${query}`);
    const data: {
      articles: Omit<Article, 'id'>[];
      status: string;
      totalResults: number;
    } = await res.json();
    return data.articles;
  },
);

type ArticlesState = {
  articles: Article[];
  requestState: 'pending' | 'fulfilled' | 'rejected'
}

const initialState: ArticlesState = {
  articles: [],
  requestState: 'fulfilled',
};

export const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchArticles.pending, (state) => ({
      ...state,
      requestState: 'pending',
    }));
    builder.addCase(fetchArticles.fulfilled, (state, action) => {
      // this will allow us to visit an individual article page
      const articlesWithIds = action.payload.map((article) => ({ ...article, id: uuidv4() }));
      return {
        ...state,
        articles: articlesWithIds,
        requestState: 'fulfilled',
      };
    });
    builder.addCase(fetchArticles.rejected, (state) => ({
      ...state,
      requestState: 'rejected',
    }));
  },
});

export const articlesReducer = articlesSlice.reducer;
