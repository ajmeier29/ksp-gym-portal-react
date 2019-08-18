import React from 'react';
import TestWorkoutData from './test-data.js';
import WorkoutExpandableTable from './workout-table.js';
import NavBar from './navbar.js';

function App() {
  return (
    <div>
      <NavBar />
      <WorkoutExpandableTable workoutinfo={TestWorkoutData()} />
    </div>
  );
}
export default App;
