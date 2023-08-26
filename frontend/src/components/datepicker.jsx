import React from "react";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Datepicker({ setData }) {
    const handleDateChange = (event) => {
        setData(event.target.value);
    };

    return (
        <div className="input-group mb-3">
            <div className="input-group-prepend"></div>
            <input
                type="date"
                className="form-control"
                aria-label="Date"
                onChange={handleDateChange}
            />
        </div>
    );
}

export default Datepicker;
