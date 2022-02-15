import React from "react";
import styles from "./ImageList.module.css";
import ImageCard from "../ImageCard/ImageCard";

const ImageList = ({ images }) => {
  const imagesList = images.map((image) => (
    <div className="" style={{ marginTop: "20px" }} key={image.id}>
      <ImageCard image={image} />
    </div>
  ));

  return <div className={styles.imageList}>{imagesList}</div>;
};

export default ImageList;
