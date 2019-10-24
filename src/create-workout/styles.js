import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { grey, blueGrey } from '@material-ui/core/colors';
import { KeyboardDatePicker, KeyboardTimePicker } from '@material-ui/pickers';
import { withStyles } from '@material-ui/styles';

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

const CssTimePicker = withStyles({
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
})(KeyboardTimePicker);

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
  demo: {
    backgroundColor: theme.palette.background.paper
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
  preview: {
    width: '75%',
    'margin-left': '10%',
    'margin-top': '2%'
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
  workoutDateGrid: {
    'grid-column': '1/2',
    'grid-row': '1'
  },
  workoutNameGrid: {
    'grid-column': '2/4',
    'grid-row': '1'
  },
  gridParent: {
    display: 'grid',
    'grid-template-columns': '1fr 1fr 1fr 1fr',
    // 'grid-template-rows': '10px 100px',
    'grid-auto-rows': 'minmax(100px, auto)',
    'grid-gap': '10px',
    margin: '10px'
  },
  seriesGrid: {
    'grid-column': '1/4'
    // 'grid-row': '1'
  },

  seriesGridParent: {
    display: 'grid',
    'grid-template-columns': '1fr 1fr 1fr',
    // 'grid-template-rows': '10px 100px',
    'grid-auto-rows': 'minmax(100px, auto)',
    'grid-gap': '10px',
    margin: '10px'
  },
  exerciseNumberGrid: {
    'grid-column': '1/2',
    'grid-row': '1'
  },
  exerciseNameGrid: {
    'grid-column': '1/4',
    'grid-row': '1',
    'margin-top': '39px'
  },
  exerciseRepsGrid: {
    'grid-column': '4/4',
    'grid-row': '1',
    'margin-top': '39px'
  },
  selctorsParent: {
    display: 'grid',
    'grid-template-columns': '1fr 1fr 1fr',
    // 'grid-template-rows': '10px 100px',
    'grid-auto-rows': 'minmax(100px, auto)',
    'grid-gap': '10px',
    margin: '10px'
  },
  filterSelectorGrid1: {
    display: 'grid',
    'grid-template-columns': 'repeat(2, 1fr)',
    'grid-auto-rows': 'minmax(min-content, max-content)'
  },
  filterSelectorGrid2: {
    display: 'grid',
    'grid-template-columns': '1fr 1fr 1fr',
    'grid-auto-rows': 'minmax(min-content, max-content)',
    backgroundColor: '#383838'
  },
  datePickerGrid: {
    'grid-column': '3/3',
    'grid-row': '1',
    'grid-auto-rows': 'minmax(min-content, max-content)'
  },
  dateTimePickerGrid: {
    'grid-column': '3/3',
    'grid-row': '2',
    'grid-auto-rows': 'minmax(min-content, max-content)'
  },
  selectedTimesGrid: {
    'grid-column': '1/3',

    'padding-left': '10px',
    'grid-auto-rows': 'minmax(min-content, max-content)'
  }
}));

export {
  useStyles,
  seriesHeadingTheme,
  iconTheme,
  CssTimePicker,
  CssDatePicker,
  CssTextField
};
