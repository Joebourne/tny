import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import {
  Box,
  useTheme,
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  useMediaQuery,
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import {
  Menu, DynamicFeed, People, MusicNote, SportsCricket,
} from '@material-ui/icons';

export function Header(): React.ReactElement {
  const { pathname } = useLocation();
  const theme = useTheme();
  const smAndUp = useMediaQuery(theme.breakpoints.up('sm'));
  const xsOnly = useMediaQuery(theme.breakpoints.only('xs'));

  const [drawerIsOpen, setDrawerIsOpen] = React.useState(false);

  const navLinks: {
    path: string;
    title: string;
    Icon?: any;
  }[] = [
    { path: '/', title: 'Feed', Icon: DynamicFeed },
    { path: '/topics/music', title: 'Music', Icon: People },
    { path: '/topics/sport', title: 'Sport', Icon: SportsCricket },
    { path: '/authors', title: 'Authors', Icon: MusicNote },
  ];

  return (
    <Box flexGrow={1}>
      <AppBar position="static">
        <Toolbar>
          {xsOnly && (
          <>
            <Box mr={2}>
              <IconButton
                onClick={() => setDrawerIsOpen(true)}
                edge="start"
                color="inherit"
                aria-label="menu"
              >
                <Menu />
              </IconButton>
            </Box>
            <Drawer open={drawerIsOpen} onClose={() => setDrawerIsOpen(false)}>
              <Box
                width="250px"
                role="presentation"
                onClick={() => setDrawerIsOpen(false)}
              >
                <List>
                  {navLinks.map(({ path, title, Icon }, index) => (
                    <React.Fragment key={path}>
                      <ListItem
                        button
                        component={Link}
                        to={path}
                        disabled={path === pathname}
                      >
                        <ListItemIcon><Icon /></ListItemIcon>
                        <ListItemText primary={title} />
                      </ListItem>
                      {index < navLinks.length - 1 && <Divider />}
                    </React.Fragment>
                  ))}
                </List>
              </Box>
            </Drawer>
          </>
          )}
          <Box flexGrow={1}>
            <Typography variant="h6">
              TNY Tech Test
            </Typography>
          </Box>
          {smAndUp && navLinks.map(({ path, title }) => (
            <Button
              key={path}
              color="inherit"
              component={Link}
              to={path}
              disabled={path === pathname}
            >
              {title}
            </Button>
          ))}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
