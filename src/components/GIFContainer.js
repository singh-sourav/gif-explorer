import "./styles/GIFContainer.css";

function GIFContainer(props) {
  const { items, loaderref } = props;
  return (
    <div id="gif-container">
      {items.map((gif, i) => {
        if (i === items.length - 1) {
          return (
            <img
              key={i}
              ref={loaderref}
              src={gif.images.preview_gif.url}
              alt={gif.title}
              className="gif-img"
            />
          );
        }
        return (
          <img
            key={i}
            src={gif.images.preview_gif.url}
            alt={gif.title}
            className="gif-img"
          />
        );
      })}
    </div>
  );
}

export default GIFContainer;
