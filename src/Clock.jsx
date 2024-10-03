/*
    Inlämningsuppgift 1, JavaScript 3, Kristoffer Bengtsson (FE23)
    Clock component, takes a date object property and displays its time.
*/


export function Clock({ currentTime }) {
    // Get time from a Date object and return as a string in HH:MM:SS format. 
    function getFormattedTimeString(dateObj, locale = "sv-SE") {
        const formatOptions = {
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
        };
        return new Intl.DateTimeFormat(locale, formatOptions).format(dateObj);
    }

    // Clock component JSX - display the time
    return (
        <div className="clock">
            <div className="clock-time">{getFormattedTimeString(currentTime)}</div>
        </div>
    );
}