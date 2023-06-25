import React, { useState, useEffect, useRef, useCallback } from 'react';
import './DownloadedMusicStyle.css';

const DownloadedMusic = () => {
  const [songs, setSongs] = useState([]);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const [isAudioLoaded, setIsAudioLoaded] = useState(false);

  useEffect(() => {
    const storedSongs = JSON.parse(localStorage.getItem('downloadedSongs')) || [];
    setSongs(storedSongs);
  }, []);

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
  }, [currentSongIndex, songs]);

  useEffect(() => {
    const handleEnded = () => {
      playNextSong();
    };

    if (audioRef.current) {
      audioRef.current.addEventListener('ended', handleEnded);
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener('ended', handleEnded);
      }
    };
  }, [playNextSong]);

  useEffect(() => {
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
  }, [currentSongIndex, songs]);

  const handleCanPlayThrough = () => {
    setIsAudioLoaded(true);
    if (isPlaying) {
      audioRef.current.play();
    }
  };

  const handleFileSelect = (e) => {
    const files = e.target.files;
    const updatedSongs = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const song = {
        title: file.name,
        artist: '',
        file: URL.createObjectURL(file),
      };
      updatedSongs.push(song);
    }

    setSongs([...songs, ...updatedSongs]);
  };

  useEffect(() => {
    localStorage.setItem('downloadedSongs', JSON.stringify(songs));
  }, [songs]);

  const currentSong = songs[currentSongIndex] || { title: '', artist: '', file: '' };

  return (
    <div className='container-fluid downloaded-starting-div'>
      <h1>My Downloaded Music Playlist</h1>
      <div>
        <h3>{currentSong.title}</h3>
        <p>{currentSong.artist}</p>
        <div className='rotate-box-center'>
          <div className={`rotate-cd-circle ${isPlaying ? 'rotate_continue' : ''}`}>
            <div className='line-rotate'></div>
          </div>
        </div>
        <audio
          ref={audioRef}
          controls
          onCanPlayThrough={handleCanPlayThrough}
          src={currentSong.file}
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
        <div className='select-music-input'>
          <input type='file' multiple onChange={handleFileSelect} />
        </div>
      </div>
    </div>
  );
};

export default DownloadedMusic;
