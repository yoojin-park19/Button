import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomeIndexPage from './pages/home';
import MainIndexPage from './pages/main';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomeIndexPage} />
          <Route path="/main" exact component={MainIndexPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
