import React from 'react';
import { Grid, CircularProgress } from '@mui/material';
import { useSelector } from 'react-redux';

import Course from './Course/Course';
import useStyles from './styles';

import Skeleton from '@mui/material/Skeleton';

const Courses = ({ setCurrentId }) => {
  const { courses, isLoading } = useSelector((state) => state.courses);
  const classes = useStyles();

  if (!courses.length && !isLoading) return 'No courses';

  return (
    isLoading ?  (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
      { [1,2,3,4].map((item) => (
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Skeleton variant="rectangular" width={210} height={180} className={classes.skeleton}/>
          <Skeleton variant="rectangular" width={100} className={classes.skeleton}/>
          <Skeleton variant="rectangular" width={160} className={classes.skeleton}/>
          <Skeleton variant="rectangular" width={160} height={30} className={classes.skeleton}/>
          <br/>
          <br/>
          <br/>
          </Grid>
    ))}</Grid>) : (
      <Grid className={classes.container} container alignItems="stretch" spacing={6}>
        {courses?.map((course) => (
          <Grid key={course._id} item xs={12} sm={12} md={6} lg={6} >
            <Course course={course} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid>
    )
  );
};

export default Courses;

