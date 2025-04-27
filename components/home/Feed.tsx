import React from "react";
import PostInput from "../Feed/PostInput";
import Post from "../Feed/Post";

const Feed = ({ user }: { user: any }) => {
  console.log("Feed rendering, user:", user);
  const userData = user ? JSON.parse(JSON.stringify(user)) : null;
  console.log("Feed userData:", userData);
  return (
    <div className="flex-1 p-4 border-gray-500">
      <PostInput user={userData} />
      <Post />
    </div>
  );
};

export default Feed;