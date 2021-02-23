import React, { useEffect } from 'react'

function Description({ anime }) {

    const genres = anime.genres.map(ele => ele.name).join(' - ');

    return (
        <div className="desc">
            <div className="first-row">
                <h3>{anime.title}</h3>
                <img src={anime.image_url} />
            </div>
            <div className="second-row">
                <div>{anime.score}</div>
                <div>{anime.status}</div>
                <div>{anime.episodes}</div>
                <div>{genres}</div>
                <p>{anime.synopsis}</p>
            </div>
        </div>
    )
}

export default Description
