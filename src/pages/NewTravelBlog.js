import { useHistory } from "react-router-dom";
import NewTravelBlogForm from "../components/blogs/NewTravelBlogForm";
import axios from "axios";

const NewTravelBlog = () => {
  const history = useHistory();
  const apiUrl = process.env.REACT_APP_TRAVEL_API_URL;
  const dbName = process.env.REACT_APP_TRAVEL_DB_NAME || `travelblogs.json`;
  const requestUrl = `${apiUrl}/${dbName}`;

  const addNewTravelBlogHandler = (newBlogData) => {
    if (apiUrl) {
      fetch(requestUrl, {
        method: "POST",
        body: JSON.stringify(newBlogData),
        headers: {
          "Content-Type": "application/json",
        },
      }).then(() => {
        history.replace("/");
      });
    }
  };

  // Example using axios:
  // eslint-disable-next-line no-unused-vars
  const addNewTravelBlogHandlerWithAxios = (newBlogData) => {
    if (apiUrl) {
      axios.post(requestUrl, JSON.stringify(newBlogData)).then(() => {
        history.replace("/");
      });
    }
  };

  return (
    <div>
      <h1>New Travel Blog</h1>

      <NewTravelBlogForm onAddTravelBlog={addNewTravelBlogHandler} />
    </div>
  );
};

export default NewTravelBlog;
