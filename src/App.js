import React, { useState, useEffect } from 'react';

import './App.css';

import db from './firebase';

import Video from './Video';

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    db.collection('video').onSnapshot(snapshot => {
      setVideos(snapshot.docs.map(doc => doc.data()));
    });
  }, []);

  return (
    <div className='app'>
      <div className='app__videos'>
        {videos.map(
          ({ url, description, channel, song, likes, messages, shares }) => (
            <Video
              url={url}
              channel={channel}
              description={description}
              song={song}
              likes={likes}
              messages={messages}
              shares={shares}
            />
          )
        )}
      </div>
    </div>
  );
}

export default App;
