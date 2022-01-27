import { Route, Switch } from 'react-router-dom';
import { useEffect, React } from 'react';
import Home from "./pages/Home";
import Login from './pages/Login';
import Register from './pages/Register';
import Alert from './components/Alert';
import Dashboard from './pages/Dashboard';
import CreateProfile from './components/profile-forms/CreateProfile'
import PrivateRoute from './components/routing/PrivateRoute';
//Redux
import { Provider } from 'react-redux';
import store from './store'
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

if(localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {

  useEffect(() =>{
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <div className="App">
        <Alert />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <PrivateRoute exact path='/dashboard' component={Dashboard} />
          <PrivateRoute exact path='/create-profile' component={CreateProfile} />
        </Switch>
      </div>
    </Provider>
  )
}

export default App