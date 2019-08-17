import React from 'react';
import logo from './logo.svg';
import './App.css';
import { allResolved } from 'q';

const AlertUpdate = props => {
  return (
    <div className="alert alert-primary alertToast" role="alert">
      Successfully loaded all workouts!!
    </div>
  );
};

const DisplayList = props => {
  return (
    <div className="card test">
      <h2>Hello World!</h2> <br />
      <a href="#" className="btn btn-primary">
        Go somewhere
      </a>
    </div>
  );
};

function App() {
  return (
    <div>
      <AlertUpdate />
      <DisplayList />
    </div>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
