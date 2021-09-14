import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import { Shell } from '@client/components/Shell';
import { Feed } from '@client/pages/Feed';
import { Article } from '@client/pages/Article';
import { Topic } from '@client/pages/Topic';
import { Authors } from '@client/pages/Authors';
import { NotFound } from '@client/pages/NotFound';

export function App() {
  return (
    <Router>
      <Shell>
        <Switch>
          <Route exact path="/">
            <Feed />
          </Route>
          <Route path="/articles/:id">
            <Article />
          </Route>
          <Route path="/topics/:topic">
            <Topic />
          </Route>
          <Route path="/authors">
            <Authors />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Shell>
    </Router>
  );
}
