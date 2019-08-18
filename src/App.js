import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import { allResolved } from 'q';
import { useState } from 'react';
// import {
//   Container,
//   Row,
//   Col,
//   Button,
//   Alert,
//   Fade,
//   Collapse,
//   Card
// } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';
import { setTimeout } from 'timers';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TestWorkoutData from './test-data.js';
import { makeStyles } from '@material-ui/core/styles';
import {
  ExpansionPanelActions,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Typography
} from '@material-ui/core';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const panelStyles = makeStyles(theme => ({
  root: {
    width: '75%',
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

const WorkoutLineItemWrapper = props => {
  const classes = panelStyles();
  return (
    <div className={classes.root}>
      <WorkoutLineItem workoutinfo={props.workoutinfo} />
      <WorkoutLineItem workoutinfo={props.workoutinfo} />
      <WorkoutLineItem workoutinfo={props.workoutinfo} />
    </div>
  );
};
const WorkoutLineItem = props => {
  const classes = panelStyles();
  const workoutName = `Workout Name: ${props.workoutinfo.workout_name}`;
  const workoutDate = `Workout Date: ${new Date(
    props.workoutinfo.workout_date
  ).toLocaleString()}`;
  const workoutHeader = `${workoutName} | ${workoutDate}`;

  return (
    <ExpansionPanel className={classes.summary + ' rounded'}>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography className={classes.heading}>{workoutHeader}</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails className={classes.summary}>
        <Typography>
          {props.workoutinfo.workout_series.map(series => (
            <>
              <ul>
                <li>Series Number: {series.series_number.numberDouble}</li>
                <li>Series Tag: {series.series_tag}</li>
                <li>
                  Exercises:
                  <ul>
                    {series.exercises.map(exercise => (
                      <li>{exercise.exercise_name}</li>
                    ))}
                  </ul>
                </li>
              </ul>
            </>
          ))}
        </Typography>
      </ExpansionPanelDetails>
      {/* <ExpansionPanelActions>
          <Button size="small">Cancel</Button>
          <Button size="small" color="primary">
            Save
          </Button>
        </ExpansionPanelActions> */}
    </ExpansionPanel>
  );
};

WorkoutLineItem.propTypes = {
  workoutinfo: PropTypes.object
};

const LineItem = props => {
  return (
    <Button variant="contained" color="primary">
      {TestWorkoutData().workout_name}
    </Button>
  );
};

// const LineItem = (props) => {
//   return (
//     <Container>
//       <Row>
//         <Col style={{ display: 'inline-block' }}>
//           <div style={{ display: 'inline-block'}}>
//             <a href="/#" className="btn btn-primary" >
//               Show Workout
//             </a>
//             <div className="card border-light d-inline-block" >
//               <div className="card-body">
//                 This is some text within a card body.
//             </div>
//             </div>
//           </div>
//         </Col>
//         <Col><Button>Show Workout</Button></Col>
//       </Row>
//     </Container>
//   )
// }

const divStyle = {
  position: 'relative',
  top: 20,
  bottom: 0,
  'padding-right': '100px',
  'padding-left': '100px'
};

// const LineItem = props => {
//   const [showCard, setShowCard] = useState(false);
//   const handleClick = () => {
//     setShowCard(!showCard);
//   };

//   const listWorkouts = testWorkout.workout_series.map(series => (
//     <div>
//       <ul>
//         <li>Series Number: {series.series_number.numberDouble}</li>
//         <ul>
//           {series.exercises.map(exercise => (
//             <li>{exercise.exercise_name}</li>
//           ))}
//         </ul>
//       </ul>
//     </div>
//   ));
//   return (
//     <div style={divStyle}>
//       <Container bsPrefix="border border-dark rounded w-100 p-1">
//         <Row>
//           <Col lg="10">
//             <div className="card bg-light">
//               <div className="card-body">
//                 Workout Name: {testWorkout.workout_name} | Workout Date:{' '}
//                 {testWorkout.workout_date} | Workout ID:{' '}
//                 {testWorkout.id.entityid}
//               </div>
//             </div>
//           </Col>
//           <Col xs={1.5}>
//             <div className="card" onClick={handleClick}>
//               <div className="card-body btn btn-primary">Show Workout</div>
//             </div>
//           </Col>
//         </Row>
//         <Collapse in={showCard}>
//           <div className="card bg-light">{listWorkouts}</div>
//         </Collapse>
//       </Container>
//     </div>
//   );
// };

// const DisplayList = () => {
//   const [open, setOpen] = useState(false);
//   return (
//     <div className="card line-item-card">
//       <a href="/#" className="btn btn-primary" onClick={() => setOpen(!open)}>
//         Go somewhere
//       </a>
//       <Collapse in={open}>
//         <div>
//           <h2>Hello World!</h2> <br />
//         </div>
//       </Collapse>
//     </div>
//   );
// };

function App() {
  return (
    <div>
      <WorkoutLineItemWrapper workoutinfo={TestWorkoutData()} />

      {/* <LineItem />
      <LineItem />
      <LineItem /> */}
      {/* <ShowToast /> */}
      {/* <Example /> */}
      {/* <DisplayList /> */}
    </div>
  );
}
export default App;

// function Example() {
//   const [open, setOpen] = useState(false);

//   const handleClick = () => {
//     setOpen(true);
//     setTimeout(() => setOpen(false), 3000);
//   };

//   return (
//     <>
//       <Container style={{ paddingTop: '2rem' }}>
//         <Button onClick={handleClick}>Show Toast Message</Button>
//       </Container>
//       <ShowToast show={open} onClickFn={setOpen} />
//     </>
//   );
// }

// const ShowToast = props => {
//   return (
//     <Fade in={props.show}>
//       <Container style={{ paddingTop: '2rem' }}>
//         <CSSTransition in={props.show} timeout={1000} classNames="toastAlert">
//           <Alert
//             variant="primary"
//             dismissible
//             onClose={() => props.onClickFn(false)}
//           >
//             <Alert.Heading>Test Toast Message</Alert.Heading>
//           </Alert>
//         </CSSTransition>
//       </Container>
//     </Fade>
//   );
// }

// ShowToast.propTypes = {
//   show: PropTypes.string,
//   onClickFn: PropTypes.func
// }
