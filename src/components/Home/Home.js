import React from 'react';
import MusicPlaylist from '../MusicPlaylist/MusicPlaylist';
import "./HomeStyle.css";

const Home = () =>{
    return(
        <>
            <div className="container-fluid">
                <h1 className="text-center">Jatin Yadav Home</h1>
                <MusicPlaylist/>
            </div>   
        </>
    );
}

export default Home;
