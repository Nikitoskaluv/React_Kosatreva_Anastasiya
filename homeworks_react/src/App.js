import './App.css';

import Layout from './components/Layout';
import Chats from './routes/Chats/Chats';
import Home from './routes/Home/Home';
import NotFound from './routes/NotFound/NotFound';
import Profile from './routes/Profile/Profile';


import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';




const App = () => {


  return (
    <Layout>
      <Switch>
        <Route component={Profile} path="/profile" />
        <Route component={Home} exact path="/" />
        <Route component={Chats} path="/chats" ></Route>
        <Route component={NotFound} path="*" />
      </Switch>
    </Layout>
  )
}

export default App;
















