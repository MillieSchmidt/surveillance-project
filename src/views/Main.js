import React from 'react';
import Header from '../components/Header';
import Home from './Home';
import Posts from './Posts';
import Post from './Post';
import About from './About';
import Footer from '../components/Footer';
import { Switch, Route } from 'react-router-dom';

const Main = () => {

  return (
    <div>
        <Header />
        <Switch>
            <Route exact path='/'>
              <Home />
            </Route>

            <Route path='/posts'>
              <Posts />
            </Route>

            <Route path='/post/:id'>
              <Post />
            </Route>

            <Route path='/about'>
              <About />
            </Route>
        </Switch>
        <Footer />
    </div>
  )
}

export default Main;