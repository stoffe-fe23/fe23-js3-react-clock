/*
    Clock component, display provided time. 
    By Kristoffer Bengtsson
*/


export function Clock({ currentTime }) {

    // Get time from timestamp in HH:MM:SS format. 
    function getFormattedTime(dateObj = null, locale = "sv-SE") {
        const formatOptions = {
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
        };
        return new Intl.DateTimeFormat(locale, formatOptions).format(dateObj);
        // return new Intl.DateTimeFormat(locale, formatOptions).format(new Date(timestamp));
    }

    return (
        <div className="clock">
            <div className="clock-time">{getFormattedTime(currentTime)}</div>
        </div>
    );
}