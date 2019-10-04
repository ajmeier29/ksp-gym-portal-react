import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core';
import purple from '@material-ui/core/colors/purple';
import { grey, blueGrey } from '@material-ui/core/colors';

const seriesHeadingTheme = createMuiTheme({
  palette: {
    primary: { main: grey[500] },
    secondary: { main: grey[700] }
  },
  status: {
    danger: 'white'
  },
  direction: 'rtl'
});

const iconTheme = createMuiTheme({
  palette: {
    primary: { main: blueGrey[50] }
  },
  status: {
    danger: 'white'
  },
  direction: 'rtl'
});

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    // display:'flex',
    margin: '50px'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    //   padding: theme.spacing(2),
    //   textAlign: 'left', // This is what justifys all the content in the Paper....not just text
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
  normalTextField: {
    color: 'white'
  },
  datePicker: {
    color: 'white'
  },
  workoutFormDivParent: {
    display: 'flex'
  },
  workoutDatePicker: {
    'padding-left': '20px'
  },
  workoutTextField: {
    'padding-top': '10px',
    'padding-bottom': '7px',
    textAlign: 'left'
    //   'padding-left': '20px',
    //   width: '100%'s
  },
  workoutReps: {
    color: 'white',
    'padding-top': '15px'
  },
  mainWrapper: {
    display: 'grid',
    'grid-template-columns': '1fr 1fr 1fr',
    'grid-template-rows': '100px 100px',
    'grid-gap': '50px',
    margin: '50px'
  },
  sidebar: {
    'grid-column': '1/2',
    'grid-row': '1'
  },
  formgrid: {
    'grid-column': '2/14',
    'grid-row': '1/2'
  },
  gridParent: {
    display: 'grid',
    'grid-template-columns': '1fr 1fr 1fr',
    // 'grid-template-rows': '10px 100px',
    'grid-auto-rows': 'minmax(100px, auto)',
    'grid-gap': '10px',
    margin: '10px'
  },
  workoutDateGrid: {
    'grid-column': '1/2',
    'grid-row': '1'
  },
  workoutNameGrid: {
    'grid-column': '2/4',
    'grid-row': '1'
  },
  seriesGrid: {
    'grid-column': '1/4'
    // 'grid-row': '1'
  },
  exerciseNumberGrid: {
    'grid-column': '1/2',
    'grid-row': '1'
  },
  exerciseNameGrid: {
    'grid-column': '2/3',
    'grid-row': '1',
    'margin-top': '39px'
  },
  exerciseRepsGrid: {
    'grid-column': '3/3',
    'grid-row': '1',
    'margin-top': '39px'
  }
}));

export { useStyles, seriesHeadingTheme, iconTheme };
