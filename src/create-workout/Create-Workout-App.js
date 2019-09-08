import React from 'react';
// import {TestWorkoutData} from './test-data.js';
import { CreateWorkoutForm } from '../Create-Workout-Form';
import NavBar from '../navbar.js';
import { makeStyles } from '@material-ui/core/styles';

const outerDivStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    'flex-direction': 'row'
  }
}));
// This is the top container for the create workout page
function CreateWorkoutApp() {
  const classes = outerDivStyles();
  return (
    <div>
      <NavBar />
      <div className={classes.root}>
        <CreateWorkoutForm />
      </div>
    </div>
  );
}
export default CreateWorkoutApp;
