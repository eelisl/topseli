import React from 'react';

interface TimePickerProps {
    handleChange: React.Dispatch<React.SetStateAction<"Tänään" | "Huomenna">>;
    tomorrowDisabled: boolean;
}

const TimePicker = ({ handleChange, tomorrowDisabled }: TimePickerProps) => {

    const handleClick = (value: "Tänään" | "Huomenna") => (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        handleChange(value);
    }

    return (

        <div>
            <button onClick={handleClick("Tänään")}>Tänään</button>
            <button onClick={handleClick("Huomenna")} disabled={tomorrowDisabled}>Huomenna</button>
            {tomorrowDisabled && <p>Huomisen hintatiedot julkaistaan klo 15</p>}
        </div>
    )
}

export default TimePicker;  