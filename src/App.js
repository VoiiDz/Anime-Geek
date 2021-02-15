import './App.css';
import Row from './components/Row';
import requests from './requests';

function App() {
  return (
    <div className="App">
      <Row title="TOP Animes" fetchUrl={requests.getTopRated} />
      <Row title="Upcoming Animes" fetchUrl={requests.getUpcoming} />
      <Row title="Action Animes" fetchUrl={requests.getActionAn} />
      <Row title="Horror Animes" fetchUrl={requests.getHorrorAn} />
      <Row title="Adventure Animes" fetchUrl={requests.getAdvAn} />
      <Row title="Comedy Animes" fetchUrl={requests.getComedyAn} />
    </div>
  );
}

export default App;
