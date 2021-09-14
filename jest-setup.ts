// eslint-disable-next-line import/no-extraneous-dependencies
import '@testing-library/jest-dom';

// allows rendering of media-query-based styles
global.window.matchMedia = jest.fn().mockReturnValue({
  matches: true,
  addListener: () => {},
  removeListener: () => {},
});
