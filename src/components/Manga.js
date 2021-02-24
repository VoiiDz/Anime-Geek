import React, { useState, useEffect } from 'react';
import Row from './Row';
import requests from '../requests';
import axios from '../axios';

function Manga() {
    const [mangas, setMangas] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const request = await axios.get(requests.getTopManga);
            setMangas(request.data.top);
        }
        fetchData();
    }, []);

    return (
        <div>
            {mangas.map(manga => 
                <img 
                    className="mn-img"
                    key={manga.mal_id}
                    src={manga.image_url} 
                    alt={manga.title} 
                />
            )}
        </div>
    )
}

export default Manga
