import React from "react";
import { Link } from "react-router-dom";
import useStyles from './styles';

const Links = [
  {
    to: "/",
    title: "Home"
  },
  {
    to: "/form",
    title: "Create Course"
  },
  {
    to: "/membership",
    title: "Membership"
  },
  {
    to: "/updatecourses",
    title: "Update Courses"
  },
  {
      to: "/profile",
      title : "View Profile"
  }
];
const SideNavbar = () => {
  const classes = useStyles();
  return (
    <div className={classes.container} style={{ width: '300px',minWidth: '200px',padding:"20px", backgroundColor:"white"}}>
      {Links.map(({ to, title }) => {
        return (
          <div className={classes.links}>
            <Link to={to} className={classes.links}>{title}</Link>
          </div>
        );
      })}
    </div>
  );
};

export { SideNavbar };