/*
    Clock component, display provided time. 
    By Kristoffer Bengtsson
*/


export function Clock({ currentTime }) {
    return (
        <div className="clock">
            <div className="clock-time">{currentTime}</div>
        </div>
    );
}