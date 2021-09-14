import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  useMediaQuery,
  useTheme,
  makeStyles,
  createStyles,
} from '@material-ui/core';

import { Article } from '@typing/index';

const useStyles = makeStyles(() => createStyles({
  image: {
    objectFit: 'cover',
    height: '100%',
    width: '100%',
  },
}));

export function ArticleCard({ article }: {article:Article}) {
  const classes = useStyles();
  const theme = useTheme();
  const xsOnly = useMediaQuery(theme.breakpoints.only('xs'));

  return (
    <Card>
      <Box display="flex" flexDirection={xsOnly ? 'column' : 'row'}>
        <Box flexBasis="55%" order={xsOnly ? 2 : 1}>
          <CardContent>
            <Typography variant="h6">
              {article.author}
            </Typography>
            <Typography variant="h5" component="h2" color="textSecondary" gutterBottom>
              {article.title}
            </Typography>
            <Typography variant="body1">
              {article.description}
            </Typography>
          </CardContent>
        </Box>
        <Box flexBasis="45%" order={xsOnly ? 1 : 2}>
          <img className={classes.image} src={article.urlToImage} alt={article.title} />
        </Box>
      </Box>
    </Card>
  );
}
