import React, { useEffect } from "react";

const VideoList = ({ videos, setCurrentVideo }) => {

    useEffect(() => setCurrentVideo(videos[0]), [videos]);

    return (

        <div>
            {
                videos &&
                videos.map((video, index) => (
                    <div 
                    key={index}
                    onClick={() => setCurrentVideo(video)}
                    >
                        <img 
                        style={{objectFit: "fill"}}
                        src={video.snippet.thumbnails.high.url}
                        alt={video.snippet.description}
                        />

                    </div>
                ))
            }
        </div>
    )
}
export default VideoList;