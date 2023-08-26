import React, { useState } from "react";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function LargeDogs({ setQtdGrandes }) {
    const [errorMessage, setErrorMessage] = useState(""); 

    const handleQtdGrandesChange = (event) => {
        const inputValue = parseInt(event.target.value, 10); 
        if (inputValue < 0) {
            setErrorMessage("Somente valores positivos são aceitos.");
        } else {
            setErrorMessage("");
            setQtdGrandes(inputValue);
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
                    placeholder="Quantidade de cães grandes"
                    onChange={handleQtdGrandesChange}
                />
            </div>
            {errorMessage && <p className="text-danger">{errorMessage}</p>}
        </div>
    );
}

export default LargeDogs;
