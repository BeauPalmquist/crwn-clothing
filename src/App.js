import { useState, useEffect } from 'react';
import { HomePage, ShopPage, SignInAndSignUp } from "./pages";
import { Header } from "./components";
import { Route, Switch } from 'react-router-dom';
import { auth } from './firebase/firebase.utils';
import './App.css';

const App = () => {
    const [currentUser, updateCurrentUser] = useState(null);

    useEffect(() => {
        const unsubscribeFromAuth = auth.onAuthStateChanged(user => {
            updateCurrentUser(user);
            return () => unsubscribeFromAuth();
        });
    }, []);

    return (
        <div>
            <Header currentUser={currentUser} />
            <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route path='/shop' component={ShopPage}/>
                <Route path='/signin' component={SignInAndSignUp}/>
            </Switch>
        </div>
    )
};

export default App;
