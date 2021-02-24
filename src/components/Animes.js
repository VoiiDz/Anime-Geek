import React from 'react';
import Row from './Row';
import requests from '../requests';

function Animes() {
    return (
        <div>
            <Row title="TOP Animes" fetchUrl={requests.getTopRated} />
            <Row title="Upcoming Animes" fetchUrl={requests.getUpcoming} />
            <Row title="Action Animes" fetchUrl={requests.getActionAn} />
            <Row title="Horror Animes" fetchUrl={requests.getHorrorAn} />
            <Row title="Adventure Animes" fetchUrl={requests.getAdvAn} />
            <Row title="Comedy Animes" fetchUrl={requests.getComedyAn} />
        </div>
    )
}

export default Animes
