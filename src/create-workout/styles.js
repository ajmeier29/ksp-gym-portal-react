import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core';
import purple from '@material-ui/core/colors/purple';
import { grey } from '@material-ui/core/colors';

const seriesHeadingTheme = createMuiTheme({
  palette: {
    primary: { main: grey[500] }
  },
  status: {
    danger: 'orange'
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
    textAlign: 'center',
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
    textAlign: 'left'
    //   'padding-left': '20px',
    //   width: '100%'s
  },
  workoutReps: {
    color: 'white',
    'padding-top': '15px'
  },
  filterPanel: {}
}));

export { useStyles, seriesHeadingTheme };
