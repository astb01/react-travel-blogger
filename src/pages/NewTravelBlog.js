import React from "react";
import NewTravelBlogForm from "../components/blogs/NewTravelBlogForm";

const NewTravelBlog = () => {
  const addNewTravelBlogHandler = (newBlogData) => {
    const apiUrl = process.env.REACT_APP_TRAVEL_API_URL;

    console.log(apiUrl);

    fetch(apiUrl, {
      method: "POST",
      body: JSON.stringify(newBlogData),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <div>
      <h1>New Travel Blog</h1>

      <NewTravelBlogForm onAddTravelBlog={addNewTravelBlogHandler} />
    </div>
  );
};

export default NewTravelBlog;
