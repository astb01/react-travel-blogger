import { Route, Switch } from "react-router-dom";

// bring in pages:
import AllTravelBlogs from "./pages/AllTravelBlogs";
import NewTravelBlog from "./pages/NewTravelBlog";
import BucketList from "./pages/BucketList";

// Layout:
import Layout from "./components/layout/Layout";

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <AllTravelBlogs />
        </Route>

        <Route path="/new-travel-blog">
          <NewTravelBlog />
        </Route>

        <Route path="/bucket-list">
          <BucketList />
        </Route>
      </Switch>
    </Layout>
  );
};

export default App;
