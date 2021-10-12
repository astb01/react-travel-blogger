import React from "react";
import Card from "../ui/Card";

import classes from "./TravelBlogItem.module.css";

const TravelBlogItem = ({ image, title, address, city, description, id }) => {
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={image} alt={title} />
        </div>

        <div className={classes.content}>
          <h3>{title}</h3>
          <address>
            {address} {city}
          </address>

          <p>{description}</p>
        </div>

        <div className={classes.actions}>
          <button>To Bucket List</button>
        </div>
      </Card>
    </li>
  );
};

export default TravelBlogItem;
