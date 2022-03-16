import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomeIndexPage from './pages/home';
import TestIndex from './test/test.jsx';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomeIndexPage} />
          <Route path="/test" exact component={TestIndex} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
