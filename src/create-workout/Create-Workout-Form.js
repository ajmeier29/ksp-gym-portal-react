import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/styles';
import { Paper, Grid, TextField, Typography, Button } from '@material-ui/core';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
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
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import SvgIcon from '@material-ui/core/SvgIcon';

// TEMP, NEED TO REMOVE
// REPLACE WITH WEB API CALL
const sourceLocations = [
  {
    id: '243q3r',
    name: 'Allentown',
    phone: '6013905742'
  },
  {
    id: 'wfer43',
    name: 'Bethlehem',
    phone: '6103905742'
  }
];

const sourceDevices = [
  {
    id: 'xadfw213423',
    name: 'Adult Device 1 Alt',
    location: 'Allentown'
  },
  {
    id: 'asdfvv23431',
    name: 'Adult Device 2 Alt',
    location: 'Allentown'
  },
  {
    id: 'averv035',
    name: 'Adult Device 1 Beth',
    location: 'Bethlehem'
  },
  {
    id: 'er68sdasd',
    name: 'Adult Device 2 Beth',
    location: 'Bethlehem'
  },
  {
    id: '34r34q4f3f',
    name: 'Intro Device Beth',
    location: 'Bethlehem'
  }
];

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

const CssDatePicker = withStyles({
  root: {
    '& .MuiInput-root': {
      color: 'white',
      borderBottomColor: 'white'
    },
    '& .Mui-focused': {
      borderBottomColor: 'white'
    },
    '& .MuiInput-input': {
      borderBottomColor: 'white'
    },
    '& label.Mui-focused': {
      color: 'white',
      borderBottomColor: 'white'
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'white',
      color: 'white'
    },
    '& .MuiInput-underline:before': {
      borderBottomColor: 'white',
      color: 'white'
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white',
        borderBottomColor: 'white',
        color: 'white'
      },
      '&:hover fieldset': {
        borderColor: 'white',
        borderBottomColor: 'white',
        color: 'white'
      },
      '&.Mui-focused fieldset': {
        borderColor: 'white',
        borderBottomColor: 'white',
        color: 'white'
      },
      flexGrow: 1,
      color: 'white'
    }
  }
})(KeyboardDatePicker);

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

const NormalDatePicker = props => {
  const classes = useStyles();

  return (
    <>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        {/* <Grid container justify="space-around"> */}
        <CssDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Date picker inline"
          value={props.selectedDate}
          onChange={props.handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date'
          }}
          InputLabelProps={{
            classes: {
              root: classes.datePicker
            }
          }}
        />
      </MuiPickersUtilsProvider>
    </>
  );
};

NormalDatePicker.propTypes = {
  selectedDate: PropTypes.instanceOf(Date),
  handleDateChange: PropTypes.func
};

// The entire workout form assembled together
const CreateWorkoutEntryForm = () => {
  const classes = useStyles();

  const [locations] = useState(sourceLocations); // Locations in NoSQL database
  const [devices, setDevices] = useState([]); // Devices in NoSQL database
  const [formLocations, setFormLocations] = useState([]); // Locations to be submitted
  let [formDevices, setFormDevices] = useState([]); // Devices to be submitted
  let [formWorkout, setFormWorkout] = useState([]); // Workout to be submitted
  let [formSeries, setFormSeries] = useState([]); // Series to be submitted
  let [formExercises, setFormExercises] = useState([]); // Exercises to be submitted
  const [workoutName, setWorkoutName] = useState('');
  const [selectedDate, setSelectedDate] = useState(
    new Date('2014-08-18T21:11:54')
  );

  function handleDateChange(date) {
    setSelectedDate(date);
  }

  const handleSubmit = event => {
    const loc = formLocations;
    const dev = formDevices;
    const workoutname = workoutName;

    // event.preventDefault();
    // let test = event.currentTarget;
    // const data = new FormData(event.target);

    // console.log(`WorkoutName in handlesubmit: ${workoutName}`);
  };
  const handleWorkoutNameChange = event => {
    setWorkoutName(event.target.value);
  };
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

  const handleSeriesSubmit = serieslist => {
    setFormSeries(serieslist);
  };
  // Handles a change to the Locations filter on the left side of the page.
  // A change here will update formLocations to store what locations the workout is for.
  const handleLocationChange = event => {
    locationCheckboxProcedures(
      event,
      locations,
      formLocations,
      setFormLocations
    );
  };
  // This use effect handles updating the Devices filter on the left side of the screen
  // Devices are shown when the user selects the locaiton it is intended for.
  useEffect(() => {
    // build list of devices that have the location name of the ones selected
    const checkedList = sourceDevices.filter(x => {
      const test = formDevices;
      for (var i = 0; i < formLocations.length; i++) {
        // only show the checkboxes that have the same location name
        // as the locaiton check boxes that are selected
        if (x.location === formLocations[i].name) {
          return x;
        }
      }
    });
    // update the devices list
    setDevices(checkedList);
  }, [formLocations]);
  // This hook is to manage the formDevices list upon chages made to
  // the devices state list
  useEffect(() => {
    const checkedList = sourceDevices.filter(x => {
      for (var i = 0; i < formLocations.length; i++) {
        // Only add the items in the list that are for that location
        // and are previously in formDevices
        if (x.location === formLocations[i].name) {
          if (containsObject(x, formDevices)) {
            return x;
          }
        }
      }
    });
    // update the formDevices list for submitting
    setFormDevices(checkedList);
  }, [devices]);
  // Handles a change to the Devices fileter when the
  const handleDeviceChange = event => {
    deviceCheckboxProcedures(event, devices, formDevices, setFormDevices);
  };
  return (
    <>
      <div className={classes.mainWrapper}>
        <div className={classes.sidebar}>
          <Paper>
            <FilterSelectionComponent
              locations={locations}
              locationHandleFn={handleLocationChange}
              devices={devices}
              devicesHandleFn={handleDeviceChange}
            />
          </Paper>
        </div>
        <div className={classes.formgrid}>
          <WorkoutSelectors
            selectedDate={selectedDate}
            handleDateChange={handleDateChange}
            handleWorkoutNameChange={handleWorkoutNameChange}
          />
          <div className={classes.gridParent}>
            <Series
              exercises={formExercises}
              series_number={'1'}
              handleExerciseAdd={handleExerciseAdd}
            />
          </div>
        </div>
      </div>
    </>
  );
};

const WorkoutSelectors = props => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.gridParent}>
        <div className={classes.workoutDateGrid}>
          <Paper className={classes.paper}>
            <div className={classes.workoutFormDivParent}>
              {/* <div className={classes.workoutDatePicker}> */}
              <NormalDatePicker
                selectedDate={props.selectedDate}
                handleDateChange={props.handleDateChange}
              />
            </div>
          </Paper>
        </div>
        <div className={classes.workoutNameGrid}>
          <Paper className={classes.paper}>
            <div className={classes.workoutTextField}>
              <NormalFormTextField
                labelName="Workout Name"
                handleChange={props.handleWorkoutNameChange}
              />
            </div>
          </Paper>
        </div>
      </div>
    </>
  );
};

WorkoutSelectors.propTypes = {
  selectedDate: PropTypes.instanceOf(Date),
  handleDateChange: PropTypes.func,
  handleWorkoutNameChange: PropTypes.func
};

const Series = props => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.seriesGrid}>
        <Paper className={classes.paper}>
          <ThemeProvider theme={seriesHeadingTheme}>
            <Typography
              textAlign="left"
              variant="h5"
              color="primary"
              gutterBottom
            >
              Series {props.series_number}
            </Typography>
          </ThemeProvider>
          <div className={classes.workoutTextField}>
            <NormalFormTextField
              labelName="Series Tag"
              handleChange={props.handlSeriesChange}
            />
          </div>
          {props.exercises.map((currElement, index) => (
            <>
              <Exercise exercise_number={index + 1} />
            </>
          ))}
          {/* <Exercise exercise_number={'1'} />
          <Exercise exercise_number={'2'} />
          <Exercise exercise_number={'3'} /> */}
          <ThemeProvider theme={iconTheme}>
            <ControlPointIcon
              color="primary"
              onClick={props.handleExerciseAdd}
            />
          </ThemeProvider>
        </Paper>
      </div>
    </>
  );
};
Series.propTypes = {
  handlSeriesChange: PropTypes.func,
  series_number: PropTypes.string,
  handleExerciseAdd: PropTypes.func,
  exercises: PropTypes.array
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

const SeriesGrid = props => {
  const classes = useStyles();

  return (
    <Grid container spacing={2} item xl={12} lg={12} md={12} sm={12} xs={12}>
      <Grid
        spacing={2}
        direction={'column'}
        className={classes.elementBackground}
        item
        xl={2}
        lg={3}
        md={3}
        sm={6}
        xs={12}
      ></Grid>
      <Grid
        spacing={2}
        direction={'column'}
        className={classes.elementBackground}
        item
        xl={2}
        lg={2}
        md={12}
        sm={12}
        xs={12}
      >
        <Paper className={classes.paper}>
          <div className={classes.workoutTextField}>
            <ThemeProvider theme={seriesHeadingTheme}>
              <Typography
                textAlign="left"
                variant="h5"
                color="primary"
                gutterBottom
              >
                Series {props.series_number}
              </Typography>
            </ThemeProvider>
            <NormalFormTextField labelName="Series Tag" />
          </div>
        </Paper>
      </Grid>
      <Exercise exercise_number={1} />
      <Exercise exercise_number={2} />
      <Exercise exercise_number={3} />
      <Exercise exercise_number={4} />
    </Grid>
  );
};
SeriesGrid.propTypes = {
  series_number: PropTypes.number
};

// const Exercise = props => {
//   const classes = useStyles();
//   return (
//     <>
//       <Grid
//         spacing={2}
//         className={classes.elementBackground}
//         item
//         xl={2}
//         lg={2}
//         md={6}
//         sm={12}
//         xs={12}
//       >
//         <Paper className={classes.paper}>
//           <div className={classes.workoutTextField}>
//             <ThemeProvider theme={seriesHeadingTheme}>
//               <Typography
//                 textAlign="left"
//                 variant="h5"
//                 color="primary"
//                 gutterBottom
//               >
//                 Exercise {props.exercise_number}
//               </Typography>
//             </ThemeProvider>
//             <NormalFormTextField labelName="Exercise Name" />
//             <ExerciseFormTextField labelName="Reps" />
//           </div>
//         </Paper>
//       </Grid>
//     </>
//   );
// };

const ExerciseFormTextField = props => {
  const classes = useStyles();
  return (
    <>
      <CssTextField
        className={classes.workoutReps}
        label={props.labelName}
        variant="outlined"
        fullWidth
        id="custom-css-outlined-input"
        onChange={props.handleChange}
        InputLabelProps={{
          classes: {
            root: classes.workoutReps
          }
        }}
      />
    </>
  );
};

ExerciseFormTextField.propTypes = {
  labelName: PropTypes.string,
  handleChange: PropTypes.func
};

export { CreateWorkoutEntryForm as CreateWorkoutForm, useStyles };
