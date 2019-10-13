import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/styles';
import { Paper, Grid, TextField, Typography, Button } from '@material-ui/core';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
  KeyboardTimePicker
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import {
  FilterSelectionComponent,
  locationCheckboxProcedures,
  containsObject,
  deviceCheckboxProcedures
} from './Workout-Side-Filter';
import { useStyles, seriesHeadingTheme, iconTheme } from './styles.js';
import { ThemeProvider } from '@material-ui/styles';
import {
  Exercise,
  NormalFormTextField,
  Series,
  ControlPointAdd,
  TypographyField
} from './Workout-Fields.js';
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import { getOptions, alertmessage, parseJSON } from '../api/api-calls';
import { Redirect } from 'react-router';

// The entire workout form assembled together
const NewWorkoutSummary = props => {
  const classes = useStyles();
  const data = props.location.state.posted_date;
  return (
    <>
      <div className={classes.mainWrapper}>
        <ul>
          <Summary data={data} />
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
                  {JSON.stringify(key[1])}
                </div>
              </li>
            </>
          );
        }
      })}
    </>
  );
};

// const PrintObjectInBullets = props =>
// {
//     const keys = Object.keys(props.data)

//     for (var key in validation_messages) {
//         // skip loop if the property is from prototype
//         if (!validation_messages.hasOwnProperty(key)) continue;

//         var obj = validation_messages[key];
//         for (var prop in obj) {
//             // skip loop if the property is from prototype
//             if (!obj.hasOwnProperty(prop)) continue;

//             // your code
//             alert(prop + " = " + obj[prop]);
//         }
//     }
//     return (
//         <>
//             {keys.map(key =>(
//                 // skip loop if the property is from prototype
//                 if (!validation_messages.hasOwnProperty(key)) continue;
//             ))}
//         </>
//     )
// }

const TraverseObject = (obj, func) => {
  for (var key in obj) {
    // skip loop if the property is from prototype
    if (!obj.hasOwnProperty(key)) continue;

    var innerobj = obj[key];
    for (var prop in innerobj) {
      // skip loop if the property is from prototype
      if (!innerobj.hasOwnProperty(prop)) continue;

      // call func
      func(prop);
    }
  }
};

export { NewWorkoutSummary };
