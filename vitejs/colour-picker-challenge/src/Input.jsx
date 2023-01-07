import React from 'react';

const Input = ({colorValue, setColorValue}) => {
    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault()
            }}>
                <label htmlFor="colorPicker">Set colour name:</label>
                <input
                    name="colorPicker"
                    autoFocus
                    type="text"
                    placeholder="Set color name"
                    required
                    value={colorValue}
                    onChange={(e) => {
                        setColorValue(e.target.value)
                    }}
                />
            </form>
        </div>
    );
};

export default Input;