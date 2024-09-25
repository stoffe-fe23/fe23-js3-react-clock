/*
    Main App component. 
    By Kristoffer Bengtsson
*/
import { useState, useEffect } from 'react';
import './App.css';
import { Clock } from './Clock';

function App() {
  // State variable to keep the time to display, defaults to current time.
  const [clockTime, setClockTime] = useState(() => {
    return getCurrentTime();
  });

  // Start interval timer when app starts, triggering callback every second updating the time variable. 
  useEffect(() => { setInterval(() => setClockTime(getCurrentTime()), 1000); }, []);

  // Get current time in HH:MM:SS format. 
  function getCurrentTime(locale = "sv-SE") {
    const formatOptions = {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    };
    return new Intl.DateTimeFormat(locale ?? navigator.language, formatOptions).format(new Date(Date.now()));
  }

  // Component
  return (
    <>
      <h1>Current Time</h1>
      <Clock currentTime={clockTime}></Clock>
    </>
  );
}

export default App;
