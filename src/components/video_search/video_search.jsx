import React, { useRef } from 'react';
import styles from './video_search.module.css';

const VideoSearch = ({onSearch}) => {
  const inputRef = useRef();
  const handleSearch = () => {
    const value = inputRef.current.value;
    onSearch(value); // 검색된 결과값을 호출해준다
  };

  const onClick = () => {
    handleSearch();
  };
  const onKeyPress = (event) => {
    if(event.key === 'Enter'){
      handleSearch();
    }
  };

    return (
      <header className={styles.header}>
        <div className={styles.logo}>
          <img className={styles.img} src="./images/logo.png" alt="logo"/>
          <h1 className={styles.title}>Youtube</h1>
        </div>
        <input 
          ref={inputRef}
          className={styles.input} 
          type="search" 
          placeholder="Search..." 
          onKeyPress={onKeyPress} 
        />
        <button className={styles.btn} type="submit" onClick={onClick}>
          <img 
            className={styles.btnImg} 
            src="./images/search.png"
            alt="search"
          />
        </button>
      </header>
    );
  };

export default VideoSearch;