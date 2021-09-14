import { Typography, Container, Box } from '@material-ui/core';
import React from 'react';

export function NotFound() {
  return (
    <Container maxWidth="md">
      <Box my={4}>
        <Typography variant="h3" component="h1">Page not found.</Typography>
        <Typography variant="subtitle1">Try clicking a link in the nav bar.</Typography>
      </Box>
    </Container>
  );
}
