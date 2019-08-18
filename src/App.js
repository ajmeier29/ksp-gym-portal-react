import React from 'react';
import TestWorkoutData from './test-data.js';
import WorkoutExpandableTable from './workout-table.js';

function App() {
  return (
    <div>
      <WorkoutExpandableTable workoutinfo={TestWorkoutData()} />
    </div>
  );
}
export default App;
