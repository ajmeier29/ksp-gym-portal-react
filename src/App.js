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
  _id: {
    $oid: '5d2a351b00557896c7489d23'
  },
  workout_name: 'Adult',
  workout_date: '2019-07-13T17:00:00Z',
  workout_image_url: 'www.google.com',
  workout_series: [
    {
      series_number: {
        $numberDouble: '1'
      },
      series_tag: '3x',
      exercises: [
        {
          exercise_number: {
            $numberDouble: '1'
          },
          exercise_name: 'DB Squat 3 Sec Dec',
          exercise_reps: '8-10x'
        },
        {
          exercise_number: {
            $numberDouble: '2'
          },
          exercise_name: 'Ladders',
          exercise_reps: '2-3x'
        },
        {
          exercise_number: {
            $numberDouble: '3'
          },
          exercise_name: 'SB Slams',
          exercise_reps: '8-10x'
        }
      ]
    },
    {
      series_number: {
        $numberDouble: '2'
      },
      series_tag: '2x - 3x',
      exercises: [
        {
          exercise_number: {
            $numberDouble: '1'
          },
          exercise_name: 'DB Good Mornings',
          exercise_reps: '10x'
        },
        {
          exercise_number: {
            $numberDouble: '2'
          },
          exercise_name: 'Ring Squats/Jumps',
          exercise_reps: '10-15x'
        },
        {
          exercise_number: {
            $numberDouble: '3'
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
  position: 'absolute',
  top: 5,
  bottom: 0,
  left: '10%',
  right: 0,
  margin: 'auto'
};

const LineItem = props => {
  return (
    <div style={divStyle}>
      <Container bsPrefix="w-100 p-3">
        <Row>
          <Col lg="8">
            <div className="card">
              <div className="card-body">Workout Information blah bla bla</div>
            </div>
          </Col>
          <Col xs={2}>
            <div className="card">
              <div className="card-body btn btn-primary">Show Workout</div>
            </div>
          </Col>
        </Row>
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
      {/* <ShowToast /> */}
      {/* <Example /> */}
      <DisplayList />
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
