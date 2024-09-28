/*
  Inlämningsuppgift 1, JavaScript 3, Kristoffer Bengtsson (FE23)
    Main App component. 
*/
import { useState, useEffect } from 'react';
import './App.css';
import { Clock } from './Clock';

function App() {
    // State to keep the time to display, defaults to current time.
    const [clockTime, setClockTime] = useState(() => {
        return new Date(Date.now());
    });

    // Start interval timer when App component first loads, triggering callback every second updating the time variable. 
    // Have to put in useEffect-hook otherwise another new interval timer keeps getting created whenever the component rerenders. 
    useEffect(() => {
        const clockTimer = setInterval(() => {
            const newTime = new Date(Date.now());
            setClockTime(newTime);
            console.log("TIME UPDATE:", clockTimer, newTime);
        }, 1000);

        // Cleanup function to stop interval timer when the App component is unmounted/removed from DOM. 
        // Also helps to prevent interval from being set twice due to Strict Mode when running in dev mode, 
        // see: https://legacy.reactjs.org/docs/strict-mode.html#detecting-unexpected-side-effects        
        return () => clearInterval(clockTimer);
    }, []);


    // App Component JSX
    return (
        <>
            <h1>Current Time</h1>
            <Clock currentTime={clockTime}></Clock>
        </>
    );
}

export default App;
