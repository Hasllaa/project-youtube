import React, { useEffect, useState } from 'react';
import VideoList from './components/video_list/video_list';
import styles from './app.module.css';
import VideoSearch from './components/video_search/video_search';

function App({youtube}) {
  const [videos, setVideos] = useState([]);
  const search = query => {    
    youtube
    .search(query) //
    .then(videos => setVideos(videos));
  };

  useEffect(()=>{
    youtube
    .mostPopular() //
    .then(videos => setVideos(videos));
  }, []);
  
  return (
    <div className={styles.app}>
      <VideoSearch onSearch={search}/> 
      {/* onSearch가 발생하면 내search를 호출해준다 */}
      <VideoList videos={videos}/>;
    </div>
  );
}

export default App;
