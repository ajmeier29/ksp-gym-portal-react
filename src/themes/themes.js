import { createMuiTheme } from '@material-ui/core';

const formControlLableCheckBox = createMuiTheme({
  overrides: {
    MuiFormControlLabel: {
      label: {
        fontSize: '12px'
      }
    }
  }
});

const formGroupFilterTheme = createMuiTheme({
  overrides: {
    MuiFormGroup: {
      margin: 'auto',
      'justify-content': 'left'
    }
  }
});

const formWorkoutTextTheme = createMuiTheme({
    overrides: {
      MuiTextField: {
        color: 'white',
        background: 'white'
      }
    }
  });

export { formControlLableCheckBox, formGroupFilterTheme, formWorkoutTextTheme };
