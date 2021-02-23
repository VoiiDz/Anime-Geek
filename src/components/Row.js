import axios from '../axios';
import React, { useEffect, useState, useRef } from 'react';
import useSmoothScroll from 'react-smooth-scroll-hook';
import "../Styles/Row.css";
import Description from './Description';

function Row({ fetchUrl, title }) {
    const [animes, setAnimes] = useState([]);
    const [anime, setAnime] = useState({});
    const [isClicked, setIsClicked] = useState(false);
    const ref = useRef();
    //const animeUrl = 'https://api.jikan.moe/v3/anime/';

    useEffect(() => {
        const fetchData = async () => {
            const request = await axios.get(fetchUrl);
            setAnimes(request.data.top?.slice(0, 20) || request.data.anime?.slice(0, 20));
        }
        fetchData();
    }, []);

    const { scrollTo } = useSmoothScroll({
        ref,
        speed: 50,
        direction: 'x'
    });

    const handleClick = (anime) => {
        const fetchData = async () => {
            const request = await axios.get(`/anime/${anime.mal_id}`);
            setAnime({
                title: request.data.title,
                score: request.data.score,
                genres: request.data.genres,
                synopsis: request.data.synopsis,
                episodes: request.data.episodes,
                status: request.data.status,
                image_url: request.data.image_url,
                trailer_url: request.data.trailer_url
            });
            return request;
            
        }
        setIsClicked((prev) => !prev);
        
        if (isClicked) {
            fetchData();
        }
    };

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row-container">
                <div className="btn btn-left" onClick={() => scrollTo(-1000)}>
                    <img src="../left-arrow.svg" alt=""/>
                </div>
                <div className="row-imgs" ref={ref}>
                    {animes.map((anime, i) => 
                        <img 
                            onClick={() => handleClick(anime)}
                            className="row-img"
                            key={anime.mal_id}
                            src={anime.image_url} 
                            alt={anime.title} 
                        />
                    )}
                </div>
                <div className="btn btn-right" onClick={() => scrollTo(1000)}>
                    <img src="../right-arrow.svg" alt=""/>
                </div>
            </div>
            { (isClicked && anime.title) ? <Description anime={anime} /> : <div></div> }
        </div>
    )
}

export default Row
