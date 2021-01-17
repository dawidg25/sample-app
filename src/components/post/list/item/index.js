import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './style.scss';

import PostEdit from '../../edit';

export default function PostItem(props) {
    const [showModal, setShowModal] = useState(0);
    const [postData, setPostData] = useState(0);
    function clickHandler(e) {
        const id = e.currentTarget.dataset.id;
        axios.get(`/posts/${id}`).then(res => {
            setPostData(res.data.document[0]);
            setShowModal(true);
        });
    }

    return (
        <React.Fragment>
            <div className='item' data-id={props.id} onClick={e => clickHandler(e)}>
                <span className='lp'>{props.id}.</span><h3>{props.title}</h3>
            </div>
            {showModal ? <PostEdit showSetter={setShowModal} postData={postData}/> : null}
        </React.Fragment>
    )
}