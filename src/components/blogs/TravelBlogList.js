import React from "react";
import TravelBlogItem from "./TravelBlogItem";

import classes from "./TravelBlogList.module.css";

const TravelBlogList = ({ blogs }) => {
  return (
    <ul className={classes.list}>
      {blogs.map((blog) => (
        <TravelBlogItem
          key={blog.id}
          id={blog.id}
          image={blog.image}
          title={blog.title}
          description={blog.description}
          address={blog.address}
          city={blog.city}
        />
      ))}
    </ul>
  );
};

export default TravelBlogList;
