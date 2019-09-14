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

export { formControlLableCheckBox, formGroupFilterTheme };
