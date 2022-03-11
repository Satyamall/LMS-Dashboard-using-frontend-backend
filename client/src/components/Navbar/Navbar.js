import React, { useState, useEffect } from 'react';
import { AppBar, Typography, Toolbar, Avatar, Button } from '@mui/material';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import DashboardCustomizeOutlinedIcon from '@mui/icons-material/DashboardCustomizeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';

// import lmsLogo from '../../images/lmsLogo.png';
// import teachable from "../../images/teachable.jpeg";
import lms from "../../images/lms.png";
// import teachable_wordmark from "../../images/teachable_wordmark.svg";

import * as actionType from '../../constants/actionTypes';
import useStyles from './styles';

// import Sidebar from '../Sidebar/Sidebar.js';

const Navbar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const classes = useStyles();

  const logout = () => {
    dispatch({ type: actionType.LOGOUT });

    history.push('/auth');

    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }
    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <Link to="/" className={classes.brandContainer}>
        <img component={Link} to="/" src={lms} alt="icon" height="45px" style={{paddingRight:"20px"}}/>
        <p className={classes.appBarText}> Dashboard </p>
      </Link>
      <Toolbar className={classes.toolbar}>
        {user?.result ? (
          <div className={classes.profile}>
            <Avatar className={classes.purple} alt={user?.result.name} src={user?.result.imageUrl}>
            <Link to="/profile" className={classes.brandContainer}>
              <p className={classes.purple}> {user?.result.name.charAt(0)} </p>
            </Link>
            </Avatar>
            <Typography className={classes.userName} variant="h6">
            <Link to="/profile" className={classes.brandContainer}>
              <p className={classes.userName}> {user?.result.name} </p>
            </Link>
              </Typography>
            <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
          </div>
        ) : (
          <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
