import { useContext } from "react";
import Card from "../ui/Card";

import classes from "./TravelBlogItem.module.css";

import BucketListContext from "../../context/BucketListContext";

const TravelBlogItem = ({ image, title, address, city, description, id }) => {
  const bucketListContext = useContext(BucketListContext);
  const isBlogInBucketList = bucketListContext.isBucketListItem(id);

  const toggleBucketListHandler = () => {
    console.log("isBlogInBucketList", id, isBlogInBucketList);

    if (isBlogInBucketList) {
      bucketListContext.removeBucketListItem(id);
    } else {
      bucketListContext.addBucketListItem({
        id,
        title,
        image,
        address,
        city,
        description,
      });
    }
  };

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={image} alt={title} />
        </div>

        <div className={classes.content}>
          <h3>{title}</h3>
          <address>{address}</address>
          <address>{city}</address>
          <p>&quot;{description}&quot;</p>
        </div>

        <div className={classes.actions}>
          <button onClick={toggleBucketListHandler}>
            {isBlogInBucketList
              ? "Remove from Bucket List"
              : "Add To Bucket List"}
          </button>
        </div>
      </Card>
    </li>
  );
};

export default TravelBlogItem;
