import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { green } from '@material-ui/core/colors';
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  Typography,
  ExpansionPanelDetails,
  FormControl,
  FormGroup,
  Checkbox,
  FormControlLabel
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useStyles } from './Create-Workout-Form';
import { removeFromArrayByIndex } from '../tools/tools';

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
    list = removeFromArrayByIndex(locFormArr, x => x.id == sourceArr[index].id);
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
    list = removeFromArrayByIndex(stateArr, x => x.id == sourceArr[index].id);
  }
  setStateFn(list);
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

export {
  locationCheckboxProcedures,
  containsObject,
  deviceCheckboxProcedures,
  FilterSelectionComponent
};
