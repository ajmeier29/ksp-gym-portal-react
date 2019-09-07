import React, { useEffect, useState } from 'react';
import { setTimeout } from 'timers';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Typography
} from '@material-ui/core';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import fetchJsonPromise from '../api/api-calls';
import {
  Dropdown,
  DropdownButton,
  SplitButton,
  Form,
  ButtonToolbar
} from 'react-bootstrap';

const panelStyles = makeStyles(theme => ({
  root: {
    width: '75%',
    'margin-top': '10px',
    margin: 'auto',
    outline: 0,
    padding: '5px',
    'border-radius': '2x',
    'justify-content': 'center',
    'background-color': '#383838'
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  },
  summary: {
    'background-color': '#484848',
    color: 'white'
  }
}));

const filterBoxStyles = makeStyles(theme => ({
  root: {
    'margin-top': '10px',
    'padding-left': '20px',
    width: '10%',
    float: 'left'
  }
}));

// Component Description:
//    Form for creating a new workout
const CreateWorkoutForm = () => {
  return <>Hello World!! create workout</>;
};

export { CreateWorkoutForm };
