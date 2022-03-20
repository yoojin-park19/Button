import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomeIndexPage from './pages/home';
import MainIndexPage from './pages/main';
import ResultIndexPage from './pages/result';
import TestIndexPage from './pages/test';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomeIndexPage} />
          <Route path="/main" exact component={MainIndexPage} />
          <Route path="/result" exact component={ResultIndexPage} />
          <Route path="/test" exact component={TestIndexPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
