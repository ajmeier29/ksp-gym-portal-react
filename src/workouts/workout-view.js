import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Paper, Typography } from '@material-ui/core';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@material-ui/core';
import { cleanAndTitle, convertIfDate } from '../tools/tools';
import { FormButtons } from '../tools/react-tools';
import 'typeface-roboto';

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
          <WorkoutSummary workoutInfo={props.workoutInfo} />
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
  handleClose: PropTypes.func
};

const WorkoutSummary = props => {
  const workoutDate = new Date(props.workoutInfo.workout_times[0]);
  return (
    <>
      <div>
        <Typography variant="h1" component="h2" gutterBottom>
          {workoutDate.getMonth()} / {workoutDate.getDate()}{' '}
          {props.workoutInfo.workout_name}{' '}
          <img
            src={require('C:\\Users\\ameier\\Documents\\VSCode\\ksp-gym-portal-react\\src\\ksplogo.PNG')}
          />
        </Typography>
      </div>
    </>
  );
};

WorkoutSummary.propTypes = {
  workoutInfo: PropTypes.object
};

// const WorkoutSummary = props => {
//   return (
//     <>
//       {Object.entries(props.data).map(key => {
//         const keyTitle = cleanAndTitle(key[0]);
//         if (props.excludesList.includes(keyTitle.toLowerCase())) {
//           const doNothingJpg = '';
//         } else if (Array.isArray(key[1])) {
//           return (
//             <>
//               <li>
//                 {keyTitle}:
//                 <ul>
//                   <WorkoutSummary
//                     data={key[1]}
//                     useparent={false}
//                     excludesList={props.excludesList}
//                     parentname={key[0]}
//                   />
//                 </ul>
//               </li>
//             </>
//           );
//         } else if (typeof key[1] === 'object') {
//           return (
//             <>
//               <ul>
//                 <WorkoutSummary data={key[1]} excludesList={props.excludesList} parentname={key[0]} />
//               </ul>
//             </>
//           );
//         } else {
//           return (
//             <>
//               <li key={keyTitle}>
//                 {props.useparent === undefined
//                   ? keyTitle + ':'
//                   : props.useparent
//                   ? props.parentname
//                   : props.parentname === undefined
//                   ? keyTitle + ':'
//                   : ''}{' '}
//                 {convertIfDate(key[1])}
//               </li>
//             </>
//           );
//         }
//       })}
//     </>
//   );
// };

// WorkoutSummary.propTypes = {
//   useparent:PropTypes.bool,
//   parentname:PropTypes.string,
//   excludesList:PropTypes.array,
//   data:PropTypes.object
// }

export default ViewWorkout;
