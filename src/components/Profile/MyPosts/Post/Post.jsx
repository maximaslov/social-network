import React from "react";
import styles from "./Post.module.css";

export default function Post(props) {
  return (
    <div className={styles.item}>

      <img src="https://veryimportantlot.com/uploads/over/files/%D0%9D%D0%BE%D0%B2%D0%BE%D1%81%D1%82%D0%B8/2020/%D0%9C%D0%B0%D1%80%D1%82%202020/%D0%9C%D0%B0%D1%80%D1%82%20%D0%A1%D1%82%D0%B0%D1%82%D1%8C%D1%8F%20%D0%B4%D0%BB%D1%8F%20%D0%B1%D0%BB%D0%BE%D0%B3%D0%B0.%20%D0%96%D0%B8%D0%B2%D0%BE%D0%BF%D0%B8%D1%81%D1%8C%2063%20(6.5)%20%D0%9F%D0%BE%D1%80%D1%82%D1%80%D0%B5%D1%82.%20%D0%AF%D0%BD%20%D0%92%D0%B5%D1%80%D0%BC%D0%B5%D0%B5%D1%80.%20%C2%AB%D0%94%D0%B5%D0%B2%D1%83%D1%88%D0%BA%D0%B0%20%D1%81%20%D0%B6%D0%B5%D0%BC%D1%87%D1%83%D0%B6%D0%BD%D0%BE%D0%B9%20%D1%81%D0%B5%D1%80%D1%91%D0%B6%D0%BA%D0%BE%D0%B9%C2%BB.jpg" alt="" />
      <div className={styles.postContent}>
        <p>{ props.message }</p>
        <div>
          <span className={styles.postLikes}>{ props.likesCount }</span>
          <span className={styles.likeBtn}> Like</span>
        </div>
      </div>
    </div>
  );
}