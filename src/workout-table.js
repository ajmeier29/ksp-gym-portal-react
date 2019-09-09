import React, { useEffect, useState } from 'react';
import { setTimeout } from 'timers';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Typography
} from '@material-ui/core';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import fetchJsonPromise from './api/api-calls';
import {
  Dropdown,
  DropdownButton,
  SplitButton,
  Form,
  ButtonToolbar
} from 'react-bootstrap';

const panelStyles = makeStyles(theme => ({
  root: {
    width: '75%',
    'margin-top': '10px',
    margin: 'auto',
    outline: 0,
    padding: '5px',
    'border-radius': '2x',
    'justify-content': 'center',
    'background-color': '#383838'
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  },
  summary: {
    'background-color': '#484848',
    color: 'white'
  }
}));

const filterBoxStyles = makeStyles(theme => ({
  root: {
    'margin-top': '10px',
    'padding-left': '20px',
    width: '10%',
    float: 'left'
  }
}));

// Component Description:
//    Location filter for filter form
const LocationFilter = props => {
  const [selectedLocation, setSelectedLocation] = useState('Locations');
  const locations = [
    {
      id: 1,
      name: 'Allentown',
      phone: '6109305742'
    },
    {
      id: 2,
      name: 'Bethlehem',
      phone: '6103905742'
    }
  ];
  const classes = filterBoxStyles();
  const handleSelection = (evtKey, evt) => {
    console.log(`Selected ${evt.target.innerHTML}`);
    setSelectedLocation(evt.target.innerHTML);
  };
  return (
    <>
      <DropdownButton
        size="sm"
        title={selectedLocation}
        id={`dropdown-button-drop`}
        key={0}
        onSelect={handleSelection}
      >
        <LocationDropdownList locations={locations} />
      </DropdownButton>
    </>
  );
};

const LocationDropdownList = props => {
  return (
    <>
      {props.locations.map(location => (
        <Dropdown.Item key={location.id} eventKey={location.id}>
          {location.name}
        </Dropdown.Item>
      ))}
    </>
  );
};

LocationDropdownList.propTypes = {
  locations: PropTypes.array
};

const FilterForm = () => {
  const classes = filterBoxStyles();
  return (
    <>
      <div className={classes.root}>
        <form>
          <div className="form-group">
            <LocationFilter />
            <label>Show Days</label>
            <input type="text" className="form-control" placeholder="3"></input>
          </div>
        </form>
      </div>
    </>
  );
};

// Component Description:
//    Top div to display the workouts in a list
const WorkoutExpandableTable = props => {
  const [workoutinfo, setWorkoutinfo] = useState([]);
  const classes = panelStyles();
  const apiGetWorkouts = `${process.env.REACT_APP_API_GET_WORKOUTS_LIMIT}/3`;
  // Call fetch data one time.
  // We need to use ,[] at the end of useEffect() to make sure
  // it is only ran one time. Not sure if this is preffered and I'm not sure
  // if it will re render later when needed.
  useEffect(() => {
    // Fetch the data on initial page load to default
    fetchJsonPromise(apiGetWorkouts)
      .then(res => setWorkoutinfo(res))
      .catch(error => {
        alert('ERROR!');
      });
  }, []);

  return (
    <div className={classes.root}>
      {workoutinfo.map(workout => {
        return <WorkoutLineItem key={workout.id} workoutinfo={workout} />;
      })}
    </div>
  );
};
WorkoutExpandableTable.propTypes = {
  workoutinfo: PropTypes.object
};

// Component Description:
//    Each individual line item in the workout list
const WorkoutLineItem = props => {
  const classes = panelStyles();
  const workoutName = `Workout Name: ${props.workoutinfo.workout_name}`;
  const workoutDate = `Workout Date: ${new Date(
    props.workoutinfo.workout_date
  ).toLocaleString()}`;
  const workoutHeader = `${workoutName} | ${workoutDate}`;

  return (
    <ExpansionPanel className={classes.summary + ' rounded'}>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography className={classes.heading}>{workoutHeader}</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails className={classes.summary}>
        <Typography>
          {props.workoutinfo.workout_series.map(series => (
            <>
              <Series series={series} />
            </>
          ))}
        </Typography>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

WorkoutLineItem.propTypes = {
  workoutinfo: PropTypes.object
};

// Component Description:
//    Each series per workout
const Series = props => {
  return (
    <>
      <ul>
        <li>Series Number: {props.series.series_number}</li>
        <li>Series Tag: {props.series.series_tag}</li>
        <li>
          <Exercises series={props.series} />
        </li>
      </ul>
    </>
  );
};
Series.propTypes = {
  series: PropTypes.array
};
// Component Description:
//    Each exercise per series
const Exercises = props => {
  return (
    <>
      Exercises:
      <ul>
        {props.series.exercises.map(exercise => (
          <li key={props.series.series_number}>
            {exercise.exercise_name} | {exercise.exercise_reps}
          </li>
        ))}
      </ul>
    </>
  );
};
Exercises.propTypes = {
  series: PropTypes.array
};

export { WorkoutExpandableTable, FilterForm };
