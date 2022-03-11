import React, { useState } from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, ButtonBase } from '@mui/material';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import { useHistory } from 'react-router-dom';
import ReactPlayer from 'react-player'


import { likeCourse, deleteCourse } from '../../../actions/courses';
import useStyles from './styles';

const Course = ({ course, setCurrentId }) => {
  const user = JSON.parse(localStorage.getItem('profile'));
  const [likes, setLikes] = useState(course?.likes);
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();

  const userId = user?.result.googleId || user?.result?._id;
  const hasLikedCourse = course.likes.find((like) => like === userId);

  const handleLike = async () => {
    dispatch(likeCourse(course._id));

    if (hasLikedCourse) {
      setLikes(course.likes.filter((id) => id !== userId));
    } else {
      setLikes([...course.likes, userId]);
    }
  };

  const Likes = () => {
    if (likes.length > 0) {
      return likes.find((like) => like === userId)
        ? (
          <><ThumbUpAltIcon fontSize="small" />&nbsp;{likes.length > 2 ? `You and ${likes.length - 1} others` : `${likes.length} like${likes.length > 1 ? 's' : ''}` }</>
        ) : (
          <><ThumbUpOffAltIcon fontSize="small" />&nbsp;{likes.length} {likes.length === 1 ? 'Like' : 'Likes'}</>
        );
    }

    return <><ThumbUpOffAltIcon fontSize="small" />&nbsp;Like</>;
  };

  const openCourse = (e) => {
    history.push(`/courses/${course._id}`);
  };

  return (
    <div style={{height: '500px'}}>
    <Card className={classes.card} raised elevation={6} style={{backgroundColor:"whitesmoke"}} >
    <ReactPlayer controls url={course.selectedFile} height='180px' width="310px" style={{backgroundColor:"black"}}/>
      <ButtonBase
        component="span"
        name="test"
        className={classes.cardAction}
        onClick={openCourse}
        style={{overflow: 'scroll'}}
      >
        {/* <CardMedia className={classes.media} image={course.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={course.title} /> */}
       
        <div className={classes.details}>
          <Typography variant="h6">{course.name}</Typography>
          <Typography variant="body2" style={{fontSize:"12px",paddingTop:"8px"}}>{moment(course.createdAt).fromNow()}</Typography>
        </div>
        <div className={classes.details}>
          <Typography variant="body2" color="textSecondary" component="h2">{course.tags.map((tag) => `#${tag} `)}</Typography>
        </div>
        <Typography className={classes.title} gutterBottom variant="h5" component="h2">{course.title}</Typography>
        <Typography className={classes.title} gutterBottom variant="h6" component="h2">Price: ₹{course.price}</Typography>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p" >{course.description.split(' ').splice(0, 20).join(' ')}...</Typography>
        </CardContent>
      </ButtonBase>
      
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" disabled={!user?.result} onClick={handleLike} >
          <Likes />
        </Button>
        {/* {(user?.result?.googleId === course?.creator || user?.result?._id === course?.creator) && (
          <Button size="small" color="secondary" onClick={() => dispatch(deleteCourse(course._id))}>
            <DeleteIcon fontSize="small" /> &nbsp; Delete
          </Button>
        )} */}
      </CardActions>
    </Card>
    </div>
  );
};

export default Course;

