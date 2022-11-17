import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import styles from "./Sidebar.module.scss";
const Sidebar = () => {
  return (
    <div>
      <div className={styles["sidebar"]}>
        <div className={styles["sidebar-wrapper"]}>
          <MenuIcon />
          <div className={styles["sidebar-icons"]}>
            <HomeIcon /> <span>Menu</span>
          </div>
          <div className={styles["sidebar-icons"]}>
            <ExploreIcon /> <span>Explore</span>
          </div>
          <div className={styles["sidebar-icons"]}>
            <SubscriptionsIcon /> <span>Subscriptions</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
