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
import song1010 from '../../assets/audio/song1010.mp3';
import song1011 from '../../assets/audio/song1011.mp3';
import song1012 from '../../assets/audio/song1012.mp3';
import song1013 from '../../assets/audio/song1013.mp3';
import song1014 from '../../assets/audio/song1014.mp3';
import song1015 from '../../assets/audio/song1015.mp3';
import song1016 from '../../assets/audio/song1016.mp3';
import song1017 from '../../assets/audio/song1017.mp3';
import song1018 from '../../assets/audio/song1018.mp3';
import song1019 from '../../assets/audio/song1019.mp3';
import song1020 from '../../assets/audio/song1020.mp3';
import song1021 from '../../assets/audio/song1021.mp3';
import song1022 from '../../assets/audio/song1022.mp3';
import song1023 from '../../assets/audio/song1023.mp3';
import song1024 from '../../assets/audio/song1024.mp3';
import song1025 from '../../assets/audio/song1025.mp3';
import song1026 from '../../assets/audio/song1026.mp3';
import song1027 from '../../assets/audio/song1027.mp3';
import song1028 from '../../assets/audio/song1028.mp3';
import song1029 from '../../assets/audio/song1029.mp3';
import song1030 from '../../assets/audio/song1030.mp3';
import song1031 from '../../assets/audio/song1031.mp3';
import song1032 from '../../assets/audio/song1032.mp3';
import song1033 from '../../assets/audio/song1033.mp3';
import song1034 from '../../assets/audio/song1034.mp3';
import song1035 from '../../assets/audio/song1035.mp3';
import song1036 from '../../assets/audio/song1036.mp3';
import song1037 from '../../assets/audio/song1037.mp3';
import song1038 from '../../assets/audio/song1038.mp3';
import song1039 from '../../assets/audio/song1039.mp3';
import song1040 from '../../assets/audio/song1040.mp3';
import song1041 from '../../assets/audio/song1041.mp3';
import song1042 from '../../assets/audio/song1042.mp3';
import song1043 from '../../assets/audio/song1043.mp3';
import song1044 from '../../assets/audio/song1044.mp3';
import song1045 from '../../assets/audio/song1045.mp3';
import song1046 from '../../assets/audio/song1046.mp3';
import song1047 from '../../assets/audio/song1047.mp3';
import song1048 from '../../assets/audio/song1048.mp3';
import song1049 from '../../assets/audio/song1049.mp3';


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
    { id: 11, title: 'Song 11', artist: 'Artist 11', url: song1010 },
    { id: 12, title: 'Song 12', artist: 'Artist 12', url: song1011 },
    { id: 13, title: 'Song 13', artist: 'Artist 13', url: song1012 },
    { id: 14, title: 'Song 14', artist: 'Artist 14', url: song1013 },
    { id: 15, title: 'Song 15', artist: 'Artist 15', url: song1014 },
    { id: 16, title: 'Song 16', artist: 'Artist 16', url: song1015 },
    { id: 17, title: 'Song 17', artist: 'Artist 17', url: song1016 },
    { id: 18, title: 'Song 18', artist: 'Artist 18', url: song1017 },
    { id: 19, title: 'Song 19', artist: 'Artist 19', url: song1018 },
    { id: 20, title: 'Song 20', artist: 'Artist 20', url: song1019 },
    { id: 21, title: 'Song 21', artist: 'Artist 21', url: song1020 },
    { id: 22, title: 'Song 22', artist: 'Artist 22', url: song1021 },
    { id: 23, title: 'Song 23', artist: 'Artist 23', url: song1022 },
    { id: 24, title: 'Song 24', artist: 'Artist 24', url: song1023 },
    { id: 25, title: 'Song 25', artist: 'Artist 25', url: song1024 },
    { id:	26, title: 'Song 26', artist: 'Artist	26', url: song1025 },
    { id:	27, title: 'Song 27', artist: 'Artist	27', url: song1026 },
    { id:	28, title: 'Song 28', artist: 'Artist	28', url: song1027 },
    { id:	29, title: 'Song 29', artist: 'Artist	29', url: song1028 },
    { id:	30, title: 'Song 30', artist: 'Artist	30', url: song1029 },
    { id:	31, title: 'Song 31', artist: 'Artist	31', url: song1030 },
    { id:	32, title: 'Song 32', artist: 'Artist	32', url: song1031 },
    { id:	33, title: 'Song 33', artist: 'Artist	33', url: song1032 },
    { id:	34, title: 'Song 34', artist: 'Artist	34', url: song1033 },
    { id:	35, title: 'Song 35', artist: 'Artist	35', url: song1034 },
    { id:	36, title: 'Song 36', artist: 'Artist	36', url: song1035 },
    { id:	37, title: 'Song 37', artist: 'Artist	37', url: song1036 },
    { id:	38, title: 'Song 38', artist: 'Artist	38', url: song1037 },
    { id:	39, title: 'Song 39', artist: 'Artist	39', url: song1038 },
    { id:	40, title: 'Song 40', artist: 'Artist	40', url: song1039 },
    { id:	41, title: 'Song 41', artist: 'Artist	41', url: song1040 },
    { id:	42, title: 'Song 42', artist: 'Artist	42', url: song1041 },
    { id:	43, title: 'Song 43', artist: 'Artist	43', url: song1042 },
    { id:	44, title: 'Song 44', artist: 'Artist	44', url: song1043 },
    { id:	45, title: 'Song 45', artist: 'Artist	45', url: song1044 },
    { id:	46, title: 'Song 46', artist: 'Artist	46', url: song1045 },
    { id:	47, title: 'Song 47', artist: 'Artist	47', url: song1046 },
    { id:	48, title: 'Song 48', artist: 'Artist	48', url: song1047 },
    { id:	49, title: 'Song 49', artist: 'Artist	49', url: song1048 },
    { id:	50, title: 'Song 50', artist: 'Artist	50', url: song1049 },

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
          <div className={`rotate-cd-circle ${isPlaying ? "rotate_continue" : ""}`}>
            <div className='line-rotate'></div>
          </div>
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
