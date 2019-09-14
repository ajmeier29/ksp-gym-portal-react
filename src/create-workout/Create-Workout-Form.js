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

// The entire workout form assembled together
const CreateWorkoutEntryForm = () => {
  const classes = useStyles();

  const [locations, setLocations] = useState([{}]);

  const [workoutName, setWorkoutName] = useState('Enter Workout Name');

  const handleSubmit = event => {
    event.preventDefault();
    let test = event.currentTarget;
    const data = new FormData(event.target);

    console.log(`WorkoutName in handlesubmit: ${workoutName}`);
  };

  const handleWorkoutNameChange = event => {
    setWorkoutName(event.target.value);
    console.log(`WorkoutName: ${workoutName}`);
  };

  return (
    <div className={classes.root}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid className={classes.elementBackground} item xs={2}>
            <Paper>
              <FilterSelectionComponent />
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

const FilterSelectionComponent = () => {
  return (
    <>
      <LocationSelectionFilter />
      <DevicesSelectionFilter />
    </>
  );
};

// Component that shows the filter for each location
// The user selects which locaiton they would like, based off of this,
// the correct devices are shown in the DevicesSelectionFilter
const LocationSelectionFilter = () => {
  const classes = useStyles();
  const [locations, setLocations] = useState([]);

  // TEMP, NEED TO REMOVE
  // REPLACE WITH WEB API CALL
  const arrLocations = [
    {
      name: 'Allentown',
      phone: '6013905742'
    },
    {
      name: 'Bethlehem',
      phone: '6103905742'
    }
  ];

  // useEffect(() => {
  //   setLocations(arrLocations);
  // }, []);
  return (
    <ExpandingCheckBox
      classes={classes}
      dataArr={arrLocations}
      summaryName={'Locations'}
    />
  );
};

// This component shows the devices to display the workouts on. They are
// shown based on what is selected in the location filter
const DevicesSelectionFilter = props => {
  const classes = useStyles();
  const [devices, setDevices] = useState([]);
  const arryDevices = [
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
  return (
    <ExpandingCheckBox
      classes={classes}
      dataArr={arryDevices}
      summaryName={'Devices'}
    />
  );
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
          <CheckBoxFormGroup classes={props.classes} dataArr={props.dataArr} />
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
};

ExpandingCheckBox.propTypes = {
  classes: PropTypes.object,
  dataArr: PropTypes.array,
  summaryName: PropTypes.string
};

const CheckBoxFormGroup = props => {
  const tempArr = [];
  const [checkBoxDataArr, setCheckBoxDataArr] = useState([]);

  useEffect(() => {
    // build array of the locations to track their state
    props.dataArr.map(x => {
      tempArr.push({
        id: x.id,
        name: x.name,
        checked: true
      });
    });
    // set the initial state
    setCheckBoxDataArr(tempArr);
  }, []);

  const handleChange = () => {
    setCheckBoxDataArr();
  };

  return (
    <>
      <FormControl component="fieldset" className={props.classes.formControl}>
        <FormGroup>
          {checkBoxDataArr.map((key, index) => (
            <FormControlLabel
              key={key.name}
              control={
                <Checkbox
                  checked={key.checked}
                  onChange={handleChange(key.name)}
                  value={key.name}
                  style={{
                    color: green[600]
                  }}
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
