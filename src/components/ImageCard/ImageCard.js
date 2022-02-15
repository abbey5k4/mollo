import React, { useState, useEffect } from "react";

const ImageCard = ({ image }) => {
  const [spans, setSpan] = useState(0);
  const imageRef = React.createRef();

  const setSpans = () => {
    const height = imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10);
    setSpan({ spans });
  };
  const { description, urls } = image;

  useEffect(() => {
    imageRef.current.addEventListener("load", setSpans);
  }, []);
  return (
    <div>
      <div style={{ gridRowEnd: `span ${spans}` }}>
        <img ref={imageRef} alt={description} src={urls.regular} />
      </div>
    </div>
  );
};

export default ImageCard;
