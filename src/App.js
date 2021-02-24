import './App.css';
import Animes from './components/Animes';
import Manga from './components/Manga';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <Animes />
      <Manga />
    </div>
  );
}

export default App;
