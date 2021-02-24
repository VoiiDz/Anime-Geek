import React, { useState, useEffect, useRef } from 'react';
import Row from './Row';
import requests from '../requests';
import axios from '../axios';
import '../Styles/Manga.css';
import useSmoothScroll from 'react-smooth-scroll-hook';
import MangaDesc from './MangaDesc';

function Manga() {
    const [mangas, setMangas] = useState([]);
    const [mangaDesc, setMangaDesc] = useState({});
    const [isClicked, setIsClicked] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const fetchData = async () => {
            const request = await axios.get(requests.getTopManga);
            setMangas(request.data.top);
        }
        fetchData();
    }, []);

    const { scrollTo } = useSmoothScroll({
        ref,
        speed: 50,
        direction: 'x'
    });

    const unClick = () => {
        setIsClicked(false);
        setMangaDesc({});
    }

    const handleClick = (manga) => {
        const fetchData = async () => {
            const request = await axios.get(`/manga/${manga.mal_id}`);
            setMangaDesc({
                score: request.data.score,
                genres: request.data.genres.map(ele => ele.name).join(' - '),
                synopsis: request.data.synopsis,
                chapters: request.data.chapters,
                status: request.data.status,
                image_url: request.data.image_url
            });
            console.log(request.data)
            return request;
        }

        let req = fetchData();
        if (req) {
            setIsClicked(prev => !prev);
        }
    }

    return (
        <div>
            <div className="mn-container">
                <h2>Top Ranked Manga</h2>
                <div className="btn btn-left" onClick={() => {scrollTo(-700); unClick();}}>
                    <img src="../left-arrow.svg" alt=""/>
                </div>
                <div className="mn-scroll-container" ref={ref}>
                {mangas.map((manga) => 
                    <div key={manga.mal_id} className="mn-div">
                        <img 
                            onClick={() => handleClick(manga)}
                            className="mn-img"
                            src={manga.image_url} 
                            alt={manga.title} 
                        />
                        <div className="mn-desc">
                            <h3>{manga.title}</h3>
                            <h5>Rank {manga.rank}#</h5>
                        </div>
                    </div>
                )}
                </div>
                <div className="btn btn-right" onClick={() => {scrollTo(700); unClick();}}>
                    <img src="../right-arrow.svg" alt=""/>
                </div>
            </div>
            { (isClicked && mangaDesc.score) ? <MangaDesc mangaDesc={mangaDesc} /> : <div></div> }
        </div>
    )
}

export default Manga
