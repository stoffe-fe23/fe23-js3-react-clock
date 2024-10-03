/*
  Inlämningsuppgift 1, JavaScript 3, Kristoffer Bengtsson (FE23)
    Main App component, shows Clock component with current time.  
*/
import { useState, useEffect } from 'react';
import './App.css';
import { Clock } from './Clock';

function App() {
    // State to keep the time to display, starts at current time.
    const [clockTime, setClockTime] = useState(() => {
        return new Date();
    });

    // Start interval timer when App component first loads, triggering callback every second updating the time variable. 
    // Put in useEffect-hook to prevent another new interval timer getting created whenever the component rerenders. 

    useEffect(() => {
        const clockTimer = setInterval(() => setClockTime(new Date()), 1000);

        // Cleanup function to stop interval timer when the App component is unmounted/removed from DOM.     
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
