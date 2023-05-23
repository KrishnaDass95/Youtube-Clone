import React, { useState, useEffect } from "react";
import SearchBar from "./Components/SearchBar";
import VideoList from "./Components/VideoList";

const App = () => {

  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <div>
      <SearchBar addVideos={setVideos}/>

      <div style={{display: 'flex'}}>
        <div style={{width: "70vw"}}>

        </div>
        <div style={{width: "30vw"}}>
          <VideoList 
          videos={videos}
          setCurrentVideo={setSelectedVideo}
          />
        </div>
      </div>
    </div>
  )
}

export default App;