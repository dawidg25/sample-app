import React, {useEffect, useState} from 'react';
import axios from 'axios';
import PostItem from './item';

export default function PostList() {
    const [collection, setCollection] = useState(0);
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios('/posts')
            setCollection(result.data.collection);
        };
        
        fetchData();
    }, []);

    return (
        <div className='list'>
            {collection ?
                collection.map((item, index) => <PostItem key={index} id={item.id} title={item.title}/>)
            :
                'loading...'
            }
        </div>
    )
}