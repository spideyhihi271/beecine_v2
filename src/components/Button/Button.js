import React from 'react';
import { Link } from 'react-router-dom';

import './Button.scss';

function Button({
    children,
    href,
    to,
    type,
    size,
    leftImage,
    leftIcon,
    rightIcon,
    notify,
    onClick,
    ...passprop
}) {
    // Check type
    let Comp = 'button';
    let props = { onClick, passprop };
    if (href) {
        props.href = href;
        props.target = 'blank';
        Comp = 'a';
    } else if (to) {
        props.to = to;
        Comp = Link;
    }
    return (
        <Comp className={`btn-wrapper ${type} ${size}`} {...props}>
            {notify && (
                <span className="btn-notify">
                    <i className="fa-solid fa-circle"></i>
                </span>
            )}
            {leftImage && <img className="btn-image" src={leftImage} alt="" />}
            {leftIcon && <span className="btn-icon">{leftIcon}</span>}
            <span className="btn-content">{children}</span>
            {rightIcon && <span className="btn-icon">{rightIcon}</span>}
        </Comp>
    );
}

export default Button;
