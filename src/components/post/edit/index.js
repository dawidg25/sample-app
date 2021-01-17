import axios from 'axios';
import React from 'react';
import './style.scss';
export default function PostEdit(props) {
    function cancelHandler() {
        props.showSetter(false);
    }

    function updateHandler(id) {
        const updatedFields = {
            id: id,
            title: document.querySelector('input[name=title]').value,
            body: document.querySelector('textarea[name=body]').value        
        };

        axios.put(`/posts/${id}`, updatedFields).then(res => {
            if (res.data.status) {
                const updatedItem = document.querySelector(`.item[data-id='${id}']`);
                updatedItem.querySelector('h3').innerHTML = updatedFields.title;
            }
            props.showSetter(false);
        });
    }
    return (
        <div className='post-edit'>
            <div className='form-wrapper'>
                <p className='heading'>Post edit #{props.postData.id}</p>
                <form>
                    <label>
                        Title:
                        <input type='text' name='title' defaultValue={props.postData.title} />
                    </label>
                    <label>
                        Content:
                        <textarea name='body' defaultValue={props.postData.body}></textarea>
                    </label>
                </form>
                <div className='action'>
                    <button className='cancel' onClick={cancelHandler}>Cancel</button>
                    <button className='update' onClick={e => updateHandler(props.postData.id)}>Update</button>
                </div>
            </div>
        </div>
    )
}