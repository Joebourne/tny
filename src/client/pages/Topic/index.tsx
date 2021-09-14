import React, { useEffect } from 'react';
import {
  Box, Typography, Container,
} from '@material-ui/core';
import { useParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '@client/hooks';
import { fetchArticles } from '@client/store/articles';
import { selectArticles } from '@client/store/articles/selectors';
import { ArticleCardList } from '@client/components/ArticleCardList';

export function Topic() {
  const dispatch = useAppDispatch();
  const params = useParams<{ topic: string }>();
  const articles = useAppSelector(selectArticles);

  useEffect(() => {
    dispatch(fetchArticles(params.topic));
  }, [params.topic]);

  const title = params.topic.charAt(0).toUpperCase() + params.topic.slice(1);

  return (
    <Container maxWidth="md">
      <Box my={4}>
        <Box mb={2}>
          <Typography variant="h3" component="h1">{title}</Typography>
        </Box>
        <ArticleCardList articles={articles} />
      </Box>
    </Container>
  );
}
