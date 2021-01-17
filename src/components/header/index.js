import React from 'react';
import './style.scss';

export default function Header(props) {
    return (
        <header>
            <h1>{props.heading}</h1>
        </header>
    )
};
