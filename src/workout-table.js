import React from 'react';
import { setTimeout } from 'timers';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Typography
} from '@material-ui/core';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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

const WorkoutExpandableTable = props => {
  const classes = panelStyles();
  return (
    <div className={classes.root}>
      <WorkoutLineItem workoutinfo={props.workoutinfo} />
      <WorkoutLineItem workoutinfo={props.workoutinfo} />
      <WorkoutLineItem workoutinfo={props.workoutinfo} />
    </div>
  );
};
WorkoutExpandableTable.propTypes = {
  workoutinfo: PropTypes.object
};

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
              <ul>
                <li>Series Number: {series.series_number.numberDouble}</li>
                <li>Series Tag: {series.series_tag}</li>
                <li>
                  Exercises:
                  <ul>
                    {series.exercises.map(exercise => (
                      <li>{exercise.exercise_name}</li>
                    ))}
                  </ul>
                </li>
              </ul>
            </>
          ))}
        </Typography>
      </ExpansionPanelDetails>
      {/* <ExpansionPanelActions>
          <Button size="small">Cancel</Button>
          <Button size="small" color="primary">
            Save
          </Button>
        </ExpansionPanelActions> */}
    </ExpansionPanel>
  );
};

WorkoutLineItem.propTypes = {
  workoutinfo: PropTypes.object
};

export default WorkoutExpandableTable;
