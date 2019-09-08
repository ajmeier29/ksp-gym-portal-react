import React from 'react';
// import {TestWorkoutData} from './test-data.js';
import { WorkoutExpandableTable, FilterForm } from './workout-table.js';
import NavBar from './navbar.js';
import { makeStyles } from '@material-ui/core/styles';

import { CreateWorkoutForm } from './create-workoutCreate-Workout-Form';

const outerDivStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    'flex-direction': 'row'
  }
}));

function App() {
  const classes = outerDivStyles();
  return (
    <div>
      <NavBar />
      <div className={classes.root}>
        <FilterForm />
        <WorkoutExpandableTable />
      </div>
    </div>
  );
}
export default App;
