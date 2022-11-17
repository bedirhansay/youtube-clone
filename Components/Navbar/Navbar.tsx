import React from "react";
import styles from "./Navbar.module.scss";
import YouTubeIcon from "@mui/icons-material/YouTube";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import Image from "next/image";

const Navbar = () => {
  return (
    <div>
      <div className={styles["topbar"]}>
        <div className={styles["top-left"]}>
          <Image
            alt=""
            className={styles.logo}
            src="/assets/youtube.png"
            width={50}
            height={30}
          />
          <span>YouTube</span>
        </div>
        <div className={styles["top-center"]}>
          <div className={styles["top-search"]}>
            <input type="text" placeholder="Search" />
            <div className={styles["top-search-icon-container"]}>
              <SearchIcon className={styles.searchIcon} />
            </div>
          </div>
          <span>
            <MicIcon />
          </span>
        </div>
        <div className={styles["top-right"]}>
          <VideoCallIcon className={styles.topIcon} />
          <AppsIcon className={styles.topIcon} />
          <NotificationsNoneIcon className={styles.topIcon} />

          <span>
            <Image
              alt=""
              className={styles.img}
              src="/assets/avatar.png"
              width={30}
              height={30}
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
