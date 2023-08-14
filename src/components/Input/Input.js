import React from 'react';
import './Input.scss';

function Input({ lable, setValue, placeHolder }) {
    return (
        <div className="input-wrapper">
            <lable className="input-lable">{lable}</lable>
            <input
                type="text"
                className="input-box"
                placeholder={placeHolder}
            />
        </div>
    );
}

export default Input;
