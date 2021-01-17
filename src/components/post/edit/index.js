import React from 'react';
import './style.scss';
export default function PostEdit(props) {
    function cancelHandler() {
        props.showSetter(false);
    }

    function updateHandler() {

    }
    return (
        <div className='post-edit'>
            <div className='form-wrapper'>
                <p className='heading'>Post edit #{props.postData.id}</p>
                <form>
                    <label>
                        Title:
                        <input defaultValue={props.postData.title} />
                    </label>
                    <label>
                        Content:
                        <textarea>{props.postData.body}</textarea>
                    </label>
                </form>
                <div className='action'>
                    <button className='cancel' onClick={cancelHandler}>Cancel</button>
                    <button className='update' onClick={updateHandler}>Update</button>
                </div>
            </div>
        </div>
    )
}