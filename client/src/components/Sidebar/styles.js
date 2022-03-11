import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  ul: {
    justifyContent: 'space-around',
  },
  container : {
    // backgroundColor:"whitesmoke",
    width:"260px",
    // borderRight : "1px solid grey",
    marginRight : "20px"
  },
  links : {
    margin:"10px",
    marginTop:"40px",
    textDecoration:"none", 
    backgroundColor:"aqua", 
    padding:"8px",
    flexWrap: 'wrap',
    color : 'black'
  }
}));
