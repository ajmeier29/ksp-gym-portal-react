import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
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
  }
}));

const WorkoutName = props => {
  return (
    <>
      <TextField
        variant="outlined"
        required
        fullWidth
        id="lastName"
        label={props.workoutName}
        name="lastName"
        autoComplete="lname"
        onChange={props.handleWorkoutNameChange}
      />
    </>
  );
};

// The entire workout form assembled together
const CreateWorkoutEntryForm = () => {
  const classes = useStyles();

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
          <Grid item xs={12}>
            <Paper className={classes.paper}>xs=12</Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper className={classes.paper}>
              <WorkoutName
                workoutName={workoutName}
                handleWorkoutNameChange={handleWorkoutNameChange}
              />
            </Paper>

            {/* <FilterSelectionComponent /> */}
            {/* <Paper className={classes.paper}>xs=6</Paper> */}
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
    </>
  );
};

const LocationSelectionFilter = () => {
  const classes = useStyles();
  const [locations, setLocations] = useState([]);

  // TEMP, NEED TO REMOVE
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

  useEffect(() => {
    setLocations(arrLocations);
  }, []);
  return (
    <>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Locations</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <CheckBoxFormGroup locations={arrLocations} />
          {/* <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography> */}
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Devices</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          {/* <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography> */}
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </>
  );
};

const CheckBoxFormGroup = props => {
  const classes = useStyles();
  const arrLocations = [];
  const [checkboxLocations, setCheckBoxLocations] = useState([]);

  useEffect(() => {
    // build array of the locations to track their state
    props.locations.map(x => {
      arrLocations.push({
        name: x.name,
        checked: true
      });
    });
    // set the initial state
    setCheckBoxLocations(arrLocations);
  }, []);

  const handleChange = () => {};

  return (
    <>
      <FormControl component="fieldset" className={classes.formControl}>
        {/* <FormLabel component="legend">Assign responsibility</FormLabel> */}
        <FormGroup>
          {checkboxLocations.map((key, index) => (
            <FormControlLabel
              key={key.name}
              control={
                <Checkbox
                  checked={key.checked}
                  onChange={handleChange(key.name)}
                  value={key.name}
                />
              }
              label={key.name}
            />
          ))}
        </FormGroup>
      </FormControl>
    </>
  );
};

CheckBoxFormGroup.propTypes = {
  locations: PropTypes.array
};

const PiSelectionFilter = () => {};

const WorkoutInfoEntryForm = () => {};

const SeriesInfoEntryForm = () => {};

const ExerciseInfoEntryForm = () => {};

export { CreateWorkoutEntryForm as CreateWorkoutForm };
