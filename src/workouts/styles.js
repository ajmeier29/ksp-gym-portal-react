import { makeStyles } from '@material-ui/core/styles';

const viewWorkoutStyles = makeStyles(theme => ({
  root: {},
  'grid-wrapper': {
    display: 'grid',
    'grid-gap': '10px',
    'grid-template-columns':
      '[col1-start] 100px  [col2-start] 100px  [col3-start] 100px [col4-start] 100px [col4-end]',
    'grid-template-rows':
      '[row1-start] 100px [row2-start] 100px [row3-start] 100px [row3-end]',
    'background-color': '#fff',
    color: '#444'
  },
  'normal-box': {
    'background-color': '#444',
    color: '#fff',
    'border-radius': '5px',
    padding: '20px',
    'font-size': '150%'
  },
  'right-top-box': {
    'background-color': '#444',
    color: '#fff',
    'border-radius': '5px',
    padding: '20px',
    'font-size': '150%'
  },
  'right-bottom-box': {
    'background-color': '#444',
    color: '#fff',
    'border-radius': '5px',
    padding: '20px',
    'font-size': '150%'
  },
  box1: {
    'grid-column': 'col1-start / col4-end',
    'grid-row': 'row1-start'
  },
  box3: {
    'grid-column': 'col3-start / col4-end',
    'grid-row': '[row2-start] / row2-end'
  },
  box2: {
    'grid-column': 'col1-start / col3-start',
    'grid-row': 'row2-start '
  },
  box5: {
    'grid-column': 'col3-start / col4-end',
    'grid-row': 'row3-start'
  },
  box4: {
    'grid-column': 'col1-start / col3-start',
    'grid-row': 'row3-start'
  }
}));
