import React, { useState, useEffect } from "react";
import unsplash from "./api/unsplash";
import "./App.css";
import ImageList from "./components/ImageList/ImageList";
import SearchBar from "./components/searchBar/SearchBar";

function App() {
  const [images, setImages] = useState([]);

  const onSearchSubmit = async (term) => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term },
    });
    setImages(response.data.results);
  };

  useEffect(() => {
    onSearchSubmit("African");
  }, []);
  return (
    <div className="">
      <SearchBar onSubmit={onSearchSubmit} />
      <ImageList images={images} />
    </div>
  );
}

export default App;
