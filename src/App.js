import './App.css';
import Row from './components/Row';
import requests from './requests';

function App() {
  return (
    <div className="App">
      <Row fetchUrl={requests.getTopRated} />
    </div>
  );
}

export default App;
