import { createContext, useState } from "react";

const BucketListContext = createContext({
  bucketList: [],
  totalBucketList: 0,
  addBucketListItem: (blog) => {},
  removeBucketListItem: (blogId) => {},
  isBucketListItem: (blogId) => {},
});

export const BucketListContextProvider = ({ children }) => {
  const [bucketListBlogs, setBucketListBlogs] = useState([]);

  const addBucketListItemHandler = (blog) => {
    setBucketListBlogs((previousBucketListItems) => {
      return previousBucketListItems.concat(blog);
    });
  };

  const removeBucketListItemHandler = (blogId) => {
    setBucketListBlogs((previousBucketListItems) => {
      return previousBucketListItems.filter((item) => item.id !== blogId);
    });
  };

  const blogIsInBucketHandler = (blogId) => {
    console.log("blogIsInBucketHandler", blogId);
    return bucketListBlogs.some((item) => item.id === blogId);
  };

  const context = {
    bucketList: bucketListBlogs,
    totalBucketList: bucketListBlogs.length,
    addBucketListItem: addBucketListItemHandler,
    removeBucketListItem: removeBucketListItemHandler,
    isBucketListItem: blogIsInBucketHandler,
  };

  return (
    <BucketListContext.Provider value={context}>
      {children}
    </BucketListContext.Provider>
  );
};

export default BucketListContext;
