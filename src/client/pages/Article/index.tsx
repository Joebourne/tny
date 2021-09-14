import React from 'react';
import { useParams } from 'react-router-dom';
import {
  Container, Box, Typography, makeStyles, createStyles,
} from '@material-ui/core';

import { useAppSelector } from '@client/hooks';
import { selectArticle } from '@client/store/articles/selectors';

const useStyles = makeStyles(() => createStyles({
  image: {
    objectFit: 'cover',
    height: '100%',
    width: '100%',
  },
}));

export function Article() {
  const classes = useStyles();
  const params = useParams<{ id: string }>();
  const article = useAppSelector((state) => selectArticle(state, params.id));

  if (!article) {
    return null;
  }

  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Box>
          {/* CardMedia was proving difficult to manipulate */}
          <img src={article.urlToImage} alt={article.title} className={classes.image} />
        </Box>
        <Typography variant="h3" component="h1">
          {article.title}
        </Typography>
        <Typography variant="body1">
          {article.content}
        </Typography>
      </Box>
    </Container>
  );
}
