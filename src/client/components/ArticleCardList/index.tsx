import React from 'react';
import { Link, Box } from '@material-ui/core';
import { Link as RRLink } from 'react-router-dom';

import { Article } from '@typing/index';

import { ArticleCard } from '../ArticleCard';

interface ArticleCardListProps {
  articles: Article[]
}

export function ArticleCardList({ articles }:ArticleCardListProps) {
  return (
    <>
      {articles.map((article, index) => (
        <Link key={article.url} component={RRLink} to={`./articles/${article.id}`}>
          <Box mb={index !== articles.length - 1 ? 2 : 0}>
            <ArticleCard article={article} />
          </Box>
        </Link>
      ))}
    </>
  );
}
