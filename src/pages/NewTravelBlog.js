import { useHistory } from "react-router-dom";
import NewTravelBlogForm from "../components/blogs/NewTravelBlogForm";

const NewTravelBlog = () => {
  const history = useHistory();

  const addNewTravelBlogHandler = (newBlogData) => {
    const apiUrl = process.env.REACT_APP_TRAVEL_API_URL;

    fetch(apiUrl, {
      method: "POST",
      body: JSON.stringify(newBlogData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      history.replace("/");
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
