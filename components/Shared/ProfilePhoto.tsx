import { Avatar, AvatarImage, AvatarFallback } from '@radix-ui/react-avatar';
import React from 'react';

const ProfilePhoto = ({ src }: { src: string }) => {
  return (
    <Avatar>
      <AvatarImage
        src={src}
        alt="Profile"
        className="w-16 h-16 object-cover rounded-full cursor-pointer"
      />
      <AvatarFallback>?</AvatarFallback>
    </Avatar>
  );
};

export default ProfilePhoto;
