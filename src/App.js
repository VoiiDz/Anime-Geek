import './App.css';
import Animes from './components/Animes';
import Manga from './components/Manga';
import Nav from './components/Nav';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route exact path="/" >
          <Redirect to="/animes" />
        </Route>
        <Route path="/animes" component={Animes} />
        <Route path="/manga" component={Manga} />
      </div>
    </Router>
  );
}

export default App;
