import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useStyles } from './styles.js';
import { convertIfDate } from '../tools/tools';
import { PreviewWorkout } from '../workouts/workout-view';

// Displays the workout that was just persisted
// TODO: Cleanup further and remove ID's and other useless data.
const NewWorkoutSummary = props => {
  const classes = useStyles();
  const data = props.location.state.posted_date;
  return (
    <>
      <div className={classes.preview}>
        <ul>
          <PreviewWorkout workoutInfo={data} textSize={'h3'} />
          {/* <Summary data={data} /> */}
        </ul>
      </div>
    </>
  );
};

const Summary = props => {
  return (
    <>
      {Object.entries(props.data).map((key, value) => {
        if (Array.isArray(key[1])) {
          return (
            <>
              <li>
                {key[0]}:
                <ul>
                  <Summary
                    data={key[1]}
                    useparent={false}
                    parentname={key[0]}
                  />
                </ul>
              </li>
            </>
          );
        } else if (typeof key[1] === 'object') {
          return (
            <>
              <ul>
                <Summary data={key[1]} parentname={key[0]} />
              </ul>
            </>
          );
        } else {
          return (
            <>
              <li>
                <div key={key[0]}>
                  {props.useparent === undefined
                    ? key[0] + ':'
                    : props.useparent
                    ? props.parentname
                    : props.parentname === undefined
                    ? key[0] + ':'
                    : ''}{' '}
                  {convertIfDate(key[1])}
                </div>
              </li>
            </>
          );
        }
      })}
    </>
  );
};

Summary.propTypes = {
  data: PropTypes.string,
  useparent: PropTypes.bool,
  parentname: PropTypes.string
};

export { NewWorkoutSummary };
