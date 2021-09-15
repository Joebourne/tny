# _The New Yorker_ Technical Test

## Getting started

Run `yarn` to install the dependencies, then run `yarn start` to launch the site at `localhost:3000`.

This will concurrently start:
- the Webpack server, which will restart if changes to `src/client/` are made
- the Node server, which will restart if changes to `src/server/` are made

## Some points about the implementation

I interpreted 'Story items must click through to the larger article' to mean that we should display the article ourselves, but I wasn't sure if the intention was to open the article in its original location.

I decided to try a few new libraries and as a result wasn't able to complete all of the required tasks (sorry!).

Notably, there is no footer and no 'load more' functionality in the feed.

I decided to try out some libraries I haven't used before:
- React Testing Library: we are migrating from Enzyme soon at my company so seemed a good time to try
  - I didn't manage many tests as I struggled mocking the API, but the `Header` and `server/index` are tested
- Redux Toolkit: I had heard good things about this less verbose approach to Redux

## To-Do List

Time was tight so lots of things got missed. Here are a few of them:

### User experience

- Add translations so that more users can enjoy the website (may be API dependent)
- Add loading / error / empty states for any pages with data fetching
- Clicking website title should take you to the home page
- Add elevation on cards when hovered to show they're interactive (current underline is ugly)
- Add back button from article to list
- Maintain search query in URL so that users can share a link to a results page

### Bugs

- Can't refresh the page on routes that are more than one level deep due to the server route matching
- Render HTML article descriptions - currently HTML is printed as a string

### Optimisation

- Set up a production build that chunks per route and dynamically loads chunks
- Use Webpack to compile the Node code

### Tooling

- Set up a CI pipeline to enforce quality
- Set up Storybook for component development in isolation
- Use `styled-components` for a CSS-in-JS approach to styling
- Server tests don't exit as they run in the same file as `server.listen()` - should abstract them
- Build config functionality to inject env for local / staging / production

### Quality

- Check what browser support to offer and make sure tooling is right
- Improved pre-commit that runs changed tests and tidies code with Prettier
- Write test utils for quicker setup of RTL tests

### Miscellaneous

- Set up server-side rendering for SEO - important for a news site
- Separate Express router for API endpoints

