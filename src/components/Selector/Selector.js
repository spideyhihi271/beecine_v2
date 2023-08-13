import React, { useState } from 'react';
import './Selector.scss';
function Selector({ filters }) {
    const [selected, setSelected] = useState(filters[0]);
    const [showChange, setShowChange] = useState(false);
    const handleChangeSelect = (item) => {
        setSelected(item);
        setShowChange(false);
    };
    return (
        <div className="selector-wrapper">
            <div className="selector-main">
                <div
                    className="selector-lable"
                    onClick={() => setShowChange(!showChange)}
                >
                    <p>{selected}</p>
                    <i className="fa-regular fa-angle-down"></i>
                </div>
            </div>
            {showChange && (
                <ul className="selector-list">
                    {filters.map((item, idx) => (
                        <li
                            className="selector-item"
                            key={idx}
                            onClick={() => handleChangeSelect(item)}
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Selector;
