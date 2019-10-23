import { makeStyles } from '@material-ui/core/styles';

const viewWorkoutStyles = makeStyles(theme => ({
  root: {},
  gridwrapper: {
    display: 'grid',
    'grid-gap': '10px',
    'grid-template-columns':
      '[col1-start] 25%  [col2-start] 25% [col3-start] 25% [col4-start] 25% [col4-end]',
    'grid-template-rows':
      '[row1-start] 100px [row2-start] 400px [row3-start] 400px [row3-end]',
    'background-color': '#fff',
    'padding-top': '10px',
    'padding-left': '5px',
    'padding-right': '35px',
    color: '#fff'
  },
  normalbox: {
    'background-color': '#fff',
    color: '#444',
    'border-radius': '5px',
    padding: '20px'
  },
  righttopbox: {
    'background-color': '#fff',
    color: '#444',
    'border-radius': '5px',
    padding: '20px',
    'font-size': '150%',
    height: '560px'
  },
  rightbottombox: {
    'background-color': '#fff',
    color: '#444',
    'border-radius': '5px',
    padding: '20px',
    'margin-top': '160px',
    'font-size': '150%',
    height: '240px'
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
  },
  picture: {
    float: 'right',
    align: 'top'
  },
  box1elms: {
    display: 'inline-block'
  },
  exercisereps: {
    textAlign: 'right'
  }
}));

export default viewWorkoutStyles;
