import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import MusicPlaylist from './components/MusicPlaylist/MusicPlaylist';
import Error from './components/Error/Error';

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/musicplaylist" component={MusicPlaylist} />
        <Route path="*" component={Home} />
      </Switch>
    </>
  );
};

export default App;
