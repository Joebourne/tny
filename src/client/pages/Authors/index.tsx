/* eslint-disable max-len */
import React from 'react';

import { selectAuthors } from '@client/store/articles/selectors';
import { useAppSelector } from '@client/hooks';
import { Typography, Container, Box } from '@material-ui/core';

export function Authors() {
  const authors = useAppSelector(selectAuthors);
  return (
    <Container maxWidth="md">
      <Box my={4}>
        <Typography variant="h2" component="h1">Authors</Typography>
        {authors.length ? authors.map((author) => <Typography>{author}</Typography>) : <Typography>Search for articles to populate the authors list</Typography>}
      </Box>
    </Container>
  );
}
