import React from 'react';
import classNames from 'classnames';

const Button = ({outline, children, onClick}) => {
    return (
        <button className={classNames('button', {
            'button--outline': outline,
        })}
        onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;