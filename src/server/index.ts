import 'isomorphic-fetch';
import express, { Request, Response } from 'express';
import path from 'path';

const app = express();
const port = 3000;

// serve the bundled webpack assets
app.use('/js', express.static(path.join(process.cwd(), '/public/js')));

const API_KEY = '5243189c2d2b4258b69b43147f50c179';
export const API_URL = `https://newsapi.org/v2/everything?apiKey=${API_KEY}`;

export const articleApiRouteHandler = async (req: Request, res: Response) => {
  const searchQueryString = req.query.q ? `&q=${req.query.q}` : '';
  try {
    const apiResponse = await fetch(`${API_URL}${searchQueryString}`);
    const data = await apiResponse.json();
    res.send(data);
  } catch (e) {
    // should implement monitoring and display error to user
    console.error(e);
  }
};

app.get('/api/v1/articles', articleApiRouteHandler);

app.get('*', (req, res) => {
  res.sendFile(path.join(process.cwd(), '/public/index.html'));
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
