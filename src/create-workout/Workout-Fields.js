import React, { useState, useEffect } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { Paper, Grid, TextField, Typography, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import PropTypes from 'prop-types';
import { useStyles, seriesHeadingTheme, iconTheme } from './styles.js';

const Series = props => {
  const classes = useStyles();
  const seriesTitle = 'Series ' + props.series_number;
  const [formExercises, setFormExercises] = useState([]); // Exercises to be submitted

  // Add empty exercise to list when plus button is clicked
  const handleExerciseAdd = () => {
    let ex = {
      id: formExercises.length + 1,
      name: '',
      reps: ''
    };
    let tempList = formExercises;
    tempList.push(ex);
    setFormExercises([...tempList]);
  };

  const handleTag = () => {
    console.log('INSIDE THE DAMN METHOD');
    this.props.handleSeriesTagChange(props.series_number);
  };

  return (
    <>
      <div className={classes.seriesGrid}>
        <Paper className={classes.paper}>
          <ThemeProvider theme={seriesHeadingTheme}>
            {<TypographyField title={seriesTitle} h={'h5'} />}
          </ThemeProvider>
          <div className={classes.workoutTextField}>
            <NormalFormTextField
              labelName="Series Tag"
              // handleChange={(event) => props.handleSeriesTagChange(event, props.series_number)}
              handleChange={handleTag}
            />
          </div>
          {formExercises.map((currElement, index) => (
            <>
              <Exercise exercise_number={index + 1} />
            </>
          ))}
          {
            <ControlPointAdd
              handleClick={handleExerciseAdd}
              title={'Add Exercise'}
            />
          }
        </Paper>
      </div>
    </>
  );
};
Series.propTypes = {
  handleSeriesTagChange: PropTypes.func,
  series_number: PropTypes.string
};

const Exercise = props => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.gridParent}>
        <div className={classes.exerciseNumberGrid}>
          <ThemeProvider theme={seriesHeadingTheme}>
            <Typography
              textAlign="left"
              variant="h6"
              color="primary"
              gutterBottom
            >
              Exercise {props.exercise_number}
            </Typography>
          </ThemeProvider>
          <div className={classes.workoutTextField}>
            <NormalFormTextField
              labelName="Exercise Number"
              handleChange={props.handleExerciseChange}
            />
          </div>
        </div>
        <div className={classes.exerciseNameGrid}>
          <div className={classes.workoutTextField}>
            <NormalFormTextField
              labelName="Exercise Name"
              handleChange={props.handleExerciseChange}
            />
          </div>
        </div>
        <div className={classes.exerciseRepsGrid}>
          <div className={classes.workoutTextField}>
            <NormalFormTextField
              labelName="Exercise Reps"
              handleChange={props.handleExerciseChange}
            />
          </div>
        </div>
      </div>
    </>
  );
};

Exercise.propTypes = {
  exercise_number: PropTypes.number,
  handleExerciseChange: PropTypes.func
};

const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: 'white'
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'white'
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white'
      },
      '&:hover fieldset': {
        borderColor: 'white'
      },
      '&.Mui-focused fieldset': {
        borderColor: 'white'
      },
      flexGrow: 1,
      color: 'white'
    }
  }
})(TextField);

const NormalFormTextField = props => {
  const classes = useStyles();
  return (
    <>
      <CssTextField
        className={classes.margin}
        label={props.labelName}
        variant="outlined"
        fullWidth
        id="custom-css-outlined-input"
        onChange={props.handleChange}
        InputLabelProps={{
          classes: {
            root: classes.normalTextField
          }
        }}
      />
    </>
  );
};

NormalFormTextField.propTypes = {
  labelName: PropTypes.string,
  handleChange: PropTypes.func
};

const TypographyField = props => {
  return (
    <>
      <Typography
        textAlign="left"
        variant={props.h}
        color="primary"
        gutterBottom
      >
        {props.title}
      </Typography>
    </>
  );
};

TypographyField.propTypes = {
  title: PropTypes.string,
  h: PropTypes.string
};

const ControlPointAdd = props => {
  return (
    <>
      <ThemeProvider theme={iconTheme}>
        <ControlPointIcon color="primary" onClick={props.handleClick} />
        {<TypographyField title={props.title} h={'h8'} />}
      </ThemeProvider>
    </>
  );
};

ControlPointAdd.propTypes = {
  handleClick: PropTypes.func,
  title: PropTypes.string
};

export {
  Exercise,
  NormalFormTextField,
  Series,
  ControlPointAdd,
  TypographyField
};
