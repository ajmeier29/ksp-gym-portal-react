import React, { useState, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@material-ui/core';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core';
import { grey, blue } from '@material-ui/core/colors';

const CSSDialog = withStyles({
  root: {
    'background-color': 'transparent',
    color: '#383838'
  }
})(Dialog);

const CSSDialogTitle = withStyles({
  root: {
    'background-color': '#383838',
    color: 'white'
  }
})(DialogTitle);

const CSSDialogContent = withStyles({
  root: {
    'background-color': '#383838'
  }
})(DialogContent);

const CSSDialogContentText = withStyles({
  root: {
    'background-color': '#383838',
    color: 'white'
  }
})(DialogContentText);

const CSSDialogActions = withStyles({
  root: {
    'background-color': '#383838',
    color: 'white'
  }
})(DialogActions);

const CSSButton = withStyles({
  root: {
    'background-color': '#383838',
    '&.MuiButton-text': {
      color: 'white'
    },
    '&:focus': {
      outline: 'none'
    }
  }
})(Button);

const DialogBox = props => {
  const handleClose = () => {
    var test = '';
  };
  return (
    <>
      <CSSDialog open={props.open} onClose={handleClose}>
        <CSSDialogTitle id="dialog-title">{props.dialogTitle}</CSSDialogTitle>
        <CSSDialogContent>
          <CSSDialogContentText id="alert-dialog-descrtiption">
            {props.dialogContentText}
          </CSSDialogContentText>
        </CSSDialogContent>
        <CSSDialogActions>
          <CSSButton onClick={handleClose}>Cancel</CSSButton>
          <CSSButton onClick={handleClose}>Submit</CSSButton>
        </CSSDialogActions>
      </CSSDialog>
    </>
  );
};

DialogBox.propTypes = {
  open: PropTypes.bool,
  dialogTitle: PropTypes.string,
  dialogContentText: PropTypes.string,
  handleokfn: PropTypes.func,
  handlenokfn: PropTypes.func
};

export default DialogBox;
