import { HomePage, ShopPage } from "./pages";
import { Header } from "./components";
import { Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
        <Header />
        <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/shop' component={ShopPage} />
        </Switch>
    </div>
  );
}

export default App;
