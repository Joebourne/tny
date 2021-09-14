export interface Article {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: { id: string; name: string }
  title: string;
  url: string;
  urlToImage: string;
  // added by us for URL access of an article
  id: string;
}
