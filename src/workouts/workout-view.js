import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { Dialog, DialogActions } from '@material-ui/core';
import { FormButtons } from '../tools/react-tools';
import viewWorkoutStyles from './styles';
import { getNumericHours } from '../tools/tools';

const PreviewDialog = withStyles({
  paper: {
    'background-color': 'white',
    minHeight: '90vh',
    maxHeight: '900vh',
    minWidth: '90%'
  }
})(Dialog);

const PreviewText = withStyles({
  root: {
    position: 'relative',
    color: 'black'
  }
})(Typography);

const PreviewDialogActions = withStyles({
  root: {
    'background-color': 'white'
  }
})(DialogActions);

const PreviewFormButtons = withStyles({
  root: {
    'margin-right': '20px'
  }
})(FormButtons);

// This function component will be used for displaying the
// workouts for each device, as well as used for previewing the workout.
// Passing in the workoutinfo(or any object even) will display
// according to how this component is configured.
const ViewWorkout = props => {
  return (
    <>
      <PreviewDialog
        minWidth={'xl'}
        maxWidth={'xl'}
        open={props.open}
        onClose={props.handleClose}
      >
        <PreviewText>
          <PreviewWorkout
            workoutInfo={props.workoutInfo}
            textSize={props.textSize}
          />
        </PreviewText>
        <PreviewDialogActions>
          <PreviewFormButtons onClick={props.handleClose}>
            Close Preview
          </PreviewFormButtons>
        </PreviewDialogActions>
      </PreviewDialog>
    </>
  );
};

ViewWorkout.propTypes = {
  workoutInfo: PropTypes.object,
  open: PropTypes.bool,
  handleClose: PropTypes.func,
  textSize: PropTypes.string
};

const PreviewWorkout = props => {
  const workoutDate = new Date(props.workoutInfo.workout_times[0]);
  const series = props.workoutInfo.workout_series;
  const classes = viewWorkoutStyles();
  const workoutTime = getNumericHours(new Date());
  //const headingTextSize = 'h2';
  const textSize = props.textSize;
  return (
    <>
      <div className={classes.gridwrapper}>
        <div className={[classes.normalbox, classes.box1].join(' ')}>
          <div className={classes.box1elms}>
            {workoutDate.getMonth()} / {workoutDate.getDate()}
            {' | '}
            {workoutTime} {props.workoutInfo.workout_name}{' '}
          </div>
          <div className={classes.picture}>
            <img src={require('../assets/ksplogo_small.png')} />
          </div>
        </div>
        <SeriesSummary
          classes={[classes.normalbox, classes.box2]}
          series={series[0]}
          textSize={textSize}
        />
        <SeriesSummary
          classes={[classes.righttopbox, classes.box3]}
          series={series[2]}
          textSize={textSize}
        />
        <SeriesSummary
          classes={[classes.normalbox, classes.box4]}
          series={series[1]}
          textSize={textSize}
        />
        <SeriesSummary
          classes={[classes.rightbottombox, classes.box5]}
          series={{}}
          textSize={textSize}
        />
      </div>
    </>
  );
};

PreviewWorkout.propTypes = {
  workoutInfo: PropTypes.object,
  textSize: PropTypes.string
};

const SeriesSummary = props => {
  if (props.series !== undefined && Object.keys(props.series).length > 0) {
    return (
      <div className={props.classes.join(' ')}>
        Series: {props.series.series_number} | {props.series.series_tag}
        <table>
          {props.series.exercises.map(exercise => (
            <tr key={exercise.exercise_number}>
              <td>&#8226; {exercise.exercise_name}</td>
              <td align="right">{exercise.exercise_reps}</td>
            </tr>
          ))}
        </table>
      </div>
    );
  } else {
    return (
      <div className={props.classes.join(' ')}>
        <Typography
          variant={props.textSize}
          component={props.textSize}
          gutterBottom
        ></Typography>
      </div>
    );
  }
};

SeriesSummary.propTypes = {
  classes: PropTypes.array,
  series: PropTypes.array,
  textSize: PropTypes.string
};

export { ViewWorkout, PreviewWorkout };
