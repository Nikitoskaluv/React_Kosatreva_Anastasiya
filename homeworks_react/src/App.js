import './App.css';

import { NewsComponent } from './routes/News/News';
import Layout from './components/Layout';
import Chats from './routes/Chats/Chats';
import Home from './routes/Home/Home';
import NotFound from './routes/NotFound/NotFound';
import { Profile } from './routes/Profile/Profile';

import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { NewsComponentContainer } from './components/NewsContainer';




const App = () => {

  return (
    <Layout>
      <Switch>
        <Route component={Profile} path="/profile" />
        <Route component={Home} exact path="/" />
        <Route component={Chats} path="/chats" ></Route>
        <Route component={NewsComponentContainer} path="/news" />
        <Route component={NotFound} path="*" />

      </Switch>
    </Layout>
  )
}

export default App;
















