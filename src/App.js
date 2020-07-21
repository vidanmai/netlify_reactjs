import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button, AppBar, Toolbar, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

function App() {
  const navStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));
  const classes = navStyles();

  const navBar = (
    <div className={classes.root}>
        <AppBar position="static" style={{backgroundColor: "#4caf50"}}>
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h4" className={classes.title}>
              Todo App
            </Typography>
            <Button variant="contained" color="secondary">login</Button>
          </Toolbar>
        </AppBar>
      </div>
  );

  return (
    <div className="App">
      {navBar}
      <Typography variant="h1">
        React App
      </Typography>
      <hr/>
      <Button variant="contained" color="secondary">
        Hello World!
      </Button>
    </div>
  );
}

export default App;
