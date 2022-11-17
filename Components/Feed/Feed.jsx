import Image from "next/image";
import React from "react";
import { useData } from "../../hook/useData";
import styles from "./Feed.module.scss";

function Feed({ data }) {
  const { state, status } = useData();

  return (
    <div className={styles.cardWrapper}>
      {state &&
        state?.video?.map((item, index) => (
          <div className={styles.wrapper} key={index}>
            <div className={styles.cardTop}>
              <Image alt="" src={item.img} width={300} height={183}></Image>
              <span className={styles.text}>{item.duration}</span>
            </div>
            <div className={styles.cardBottom}>
              <div className={styles.avatar}></div>
              <span className={styles.title}>{item.title}</span>
              <span className={styles.avatarname}>Bedirhan Say</span>
              <div className={styles.info}>
                <span className={styles.views}>{item.views}</span>
                <span className={styles.date}>{item.date}</span>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
export default Feed;
