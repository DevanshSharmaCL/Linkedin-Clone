"use client";

import React, { useState } from "react";
import ProfilePhoto from "../Shared/ProfilePhoto";
import { PostDiolog } from "./PostDiolog";
import { Input } from "../ui/input";

const PostInput = ({ user }: { user: any }) => {
  const [open, setopen] = useState(false);
  const InputHandler = () => {
    console.log("Input clicked, opening dialog");
    setopen(true);
  };

  return (
    <div className="bg-gray-100 p-4 m-2 md:m-0 border border-gray-300 rounded-lg">
      <div className="flex items-center gap-3">
        <ProfilePhoto src={user?.imageUrl || "/default-avatar.png"} />
        <Input
          type="text"
          placeholder="Start a post..."
          className="h-12 w-full p-4 border rounded-full hover:bg-gray-200 cursor-pointe"
          onClick={InputHandler}
        />
        <PostDiolog setopen={setopen} open={open} src={user?.imageUrl || "/default-avatar.png"} />
      </div>
    </div>
  );
};

export default PostInput;