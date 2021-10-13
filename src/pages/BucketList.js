import { useContext } from "react";
import TravelBlogList from "../components/blogs/TravelBlogList";
import BucketListContext from "../context/BucketListContext";

const BucketList = () => {
  const bucketListContext = useContext(BucketListContext);
  let content;

  if (bucketListContext.totalBucketList === 0) {
    content = (
      <div>
        <p>There are no blogs in your bucket list</p>
      </div>
    );
  } else {
    content = <TravelBlogList blogs={bucketListContext.bucketList} />;
  }

  return (
    <div>
      <h1>My Bucket List</h1>

      {content}
    </div>
  );
};

export default BucketList;
