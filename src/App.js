import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomeIndexPage from './pages/home';
import MainIndexPage from './pages/main';
import ResultIndexPage from './pages/result';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomeIndexPage} />
          <Route path="/main" exact component={MainIndexPage} />
          <Route path="/result" exact component={ResultIndexPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
