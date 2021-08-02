import React from "react";

function ImageRenderer(props) {
  const {
    key,
    src,
    width,
    height,
    lastImage,
    alt,
    loaderref = null,
    className = null,
  } = props;

  const imageRef = React.useRef();

  React.useEffect(() => {
    // Placeholder effect
    // Preload Image and swap to avoid janks on slow network
    const img = imageRef.current;
    img.src = src;
    img.onload = function onload() {
      img.style.visibility = "visible"; // hidden initially
      imageRef.current = null;
    };
  }, []);

  return (
    <div>
      <img
        id={key}
        width={width}
        height={height}
        ref={imageRef}
        key={key}
        src={src}
        alt={alt}
        className={className}
      />
      {lastImage && <div ref={loaderref}></div>}
    </div>
  );
}

export default ImageRenderer;
