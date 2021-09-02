import {
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';
import InstructionPage from './pages/instruction';
import MainPage from './pages/main';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={InstructionPage} />
        <Route exact path="/form" component={MainPage} />
        <Route exact path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
