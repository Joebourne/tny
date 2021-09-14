import React, { useEffect } from 'react';
import {
  Box, debounce, TextField, Container,
} from '@material-ui/core';

import { useAppDispatch, useAppSelector } from '@client/hooks';
import { fetchArticles } from '@client/store/articles';
import { selectArticles } from '@client/store/articles/selectors';
import { ArticleCardList } from '@client/components/ArticleCardList';

export function Feed() {
  const dispatch = useAppDispatch();
  const articles = useAppSelector(selectArticles);

  // clear articles on mount (doesn't make a request)
  useEffect(() => {
    dispatch(fetchArticles(''));
  }, []);

  const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    dispatch(fetchArticles(event.target.value));
  };

  return (
    <Container maxWidth="md">
      <Box my={4}>
        <Box mb={2}>
          <TextField
            name="search-for-articles"
            id="search-for-articles"
            label="Search for articles"
            variant="filled"
            fullWidth
            onChange={debounce(handleChange, 200)}
          />
        </Box>
        <ArticleCardList articles={articles} />
      </Box>
    </Container>

  );
}
