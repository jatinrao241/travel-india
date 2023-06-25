// import React, { useState, useEffect, useRef, useCallback } from 'react';
// import './MusicPlaylistStyle.css';

// const MusicPlaylist = () => {
//   const songContext = require.context(
//     '../../assets/audio',
//     false,
//     /\.(mp3|wav|ogg|aac)$/ // Specify the audio file extensions you want to import
//   );
//   const songFiles = songContext.keys();
//   const songs = songFiles.map((file, index) => {
//     const songUrl = songContext(file);
//     const fileName = file.split('/').pop(); // Get the file name from the path
//     const [title, extension] = fileName.split('.'); // Split the file name and extension
//     const artist = title; // Set artist name same as the title
//     return { id: index + 1, title, artist, url: songUrl };
//   });

//   const [currentSongIndex, setCurrentSongIndex] = useState(0);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const audioRef = useRef(null);
//   const [isAudioLoaded, setIsAudioLoaded] = useState(false);
//   const [searchQuery, setSearchQuery] = useState('');

//   useEffect(() => {
//     if (isPlaying) {
//       audioRef.current.play();
//     } else {
//       audioRef.current.pause();
//     }
//   }, [isPlaying]);

//   const playNextSong = useCallback(() => {
//     const filteredSongs = getSongsBySearchQuery();
//     const nextIndex = currentSongIndex === filteredSongs.length - 1 ? 0 : currentSongIndex + 1;
//     setCurrentSongIndex(nextIndex);
//     setIsPlaying(true);
//   }, [currentSongIndex, searchQuery]);

//   const playPreviousSong = useCallback(() => {
//     const filteredSongs = getSongsBySearchQuery();
//     const previousIndex = currentSongIndex === 0 ? filteredSongs.length - 1 : currentSongIndex - 1;
//     setCurrentSongIndex(previousIndex);
//     setIsPlaying(true);
//   }, [currentSongIndex, searchQuery]);

//   useEffect(() => {
//     const handleEnded = () => {
//       playNextSong();
//     };

//     if (audioRef.current) {
//       audioRef.current.addEventListener('ended', handleEnded);
//     }

//     return () => {
//       if (audioRef.current) {
//         audioRef.current.removeEventListener('ended', handleEnded);
//       }
//     };
//   }, [playNextSong]);

//   useEffect(() => {
//     // Pause the audio and reset the current song index when navigating away
//     return () => {
//       setIsPlaying(false);
//       setCurrentSongIndex(0);
//     };
//   }, []);

//   const playSong = () => {
//     setIsPlaying(true);
//   };

//   const pauseSong = () => {
//     setIsPlaying(false);
//   };

//   const handleCanPlayThrough = () => {
//     setIsAudioLoaded(true);
//     if (isPlaying) {
//       audioRef.current.play();
//     }
//   };

//   const getSongsBySearchQuery = () => {
//     const filteredSongs = songs.filter((song) => {
//       const title = song.title.toLowerCase();
//       const artist = song.artist.toLowerCase();
//       const query = searchQuery.toLowerCase();
//       return title.includes(query) || artist.includes(query);
//     });

//     return filteredSongs;
//   };

//   const filteredSongs = getSongsBySearchQuery();
//   const currentSong = filteredSongs[currentSongIndex];

//   const handleSearch = (event) => {
//     setSearchQuery(event.target.value);
//   };

//   return (
//     <div className='container-fluid musicplaylist-starting-div'>
//       <h1>Music Playlist</h1>
//       <div>
//         <input type="text" value={searchQuery} onChange={handleSearch} placeholder="Search for a song" />
//         <h3>{currentSong?.title}</h3>
//         <p>{currentSong?.artist}</p>
//         <div className='rotate-box-center'>
//           <div className={`rotate-cd-circle ${isPlaying ? "rotate_continue" : ""}`}>
//             <div className='line-rotate'></div>
//           </div>
//         </div>
//         <audio
//           ref={audioRef}
//           controls
//           onCanPlayThrough={handleCanPlayThrough}
//           src={currentSong?.url}
//           onPlay={playSong}
//           onPause={pauseSong}
//         />
//         <div className='music-control-button'>
//           <button onClick={playPreviousSong}>Back</button>
//           {isAudioLoaded && isPlaying ? (
//             <button onClick={pauseSong}>Pause</button>
//           ) : (
//             <button onClick={playSong}>Play</button>
//           )}
//           <button onClick={playNextSong}>Next</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MusicPlaylist;

import React, { useState, useEffect, useRef, useCallback } from 'react';
import './MusicPlaylistStyle.css';

const MusicPlaylist = () => {
  const songContext = require.context(
    '../../assets/audio',
    false,
    /\.(mp3|wav|ogg|aac)$/ // Specify the audio file extensions you want to import
  );
  const songFiles = songContext.keys();
  const songs = songFiles.map((file, index) => {
    const songUrl = songContext(file);
    const fileName = file.split('/').pop(); // Get the file name from the path
    const [title, extension] = fileName.split('.'); // Split the file name and extension
    const artist = title; // Set artist name same as the title
    return { id: index + 1, title, artist, url: songUrl };
  });

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const [isAudioLoaded, setIsAudioLoaded] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);

  const getSongsBySearchQuery = useCallback(() => {
    const filteredSongs = songs.filter((song) => {
      const title = song.title.toLowerCase();
      const artist = song.artist.toLowerCase();
      const query = searchQuery.toLowerCase();
      return title.includes(query) || artist.includes(query);
    });

    return filteredSongs;
  }, [songs, searchQuery]);

  useEffect(() => {
    setIsPlaying(false);
  }, []);

  useEffect(() => {
    setIsPlaying(true);
  }, [currentSongIndex]);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    const storedCurrentSongIndex = localStorage.getItem('currentSongIndex');
    const storedPlaybackTime = localStorage.getItem('playbackTime');

    if (storedCurrentSongIndex !== null) {
      setCurrentSongIndex(Number(storedCurrentSongIndex));
    }
    if (storedPlaybackTime !== null && audioRef.current) {
      audioRef.current.currentTime = Number(storedPlaybackTime);
    }

    const handlePageHide = () => {
      if (audioRef.current) {
        localStorage.setItem('playbackTime', Math.floor(audioRef.current.currentTime * 1000));
      }
    };

    window.addEventListener('pagehide', handlePageHide);

    return () => {
      window.removeEventListener('pagehide', handlePageHide);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (audioRef.current) {
        localStorage.setItem('playbackTime', Math.floor(audioRef.current.currentTime * 1000));
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const playSong = () => {
    setIsPlaying(true);
  };

  const pauseSong = () => {
    setIsPlaying(false);
  };

  const handleCanPlayThrough = () => {
    setIsAudioLoaded(true);
    if (isPlaying) {
      audioRef.current.play();
    }
  };

  const handleSongSelect = (index) => {
    setCurrentSongIndex(index);
    setIsPlaying(true);
    setShowSuggestions(false);
  };

  const handleSearch = useCallback((event) => {
    setSearchQuery(event.target.value);
    setShowSuggestions(true);
    if (event.target.value === '') {
      setCurrentSongIndex(0); // Reset current song index when the search query is empty
    }
  }, []);

  const handleWindowClick = useCallback(
    (event) => {
      const suggestionContainer = document.querySelector('.suggestion-list-container');
      const inputField = document.querySelector('.search-input');

      if (
        suggestionContainer &&
        !suggestionContainer.contains(event.target) &&
        inputField !== event.target
      ) {
        setShowSuggestions(false);
      }
    },
    [setShowSuggestions]
  );

  useEffect(() => {
    window.addEventListener('click', handleWindowClick);

    return () => {
      window.removeEventListener('click', handleWindowClick);
    };
  }, [handleWindowClick]);

  const filteredSongs = getSongsBySearchQuery();
  const currentSong = filteredSongs[currentSongIndex];

  const playNextSong = useCallback(() => {
    const nextIndex = currentSongIndex === filteredSongs.length - 1 ? 0 : currentSongIndex + 1;
    setCurrentSongIndex(nextIndex);
  }, [currentSongIndex, filteredSongs]);

  const playPreviousSong = useCallback(() => {
    const previousIndex = currentSongIndex === 0 ? filteredSongs.length - 1 : currentSongIndex - 1;
    setCurrentSongIndex(previousIndex);
  }, [currentSongIndex, filteredSongs]);

  useEffect(() => {
    const handleEnded = () => {
      playNextSong();
      setIsPlaying(true);
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
    localStorage.setItem('currentSongIndex', currentSongIndex.toString());
  }, [currentSongIndex]);

  return (
    <div className="container-fluid musicplaylist-starting-div">
      <h1>Music Playlist</h1>
      <div>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          onFocus={() => setShowSuggestions(true)}
          placeholder="Search for a song"
          className="search-input"
        />
        {showSuggestions && (
          <div className="suggestion-list-container">
            <ul className="suggestion-list-name">
              {filteredSongs.map((song, index) => (
                <li key={song.id} onClick={() => handleSongSelect(index)}>
                  {song.title}
                </li>
              ))}
            </ul>
          </div>
        )}
        <h3>{currentSong?.title}</h3>
        <p>{currentSong?.artist}</p>
        <div className="rotate-box-center">
          <div className={`rotate-cd-circle ${isPlaying ? 'rotate_continue' : ''}`}>
            <div className="line-rotate"></div>
          </div>
        </div>
        <audio
          ref={audioRef}
          controls
          onCanPlayThrough={handleCanPlayThrough}
          src={currentSong?.url}
          onPlay={playSong}
          onPause={pauseSong}
        />
        <div className="music-control-button">
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
