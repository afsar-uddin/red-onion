import './App.css';
import Header from './components/shared/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import ItemsNav from './components/Home/ItemsNav/ItemsNav';
import BreakfastItems from './components/Home/ItemsProducts/BreakfastItems';
import LunchItems from './components/Home/ItemsProducts/LunchItems';
import DinnerItems from './components/Home/ItemsProducts/DinnerItems';
import NotFound from './components/NotFound/NotFound';


function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <ItemsNav></ItemsNav>
        <Switch>
          <Route exact path="/">
            <BreakfastItems></BreakfastItems>
          </Route>
          <Route path="/breakfast">
            <BreakfastItems></BreakfastItems>
          </Route>
          <Route path="/lunch">
            <LunchItems></LunchItems>
          </Route>
          <Route path="/dinner">
            <DinnerItems></DinnerItems>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
