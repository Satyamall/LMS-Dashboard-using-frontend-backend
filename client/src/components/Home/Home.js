import React, { useState } from 'react';
import { Container, Grow, Grid, AppBar, TextField, Button, Paper } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import ChipInput from 'material-ui-chip-input';

import { getCoursesBySearch } from '../../actions/courses';
import Courses from '../Courses/Courses';
import Form from '../Form/Form';
import Pagination from '../Pagination';
import useStyles from './styles';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
const Home = () => {
  const classes = useStyles();
  const query = useQuery();
  const page = query.get('page') || 1;
  const searchQuery = query.get('searchQuery');

  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  const [search, setSearch] = useState('');
  const [tags, setTags] = useState([]);
  const history = useHistory();

  const searchCourse = () => {
    if (search.trim() || tags) {
      dispatch(getCoursesBySearch({ search, tags: tags.join(',') }));
      history.push(`/courses/search?searchQuery=${search || 'none'}&tags=${tags.join(',')}`);
    } else {
      history.push('/');
    }
  };

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      searchCourse();
    }
  };

  const handleAddChip = (tag) => setTags([...tags, tag]);

  const handleDeleteChip = (chipToDelete) => setTags(tags.filter((tag) => tag !== chipToDelete));

  return (
    <Grow in>
      <Container maxWidth="xl">
        <Grid container justify="space-between" alignItems="stretch" spacing={3} className={classes.gridContainer}>
        <Grid position="static" color="inherit" className={classes.searchCourses}>
          <TextField onKeyDown={handleKeyPress} name="search" variant="outlined" label="Search Courses" fullWidth value={search} onChange={(e) => setSearch(e.target.value)} style={{backgroundColor:"white", borderRadius:"10px"}}/>
              <ChipInput
                value={tags}
                onAdd={(chip) => handleAddChip(chip)}
                onDelete={(chip) => handleDeleteChip(chip)}
                label="Search Tags"
                variant="outlined"
                className={classes.searchByTags}
                style={{backgroundColor:"white", borderRadius:"10px", margin:"20px",marginLeft:"0px"}}
              />
              <br/>
              <Button onClick={searchCourse} className={classes.searchButton} variant="contained" color="primary">Search</Button>
          </Grid>
          <Grid item xs={12} sm={6} md={9}>
            <Courses setCurrentId={setCurrentId} />
          </Grid>
        </Grid>
        <Grid>
        <Grid item xs={12} sm={4} md={9}>
            {(!searchQuery && !tags.length) && (
              <Paper className={classes.pagination} elevation={6}>
                <Pagination page={page} />
              </Paper>
            )}
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
