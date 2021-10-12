import React from "react";
import TravelBlogList from "../components/blogs/TravelBlogList";

const BLOG_DATA = [
  {
    id: 1,
    title: "This is my first trip to Marina Bay Sands",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Marina_Bay_Sands_in_the_evening_-_20101120.jpg/2560px-Marina_Bay_Sands_in_the_evening_-_20101120.jpg",
    address: "Marina Bay Sands",
    city: "Singapore",
    description: "This place was ace!",
  },
  {
    id: 2,
    title: "This is my first trip to Marina Bay Sands",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Marina_Bay_Sands_in_the_evening_-_20101120.jpg/2560px-Marina_Bay_Sands_in_the_evening_-_20101120.jpg",
    address: "Marina Bay Sands",
    city: "Singapore",
    description: "This place was ace!",
  },
];

const AllTravelBlogs = () => {
  return (
    <section>
      <h1>All Travel Blogs</h1>

      <TravelBlogList blogs={BLOG_DATA} />
    </section>
  );
};

export default AllTravelBlogs;
