import { Route, Switch } from "react-router-dom";

// bring in pages:
import AllTravelBlogs from "./pages/AllTravelBlogs";
import NewTravelBlog from "./pages/NewTravelBlog";
import BucketList from "./pages/BucketList";
import MainNavigation from "./components/layout/MainNavigation";

const App = () => {
  return (
    <div>
      <MainNavigation />

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
    </div>
  );
};

export default App;
