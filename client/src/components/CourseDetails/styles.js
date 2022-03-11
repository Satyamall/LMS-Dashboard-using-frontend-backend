import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  media: {
    borderRadius: '20px',
    objectFit: 'cover',
    width: '60%'
    // maxHeight: '1200px'

  },
  card: {
    display: 'flex',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap',
      flexDirection: 'column',
    },
  },
  section: {
    borderRadius: '20px',
    margin: '10px',
    flex: 1,
  },
  imageSection: {
    marginLeft: '20px',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
    },
  },
  recommendedCourses: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
    gap:"2rem",
    padding:"20px"
  },
  commentsOuterContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  commentsInnerContainer: {
    height: '200px',
    overflowY: 'auto',
    marginRight: '30px',
    marginLeft: '30px',
    border : "1px solid gray",
    width:"470px",
    padding : "10px",
    borderRadius:"10px"
  },
  skeleton: {
    margin: '10px'
  },
  skeletonContainer : {
    display: 'flex',
    flexDirection: 'row',
    margin : "auto"
  },
  skeletonRight : {
    borderRadius: '20px'
  },
  comments :{
    color : "blue"
  },
  title : {
    fontSize:'20px',
    paddingLeft: '30px',
  },
  titleS : {
    fontWeight:'bold',
    fontSize:'20px'
  },
  titleSS : {
    fontSize:'12px',
    marginLeft:"10px"
  },
  tags : {
    fontSize:'14px',
    paddingLeft: '30px',
  },
  description : {
    fontSize:'16px',
    paddingLeft: '30px',
    padding: '10px',
    marginBottom: '0px'
  },
  descriptionH : {
    fontSize:'20px',
    fontWeight:'bold',
    marginTop: '-5px',

  },
  descriptionB : {
    paddingLeft: '30px',
    marginTop: '-20px'
  },
  createdBy : {
    fontSize: '16px',
    paddingLeft: '30px'
  },
  createdByS : {
    fontSize: '18px',
    fontWeight:'bold'
  },
  timing : {
    fontSize: '12px',
    paddingLeft: '30px',
  },
  msg : {
    height:"20px",
    marginLeft:"50px",
    marginRight:"50px"
  },
  suggestioncard:{
    border: '1px solid black',
    borderRadius: '10px',
    padding: '10px'
  }
}));
