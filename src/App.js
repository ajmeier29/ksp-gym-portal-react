import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import { allResolved } from 'q';
import { useState } from 'react';
import {
  Container,
  Row,
  Col,
  Button,
  Alert,
  Fade,
  Collapse,
  Card
} from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';
import { setTimeout } from 'timers';
import PropTypes from 'prop-types';

const testWorkout = {
  id: {
    entityid: '5d2a351b00557896c7489d23'
  },
  workout_name: 'Adult Metabolic',
  workout_date: '2019-07-13T17:00:00Z',
  workout_image_url: 'www.google.com',
  workout_series: [
    {
      series_number: {
        numberDouble: '1'
      },
      series_tag: '3x',
      exercises: [
        {
          exercise_number: {
            numberDouble: '1'
          },
          exercise_name: 'DB Squat 3 Sec Dec',
          exercise_reps: '8-10x'
        },
        {
          exercise_number: {
            numberDouble: '2'
          },
          exercise_name: 'Ladders',
          exercise_reps: '2-3x'
        },
        {
          exercise_number: {
            numberDouble: '3'
          },
          exercise_name: 'SB Slams',
          exercise_reps: '8-10x'
        }
      ]
    },
    {
      series_number: {
        numberDouble: '2'
      },
      series_tag: '2x - 3x',
      exercises: [
        {
          exercise_number: {
            numberDouble: '1'
          },
          exercise_name: 'DB Good Mornings',
          exercise_reps: '10x'
        },
        {
          exercise_number: {
            numberDouble: '2'
          },
          exercise_name: 'Ring Squats/Jumps',
          exercise_reps: '10-15x'
        },
        {
          exercise_number: {
            numberDouble: '3'
          },
          exercise_name: 'KB 1 Side Carry',
          exercise_reps: '1-2x'
        }
      ]
    }
  ]
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

const LineItem = props => {
  const [showCard, setShowCard] = useState(false);
  const handleClick = () => {
    setShowCard(!showCard);
  };

  const listWorkouts = testWorkout.workout_series.map(series => (
    <div>
      <ul>
        <li>Series Number: {series.series_number.numberDouble}</li>
        <ul>
          {series.exercises.map(exercise => (
            <li>{exercise.exercise_name}</li>
          ))}
        </ul>
      </ul>
    </div>
  ));
  return (
    <div style={divStyle}>
      <Container bsPrefix="border border-dark rounded w-100 p-1">
        <Row>
          <Col lg="10">
            <div className="card bg-light">
              <div className="card-body">
                Workout Name: {testWorkout.workout_name} | Workout Date:{' '}
                {testWorkout.workout_date} | Workout ID:{' '}
                {testWorkout.id.entityid}
              </div>
            </div>
          </Col>
          <Col xs={1.5}>
            <div className="card" onClick={handleClick}>
              <div className="card-body btn btn-primary">Show Workout</div>
            </div>
          </Col>
        </Row>
        <Collapse in={showCard}>
          <div className="card bg-light">{listWorkouts}</div>
        </Collapse>
      </Container>
    </div>
  );
};

const DisplayList = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="card line-item-card">
      <a href="/#" className="btn btn-primary" onClick={() => setOpen(!open)}>
        Go somewhere
      </a>
      <Collapse in={open}>
        <div>
          <h2>Hello World!</h2> <br />
        </div>
      </Collapse>
    </div>
  );
};

function App() {
  return (
    <div>
      <LineItem />
      <LineItem />
      <LineItem />
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
