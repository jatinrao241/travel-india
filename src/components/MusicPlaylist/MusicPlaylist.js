import React, { useState, useEffect, useRef, useCallback } from 'react';
import './MusicPlaylistStyle.css';
import song1000 from '../../assets/audio/song1000.mp3';
import song1001 from '../../assets/audio/song1001.mp3';
import song1002 from '../../assets/audio/song1002.mp3';
import song1003 from '../../assets/audio/song1003.mp3';
import song1004 from '../../assets/audio/song1004.mp3';
import song1005 from '../../assets/audio/song1005.mp3';
import song1006 from '../../assets/audio/song1006.mp3';
import song1007 from '../../assets/audio/song1007.mp3';
import song1008 from '../../assets/audio/song1008.mp3';
import song1009 from '../../assets/audio/song1009.mp3';

const MusicPlaylist = () => {
  const songs = [
    { id: 1, title: 'Song 1', artist: 'Artist 1', url: song1000 },
    { id: 2, title: 'Song 2', artist: 'Artist 2', url: song1001 },
    { id: 3, title: 'Song 3', artist: 'Artist 3', url: song1002 },
    { id: 4, title: 'Song 4', artist: 'Artist 4', url: song1003 },
    { id: 5, title: 'Song 5', artist: 'Artist 5', url: song1004 },
    { id: 6, title: 'Song 6', artist: 'Artist 6', url: song1005 },
    { id: 7, title: 'Song 7', artist: 'Artist 7', url: song1006 },
    { id: 8, title: 'Song 8', artist: 'Artist 8', url: song1007 },
    { id: 9, title: 'Song 9', artist: 'Artist 9', url: song1008 },
    { id: 10, title: 'Song 10', artist: 'Artist 10', url: song1009 },
    // Add more songs as needed
  ];

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const [isAudioLoaded, setIsAudioLoaded] = useState(false);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  const playNextSong = useCallback(() => {
    const nextIndex = currentSongIndex === songs.length - 1 ? 0 : currentSongIndex + 1;
    setCurrentSongIndex(nextIndex);
    setIsPlaying(true);
  }, [currentSongIndex, songs.length]);

  const handleEnded = () => {
    playNextSong();
  };

  useEffect(() => {
    audioRef.current.addEventListener('ended', handleEnded);

    return () => {
      audioRef.current.removeEventListener('ended', handleEnded);
    };
  }, [handleEnded]);

  useEffect(() => {
    // Pause the audio and reset the current song index when navigating away
    return () => {
      setIsPlaying(false);
      setCurrentSongIndex(0);
    };
  }, []);

  const playSong = () => {
    setIsPlaying(true);
  };

  const pauseSong = () => {
    setIsPlaying(false);
  };

  const playPreviousSong = useCallback(() => {
    const previousIndex = currentSongIndex === 0 ? songs.length - 1 : currentSongIndex - 1;
    setCurrentSongIndex(previousIndex);
    setIsPlaying(true);
  }, [currentSongIndex, songs.length]);

  const handleCanPlayThrough = () => {
    setIsAudioLoaded(true);
    if (isPlaying) {
      audioRef.current.play();
    }
  };

  const currentSong = songs[currentSongIndex];

  return (
    <div className='container-fluid musicplaylist-starting-div'>
      <h1>Music Playlist</h1>
      <div>
        <h3>{currentSong.title}</h3>
        <p>{currentSong.artist}</p>
        <div className='rotate-box-center'>
          <div className={`rotate-cd-circle ${isPlaying ? "rotate_continue" : ""}`}></div>
        </div>
        <audio
          ref={audioRef}
          controls
          onCanPlayThrough={handleCanPlayThrough}
          src={currentSong.url}
          onPlay={playSong}
          onPause={pauseSong}
        />
        <div className='music-control-button'>
          <button onClick={playPreviousSong}>Back</button>
          {isAudioLoaded && isPlaying ? (
            <button onClick={pauseSong}>Pause</button>
          ) : (
            <button onClick={playSong}>Play</button>
          )}
          <button onClick={playNextSong}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default MusicPlaylist;
