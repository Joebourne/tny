import { RootState } from '@client/store';

export const selectArticles = (state: RootState) => state.articles.articles;

export const selectArticle = (state: RootState, id: string) => {
  const article = state.articles.articles.find((currentArticle) => currentArticle.id === id);
  return article;
};

export const selectAuthors = (state: RootState) => {
  // make sure they are unique
  const authors = Array.from(new Set(state.articles.articles.map((article) => article.author)));
  return authors;
};
