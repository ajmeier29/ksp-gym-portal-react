import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import { ThemeProvider } from '@material-ui/styles';
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
  formGroupFilterTheme
} from '../themes/themes.js';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: '50px'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
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
  }
}));

// TEMP, NEED TO REMOVE
// REPLACE WITH WEB API CALL
const arrLocations = [
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

const arrDevices = [
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
    loccation: 'Bethelehem'
  }
];

// const WorkoutName = props => {
//   return (
//     <>
//       <TextField
//         variant="outlined"
//         required
//         fullWidth
//         id="lastName"
//         label={props.workoutName}
//         name="lastName"
//         autoComplete="lname"
//         onChange={props.handleWorkoutNameChange}
//       />
//     </>
//   );
// };

// removes an item from an array based of of an 'id' attribute
const removeFromArrayById = (arr, fnMatch) => {
  const index = arr.findIndex(fnMatch);
  return arr.slice(0, index).concat(arr.slice(index + 1, arr.length));
};

// The entire workout form assembled together
const CreateWorkoutEntryForm = () => {
  const classes = useStyles();

  const [locations] = useState(arrLocations); // Locations in NoSQL database
  const [devices, setDevices] = useState([]); // Devices in NoSQL database
  const [formLocations, setFormLocations] = useState([]); // Locations to be submitted
  let [formDevices, setFormDevices] = useState([]); // Devices to be submitted
  let [formWorkout, setFormWorkout] = useState([]); // Workout to be submitted
  let [formSeries, setFormSeries] = useState([]); // Series to be submitted
  let [formExercises, setFormExercises] = useState([]); // Exercises to be submitted

  const [workoutName, setWorkoutName] = useState('Enter Workout Name');

  const handleSubmit = event => {
    var test = formLocations;
    // event.preventDefault();
    // let test = event.currentTarget;
    // const data = new FormData(event.target);

    // console.log(`WorkoutName in handlesubmit: ${workoutName}`);
  };

  const handleLocationChange = event => {
    // get the index of the location selected for use in the locations array
    const index = locations.findIndex(x => x.id === event.target.value); //,
    //tempArray = [...locations];

    let isChecked = event.target.checked;

    if (isChecked === true) {
      // Add to locations list
      let joined = formLocations.concat(locations[index]);
      setFormLocations(joined);
    } else {
      // Remove the location
      let removed = removeFromArrayById(
        formLocations,
        x => x.id == locations[index].id
      ); //x => x.id == )
      setFormLocations(removed);
    }
    // update the devices list
    setDevices([...arrDevices]);
  };

  // useEffect(() =>
  // {

  //   setDevices({arrDevices});
  // })

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
              />
            </Paper>
          </Grid>
          <Grid item xs={10}>
            <Paper className={classes.paper}>xs=6</Paper>
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
      <DevicesSelectionFilter devices={props.devices} />
    </>
  );
};
FilterSelectionComponent.propTypes = {
  locations: PropTypes.array,
  devices: PropTypes.array,
  locationHandleFn: PropTypes.func
};

// Component that shows the filter for each location
// The user selects which locaiton they would like, based off of this,
// the correct devices are shown in the DevicesSelectionFilter
const LocationSelectionFilter = props => {
  const classes = useStyles();
  // const [locations, setLocations] = useState([]);

  // useEffect(() => {
  //   setLocations(props.locations);
  // }, []);
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
      handleChange={props.handleChange}
    />
  );
};
DevicesSelectionFilter.propTypes = {
  devices: PropTypes.array,
  handleChange: PropTypes.func
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
    console.log('called CheckBoxFormGroup');
  }, [props.dataArr]);

  // const handleChange = (id) => {
  //   var data = checkBoxDataArr;
  //   // find the object witht the same id
  //   var checkboxIndex = data.findIndex(x => {
  //     return x.id == id
  //   })
  //   var updatedCheckbox = update(data[checkboxIndex], { checked: false });
  //   var newData = update(data, {
  //     $splice: [[checkboxIndex, 1, updatedCheckbox]]
  //   });
  //   setCheckBoxDataArr(newData)
  // };

  // const handleChange = (event) => {
  //   var test = event.target.value;
  //   const index = checkBoxDataArr.findIndex(x => x.id === event.target.value), tempDataArr = [...checkBoxDataArr] // important to create a copy, otherwise you'll modify state outside of setState call
  //   tempDataArr[index] = [...checkBoxDataArr[index], {checked:false}]
  //   //this.setState({ employees });
  // }

  //   const index = this.state.employees.findIndex(emp => emp.id === employee.id),
  //   employees = [...this.state.employees] // important to create a copy, otherwise you'll modify state outside of setState call
  // employees[index] = employee;

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
