import { useState, useEffect } from "react";
import TravelBlogList from "../components/blogs/TravelBlogList";
import axios from "axios";

const AllTravelBlogs = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [travelBlogs, setTravelBlogs] = useState([]);
  const apiUrl = process.env.REACT_APP_TRAVEL_API_URL;
  const dbName = process.env.REACT_APP_TRAVEL_DB_NAME || `travelblogs.json`;
  const requestUrl = `${apiUrl}/${dbName}`;

  const getBlogsUsingAxios = () => {
    axios.get(requestUrl).then((response) => {
      const { data } = response;
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
  };

  useEffect(() => {
    if (!apiUrl) {
      // we do not have the URL to the back end API defined!
      console.error("No back end API URL provided. Exiting");
      process.exit(1);
    }

    getBlogsUsingAxios();

    // eslint-disable-next-line react-hooks/exhaustive-deps
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
