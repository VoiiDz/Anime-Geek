import axios from '../axios';
import React, { useEffect, useState, useRef } from 'react';
import "../Styles/Row.css";

function Row({ fetchUrl, title }) {
    const [animes, setAnimes] = useState([]);
    const ref = useRef();

    useEffect(() => {
        const fetchData = async () => {
            const request = await axios.get(fetchUrl);
            setAnimes(request.data.top.slice(0, 20));
        }
        fetchData();
    }, []);

    const handleScroll = () => {
        ref.current.scrollLeft += 20;
    }

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row-container">
                <div className="btn btn-left" onClick={handleScroll}>
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
                <div className="btn btn-right" onClick={handleScroll}>
                    <img src="../right-arrow.svg" alt=""/>
                </div>
            </div>
            
        </div>
    )
}

export default Row
