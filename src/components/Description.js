import React, { useState } from 'react'
import '../Styles/Description.css';
import Youtube from 'react-youtube';

function Description({ anime }) {
    const [animeUrl, setAnimeUrl] = useState('');
    const genres = anime.genres.map(ele => ele.name).join(' - ');
    
    const opts = {
        height: "300px",
        width: "100%",
        playerVars: {
            autoplay: 1
        }
    }

    const youTubeGetID = (url) => {
        var ID = '';
        if (url) {
            url = url.replace(/(>|<)/gi,'').split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
            if(url[2] !== undefined) {
                ID = url[2].split(/[^0-9a-z_\-]/i);
                ID = ID[0];
            }
            else {
                ID = url;
            }
            return ID;
        }
    }

    const handleClick = () => {
        if (animeUrl) {
            setAnimeUrl('');
        } else {
            setAnimeUrl(youTubeGetID(anime?.trailer_url));
        }
    }

    return (
        <div className="desc">
            <h3>{anime.title}</h3>
            <div className="desc-container">
                
                <div className="first-row">
                    <img src={anime.image_url} />
                </div>
                <div className="second-row">
                    <div>
                        <div className="score">{anime.score ? anime.score : 'N/A'}</div>
                    </div>
                    <div>
                        <div><span>Status: </span>{anime.status ? anime.status : 'N/A'}</div>
                        <div><span>Episodes:</span> {anime.episodes ? anime.episodes : 'N/A'}</div>
                        <div><span>Genres: </span>{genres}</div>
                    </div>
                    <p><span>Story: </span>{anime.synopsis ? anime.synopsis : 'N/A'}</p>
                    <button onClick={() => handleClick()}>Watch Trailer</button>
                    { animeUrl && <Youtube videoId={animeUrl} opts={opts} /> }
                </div>
            </div>
        </div>
    )
}

export default Description
