import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import { ThemeProviderwithStyles, withStyles } from '@material-ui/styles';
import {
  Paper,
  Grid,
  ExpansionPanel,
  ExpansionPanelSummary,
  Typography,
  ExpansionPanelDetails,
  FormControl,
  FormLabel,
  TextField,
  FormGroup,
  Checkbox,
  FormControlLabel,
  FormHelperText
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import {
  formControlLableCheckBox,
  formGroupFilterTheme,
  formWorkoutTextTheme
} from '../themes/themes.js';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
  InlineDatePicker
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

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
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: '50px'
  },
  paper: {
    padding: theme.spacing(2),
    // color:'white',
    textAlign: 'left', // This is what justifys all the content in the Paper....not just text
    // color: theme.palette.text.secondary,
    'background-color': '#383838'
  },
  formControl: {
    margin: theme.spacing(3)
  },
  elementBackground: {
    'background-color': '#383838',
    color: 'white'
  },
  elementForground: {
    'background-color': '#484848',
    color: 'white'
  },
  expansionHeading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  },
  expansionRoot: {
    'background-color': '#383838'
  },
  workoutTextBoxLabel: {
    color: 'white'
  },
  datePicker: {
    color: 'white'
  }
}));

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

const WorkoutName = props => {
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = useState(
    new Date('2014-08-18T21:11:54')
  );

  function handleDateChange(date) {
    setSelectedDate(date);
  }
  return (
    <>
      <div>
        {/* <CssTextField 
          className={classes.margin} 
          id="custom-css-standard-input" 
          label="Custom CSS" 
          InputLabelProps={{
            classes: {
              root: classes.workoutTextBoxLabel
            }
          }}
          /> */}
        <CssTextField
          className={classes.margin}
          label="Workout Name"
          variant="outlined"
          id="custom-css-outlined-input"
          InputLabelProps={{
            classes: {
              root: classes.workoutTextBoxLabel
            }
          }}
        />
      </div>
      <div>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          {/* <Grid container justify="space-around"> */}
          <CssDatePicker
            disableToolbar
            variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            id="date-picker-inline"
            label="Date picker inline"
            value={selectedDate}
            onChange={handleDateChange}
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
      </div>
    </>
  );
};

// removes an item from an array based of of an 'id' attribute
const removeFromArrayById = (arr, fnMatch) => {
  const index = arr.findIndex(fnMatch);
  return arr.slice(0, index).concat(arr.slice(index + 1, arr.length));
};

const containsObject = (obj, list) => {
  var x;
  for (x in list) {
    if (list.hasOwnProperty(x) && list[x] === obj) {
      return true;
    }
  }
  return false;
};

// This function will perform all the procedures involved with checking and unchecking
// a location in the left filter panel.
// Variables:
//      event - The Event interface represents an event which takes place in the DOM
//      sourceArr - the array that holds all the values in the database. In this instance it holds an array of location objects
//      locFormArr - the formLocations state
//      devFormArry - the formDevices state
//      setLocStateFn - sets the state for formLocations
//      setDevStateFn - sets the state for formDevices
const locationCheckboxProcedures = (
  event,
  sourceArr,
  locFormArr,
  setLocStateFn
) => {
  // get the index of the location selected for use in the locations array
  const index = sourceArr.findIndex(x => x.id === event.target.value);

  let isChecked = event.target.checked;
  var list = [];
  if (isChecked === true) {
    // Add to locations list
    list = locFormArr.concat(sourceArr[index]);
  } else {
    // Remove the location
    list = removeFromArrayById(locFormArr, x => x.id == sourceArr[index].id);
    // Remove all devices associated with that location
  }
  setLocStateFn(list);
};

const deviceCheckboxProcedures = (event, sourceArr, stateArr, setStateFn) => {
  // get the index of the location selected for use in the locations array
  const index = sourceArr.findIndex(x => x.id === event.target.value);

  let isChecked = event.target.checked;
  var list = [];
  if (isChecked === true) {
    // Add to locations list
    list = stateArr.concat(sourceArr[index]);
  } else {
    // Remove the location
    list = removeFromArrayById(stateArr, x => x.id == sourceArr[index].id);
  }
  setStateFn(list);
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

  const [workoutName, setWorkoutName] = useState('Enter Workout Name');

  const handleSubmit = event => {
    const loc = formLocations;
    const dev = formDevices;

    // event.preventDefault();
    // let test = event.currentTarget;
    // const data = new FormData(event.target);

    // console.log(`WorkoutName in handlesubmit: ${workoutName}`);
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
    <div className={classes.root}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid className={classes.elementBackground} item xs={2}>
            <Paper>
              <FilterSelectionComponent
                locations={locations}
                locationHandleFn={handleLocationChange}
                devices={devices}
                devicesHandleFn={handleDeviceChange}
              />
            </Paper>
          </Grid>
          <Grid className={classes.elementBackground} item xs={10}>
            {/* <Grid container justify="space-around"> */}
            <Paper className={classes.paper}>
              <WorkoutName />
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>xs=3</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>xs=3</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>xs=3</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>
              <button>Submit</button>
            </Paper>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

const FilterSelectionComponent = props => {
  return (
    <>
      <LocationSelectionFilter
        locations={props.locations}
        locationHandleFn={props.locationHandleFn}
      />
      <DevicesSelectionFilter
        devices={props.devices}
        devicesHandleFn={props.devicesHandleFn}
      />
    </>
  );
};
FilterSelectionComponent.propTypes = {
  locations: PropTypes.array,
  devices: PropTypes.array,
  locationHandleFn: PropTypes.func,
  devicesHandleFn: PropTypes.func
};

// Component that shows the filter for each location
// The user selects which locaiton they would like, based off of this,
// the correct devices are shown in the DevicesSelectionFilter
const LocationSelectionFilter = props => {
  const classes = useStyles();
  return (
    <ExpandingCheckBox
      classes={classes}
      dataArr={props.locations}
      summaryName={'Locations'}
      handleChange={props.locationHandleFn}
    />
  );
};
LocationSelectionFilter.propTypes = {
  locations: PropTypes.array,
  locationHandleFn: PropTypes.func
};

// This component shows the devices to display the workouts on. They are
// shown based on what is selected in the location filter
const DevicesSelectionFilter = props => {
  const classes = useStyles();

  return (
    <ExpandingCheckBox
      classes={classes}
      dataArr={props.devices}
      summaryName={'Devices'}
      handleChange={props.devicesHandleFn}
    />
  );
};
DevicesSelectionFilter.propTypes = {
  devices: PropTypes.array,
  devicesHandleFn: PropTypes.func
};

// this function returns an expanding checkbox
const ExpandingCheckBox = props => {
  return (
    <div className={props.classes.expansionRoot}>
      <ExpansionPanel className={props.classes.elementForground + ' rounded'}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={props.classes.expansionHeading}>
            {props.summaryName}
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={props.classes.elementForground}>
          <CheckBoxFormGroup
            classes={props.classes}
            dataArr={props.dataArr}
            handleChange={props.handleChange}
          />
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
};

ExpandingCheckBox.propTypes = {
  classes: PropTypes.object,
  dataArr: PropTypes.array,
  summaryName: PropTypes.string,
  handleChange: PropTypes.func
};

const CheckBoxFormGroup = props => {
  const tempArr = [];
  const [checkBoxDataArr, setCheckBoxDataArr] = useState([]);

  // var update = require('immutability-helper')
  useEffect(() => {
    // build array of the locations to track their state
    props.dataArr.map(x => {
      tempArr.push({
        id: x.id,
        name: x.name
        //checked: true
      });
    });
    // set the initial state
    setCheckBoxDataArr(tempArr);
  }, [props.dataArr]);

  return (
    <>
      <FormControl component="fieldset" className={props.classes.formControl}>
        <FormGroup>
          {checkBoxDataArr.map((key, index) => (
            <FormControlLabel
              key={key.name}
              control={
                <Checkbox
                  value={key.id}
                  style={{
                    color: green[600]
                  }}
                  onChange={props.handleChange}
                />
              }
              label={
                <Typography variant="caption" display="block" gutterBottom>
                  {key.name}
                </Typography>
              }
            />
          ))}
        </FormGroup>
      </FormControl>
    </>
  );
};
CheckBoxFormGroup.propTypes = {
  handleChange: PropTypes.func,
  classes: PropTypes.object,
  dataArr: PropTypes.array
};

CheckBoxFormGroup.propTypes = {
  locations: PropTypes.array
};

const PiSelectionFilter = () => {};

const WorkoutInfoEntryForm = () => {};

const SeriesInfoEntryForm = () => {};

const ExerciseInfoEntryForm = () => {};

export { CreateWorkoutEntryForm as CreateWorkoutForm };
