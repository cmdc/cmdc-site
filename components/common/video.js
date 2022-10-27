const Video = ({ src, height, width }) => {
  return (
    <video
      src={src}
      height={height && height}
      width={width && width}
      loop
      autoPlay
      muted
      playsInline
    />
  );
};

export default Video;
