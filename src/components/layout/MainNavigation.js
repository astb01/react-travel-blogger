import { Link } from "react-router-dom";

import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Travel Blogger</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <Link to="/">All Travel Blogs</Link>
          </li>
          <li>
            <Link to="/new-travel-blog">Create New Travel Blog</Link>
          </li>
          <li>
            <Link to="/bucket-list">Bucket List</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
