import React from 'react';
import axios from 'axios';
import './style.scss';

export default function PostPagination(props) {
    const limit = props.limit;
    const count = props.count;
    
    const numberOfPages = Math.ceil(count / limit);
    
    function createHtml(limit, actualPage, numberOfPages) {
        let pages = [];
        
        for(let i = 1; i <= numberOfPages; i++) {
            let isActualPage = actualPage === i;
            pages.push(<SinglePage key={i} number={i} limit={limit} isActualPage={isActualPage} />);
        }

        return <nav>{pages}</nav>;
    }

    function SinglePage(props) {
        return props.isActualPage ? <span className='active'>{props.number}</span> : <span data-url={`/posts?limit=${props.limit}&page=${props.number}`} onClick={ e => clickHandler(e)}>{props.number}</span>
    }

    function clickHandler(e) {
        const url = e.target.dataset.url;

        const fetchData = async () => {
            const result = await axios(url)
            props.dataSetter(result.data);
            props.collectionSetter(result.data.collection);
        };

        fetchData();
    }

    return createHtml(limit, props.page, numberOfPages);
}