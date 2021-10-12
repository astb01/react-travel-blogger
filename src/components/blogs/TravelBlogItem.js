import React from "react";

import classes from "./TravelBlogItem.module.css";

const TravelBlogItem = () => {
  return (
    <li className={classes.item}>
      <div className={classes.image}>
        <img src="" alt="" />
      </div>

      <div className={classes.content}>
        <h3>TITLE</h3>
        <address>ADDRESS</address>
        <p>DESCRIPTION</p>
      </div>

      <div className={classes.actions}>
        <button>To Bucket List</button>
      </div>
    </li>
  );
};

export default TravelBlogItem;
