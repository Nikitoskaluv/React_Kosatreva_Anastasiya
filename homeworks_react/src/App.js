import './App.css';


import Layout from './components/Layout';
import Chats from './routes/Chats/Chats';
import Home from './routes/Home/Home';
import NotFound from './routes/NotFound/NotFound';
import { Profile } from './routes/Profile/Profile';
import { SignUp } from './routes/SignUp/SignUp';
import { LogIn } from './routes/LogIn/LogIn';

import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { NewsComponentContainer } from './components/NewsContainer';

import { useSelector } from 'react-redux';

import PublicRoute from './hocs/PublicRoute';
import PrivateRoute from './hocs/PrivateRoute';
import { getUser } from './store/profile/selectors';

const App = () => {
  
  let user = useSelector(getUser);
  const authed = user != null;

  // useEffect(() => {
  //   auth.onAuthStateChanged((user) => {
  //     if (user) {
  //       setAuthed(true);

  //     } else {
  //       setAuthed(false);
  //     }
  //   })
  // }, []);

  return (
    <Layout>
      <Switch>
        <PublicRoute authenticated={authed} exact path="/">
          <Home />
        </PublicRoute>
        <PublicRoute authenticated={authed} path="/login">
          <LogIn />
        </PublicRoute>
        <PublicRoute authenticated={authed} path="/signup">
          <SignUp />
        </PublicRoute>
        <PrivateRoute authenticated={authed} path="/chats">
          <Chats />
        </PrivateRoute>
        <PrivateRoute authenticated={authed} path="/profile">
          <Profile />
        </PrivateRoute>
        <PublicRoute authenticated={authed} path="/news">
          <NewsComponentContainer />
        </PublicRoute>
        <Route component={NotFound} path="*" />

      </Switch>
    </Layout>
  )
}

export default App;
















