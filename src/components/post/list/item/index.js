import React from 'react';
import axios from 'axios';
import './style.scss';

export default function PostItem(props) {
    function clickHandler(e) {
        const id = e.currentTarget.dataset.id;
        console.log(id);
    }

    return (
        <div className='item' data-id={props.id} onClick={e => clickHandler(e)}>
            <span className='lp'>{props.id}.</span><h3>{props.title}</h3>
        </div>
    )
}