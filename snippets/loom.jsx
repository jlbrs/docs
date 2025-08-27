export const Loom = props => {
  return (
      <iframe
        className="w-full aspect-video rounded-xl"
        src={`https://www.loom.com/embed/${props.videoId}`}
        title="Loom video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen>
      </iframe>
  );
};
