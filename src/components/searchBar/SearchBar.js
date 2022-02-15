import React, { useState } from "react";
import styles from "./SearchBar.module.css";

const SearchBar = ({onSubmit}) => {
  const [term, setTerm] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    onSubmit(term);
  };
  return (
    <div className={styles.SearchBarDiv}>
      <form onSubmit={submitForm} className={styles.containerDiv}>
        <span className={styles.spanBg}>
          <i className="fas fa-search"></i>
        </span>
        <input
          type="search"
          placeholder="Search bar"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
      </form>
    </div>
  );
};

export default SearchBar;
