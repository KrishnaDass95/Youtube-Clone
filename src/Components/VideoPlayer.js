


const VideoPlayer = ({ videoToPlay }) => {
  return (
    <div>
      {videoToPlay === null || videoToPlay === undefined ? (
        <h1>Loading...</h1>
      ) : (
        <iframe
          width="85%"
          height="500"
          src={`https://www.youtube.com/embed/${videoToPlay.id.videoId}`}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      )}
    </div>
  );
};

export default VideoPlayer;
