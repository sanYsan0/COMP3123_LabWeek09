
import React from 'react';
import logo from './logo.svg';
import './App.css';

function StudentInfo(props) {
  return (
    <div>
      <h3>{props.studentId}</h3>
      <h4>{props.studentName}</h4>
      <h5>George Brown College, Toronto</h5>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="React logo" />

      <h1>Welcome to Fullstack Development - I</h1>
      <h2>React JS Programming Week09 Lab exercise</h2>

      <StudentInfo
        studentId="101503234"
        studentName="Sanyoung Yoon"
      />
    </div>
  );
}

export default App;