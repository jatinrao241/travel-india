import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import MusicPlaylist from './components/MusicPlaylist/MusicPlaylist';
import DownloadedMusic from './components/DownloadedMusic/DownloadedMusic';
import InstallAppButton from './components/InstallAppButton/InstallAppButton';

const App = () => {
  return (
    <>
      <Navbar />
      <InstallAppButton />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/musicplaylist" component={MusicPlaylist} />
        <Route path="/downloadedmusic" component={DownloadedMusic} />
        <Route path="*" component={Home} />
      </Switch>
    </>
  );
};

export default App;
