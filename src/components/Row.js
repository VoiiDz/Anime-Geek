import axios from '../axios';
import React, { useEffect, useState, useRef } from 'react';
import "../Styles/Row.css";

function Row({ fetchUrl, title }) {
    const [animes, setAnimes] = useState([]);
    const ref = useRef();

    useEffect(() => {
        const fetchData = async () => {
            const request = await axios.get(fetchUrl);
            setAnimes(request.data.top?.slice(0, 20) || request.data.anime?.slice(0, 20));
        }
        fetchData();
    }, []);

    const handleScroll = (offset) => {
        ref.current.scrollLeft += offset;
    }

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row-container">
                <div className="btn btn-left" onClick={() => handleScroll(-100)}>
                    <img src="../left-arrow.svg" alt=""/>
                </div>
                <div className="row-imgs" ref={ref}>
                    {animes.map(anime => 
                        <img 
                            className="row-img"
                            key={anime.mal_id}
                            src={anime.image_url} 
                            alt={anime.title} 
                        />
                    )}
                </div>
                <div className="btn btn-right" onClick={() => handleScroll(100)}>
                    <img src="../right-arrow.svg" alt=""/>
                </div>
            </div>
            
        </div>
    )
}

export default Row
