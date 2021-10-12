import { useState, useEffect } from "react";
import TravelBlogList from "../components/blogs/TravelBlogList";

const AllTravelBlogs = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [travelBlogs, setTravelBlogs] = useState([]);

  useEffect(() => {
    const apiUrl = process.env.REACT_APP_TRAVEL_API_URL;

    fetch(apiUrl)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const travelBlogs = [];

        for (const key in data) {
          const travelBlog = {
            id: key,
            ...data[key],
          };

          travelBlogs.push(travelBlog);
        }

        setIsLoading(false);
        setTravelBlogs(travelBlogs);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading ....</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Travel Blogs</h1>

      {/* this is a comment */}

      <TravelBlogList blogs={travelBlogs} />
    </section>
  );
};

export default AllTravelBlogs;
