import React from "react";
import "./styles/GIFContainer.css";
import ImageRenderer from "./ImageRenderer";

function GIFContainer(props) {
  const { gifsToAppend, loaderref, offset,loading } = props;
  const [results, setResults] = React.useState([[], [], [], []]);

  React.useEffect(() => {
    const n = 4;

    const newGifsToAppend = [[], [], [], []]; //we create it, then we'll fill it

    const wordsPerLine = Math.ceil(gifsToAppend.length / 4);

    for (let line = 0; line < n; line++) {
      for (let i = 0; i < wordsPerLine; i++) {
        const value = gifsToAppend[i + line * wordsPerLine];
        if (!value) continue; //avoid adding "undefined" values
        newGifsToAppend[line].push(value);
      }
    }
    if (offset === 1) {
      setResults([
        [...newGifsToAppend[0]],
        [...newGifsToAppend[1]],
        [...newGifsToAppend[2]],
        [...newGifsToAppend[3]],
      ]);
    } else
      setResults((results) => [
        [...results[0], ...newGifsToAppend[0]],
        [...results[1], ...newGifsToAppend[1]],
        [...results[2], ...newGifsToAppend[2]],
        [...results[3], ...newGifsToAppend[3]],
      ]);
  }, [gifsToAppend,offset]);

  const makeChunk = (res, i = "0") => {
    return res.map((gif, index, arr) => {
      if (i === 3 && index === arr.length - 1) {
        return (
          <ImageRenderer
            loaderref={loaderref}
            src={gif.images.original.url}
            width={gif.images.original.width}
            height={gif.images.original.height}
            lastImage={true}
            alt={gif.title}
            className="gif-img"
          />
        );
      } else {
        return (
          <ImageRenderer
            width={gif.images.original.width}
            height={gif.images.original.height}
            src={gif.images.original.url}
            alt={gif.title}
            className="gif-img"
          />
        );
      }
    });
  };

  if(loading)
  return null

  return (
    <div className="row">
      <div className="column" >
        {makeChunk(results[0])}
      </div>
      <div className="column" >
        {makeChunk(results[1])}
      </div>
      <div className="column" >
        {makeChunk(results[2])}
      </div>
      <div className="column">
        {makeChunk(results[3], 3)}
      </div>
    </div>
  );
}

export default GIFContainer;
