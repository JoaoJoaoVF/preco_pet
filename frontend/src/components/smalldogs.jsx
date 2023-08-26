import React, { useState } from "react";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Smalldogs({ setQtdPequenos }) {
    const [errorMessage, setErrorMessage] = useState(""); 

    const handleQtdPequenosChange = (event) => {
        const inputValue = parseInt(event.target.value, 10);
        if (inputValue < 0) {
            setErrorMessage("Somente valores positivos são aceitos.");
        } else {
            setErrorMessage("");
            setQtdPequenos(inputValue);
        }
    };

    return (
        <div>
            <div className="input-group mb-3">
                <div className="input-group-prepend"></div>
                <input
                    type="number"
                    className="form-control"
                    aria-label="Amount"
                    placeholder="Quantidade de cães pequenos"
                    onChange={handleQtdPequenosChange}
                />
            </div>
            {errorMessage && <p className="text-danger">{errorMessage}</p>}
        </div>
    );
}

export default Smalldogs;
