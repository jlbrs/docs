export const Youtube = props => {
  return (
      <iframe
        className="w-full aspect-video rounded-xl"
        src={`https://www.youtube.com/embed/${props.videoId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen>
      </iframe>
  );
};
