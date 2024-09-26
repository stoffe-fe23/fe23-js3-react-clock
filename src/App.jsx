/*
  Inlämningsuppgift 1, JavaScript 3, Kristoffer Bengtsson (FE23)
    Main App component. 
*/
import { useState, useEffect } from 'react';
import './App.css';
import { Clock } from './Clock';

function App() {
  // State variable to keep the time to display, defaults to current time.
  const [clockTime, setClockTime] = useState(() => {
    return new Date(Date.now());
  });

  // Start interval timer when app starts, triggering callback every second updating the time variable. 
  useEffect(() => { setInterval(() => setClockTime(new Date(Date.now())), 1000); }, []);


  // App Component JSX
  return (
    <>
      <h1>Current Time</h1>
      <Clock currentTime={clockTime}></Clock>
    </>
  );
}

export default App;
