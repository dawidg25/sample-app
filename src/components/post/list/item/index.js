import React from 'react';

export default function PostItem(props) {
    return (
        <div className='item' data-id={props.id}>
            <h3>{props.title}</h3>
        </div>
    )
}