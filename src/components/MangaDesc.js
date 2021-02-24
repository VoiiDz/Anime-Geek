import React from 'react'

function MangaDesc({ mangaDesc }) {
    return (
        <div>
            <div className="mgDesc-container">
                <div className="mgSecond-row">
                    <div>
                        <div className="mg-score">{mangaDesc.score ? mangaDesc.score : 'N/A'}</div>
                    </div>
                    <div>
                        <div><span>Status: </span>{mangaDesc.status ? mangaDesc.status : 'N/A'}</div>
                        <div><span>Chapters:</span> {mangaDesc.chapters ? mangaDesc.chapters : 'N/A'}</div>
                        <div><span>Genres: </span>{mangaDesc.genres}</div>
                    </div>
                    <p><span>Story: </span>{mangaDesc.synopsis ? mangaDesc.synopsis : 'N/A'}</p>
                </div>
            </div>
        </div>
    )
}

export default MangaDesc
