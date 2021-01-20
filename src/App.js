import { HomePage, ShopPage, SignInAndSignUp } from "./pages";
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
            <Route path='/signin' component={SignInAndSignUp} />
        </Switch>
    </div>
  );
}

export default App;
