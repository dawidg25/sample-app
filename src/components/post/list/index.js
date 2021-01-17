import React, {useEffect, useState} from 'react';
import axios from 'axios';
import PostItem from './item';
import PostPagination from './pagination';

export default function PostList() {
    const [collection, setCollection] = useState(0);
    const [data, setData] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios('/posts')
            setData(result.data);
            setCollection(result.data.collection);
        };
        
        fetchData();
    }, []);

    if (!collection) {
        return 'loading...'
    }

    return (
        <div className='list'>
            {collection.map((item, index) => <PostItem key={index} id={item.id} title={item.title}/>)}
            <PostPagination page={data.page} limit={data.limit} count={data.count} collectionSetter={setCollection} dataSetter={setData}/>
        </div>
    )
}