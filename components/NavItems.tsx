import { Bell, BriefcaseBusiness, Home, MessageCircleMore, Users } from 'lucide-react'
import Link from 'next/link'
import React from "react";

type NAVITEMS = {
  src: string;
  icon: React.ReactNode;
  text: string;
}

const navItems: NAVITEMS[] = [
  {
    src: "/home",
    icon: <Home />,
    text: "Home",
  },
  {
    src: "/network",
    icon: <Users />,
    text: "My Network",
  },
  {
    src: "/job",
    icon: <BriefcaseBusiness />,
    text: "Jobs",
  },
  {
    src: "/message",
    icon: <MessageCircleMore />,
    text: "Messaging",
  },
  {
    src: "/notification",
    icon: <Bell />,
    text: "Notifications",
  },
]

const NavItems = () => {
  return (
    <div className='flex gap-8'>
      {navItems.map(({ src, icon, text }, index) => (
        <div key={index} className='flex flex-col items-center cursor-pointer text-[#666666] hover:text-black '>
          <span>{icon}</span>
          <Link className='text-xs' href={src}>{text}</Link>
        </div>
      ))}
    </div>
  )
}

export default NavItems;
