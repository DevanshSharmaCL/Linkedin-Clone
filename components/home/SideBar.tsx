import React from 'react'
import Image from 'next/image'
import ProfilePhoto from '../Shared/ProfilePhoto'

const SideBar = ({ user }: { user: any }) => {
  return (
    <div className='hidden md:block w-[20%] h-fit border border-gray-300 bg-white rounded-lg'>
      <div className='flex relative flex-col items-center h-40 w-full'>
        <div className='w-full h-16 overflow-hidden'>
          {user && (
            <Image
              src="/demo1.jpeg"
              alt="DemoBanner"
              width={200}
              height={200}
              className='w-full h-full rounded-t'
            />
          )}
        </div>
        <div className='my-1 absolute top-10'>
            <ProfilePhoto src={user ? user?.imageUrl : "demo1.jpeg"}/>

        </div>
        <div>
            <div className='mt-4 text-center px-2 pt-6 '>
                <h1 className='font-semibold hover:underline text-xl cursor-pointer '>{user?`${user?.firstName} ${user?.lastName}`:"devansh sharma"}</h1>
                <p className='text-xs'>@{user? `${user?.username}`:'username'}</p>
            </div>
        </div>
      </div>
        <div className='text-xs'>
          <div className='w-full flex justify-center items-center px-3 py-2 hover:bg-gray-200 cursor-pointer'>
            <p>Post Impression</p>
            <p className='text-blue-500'>00</p>
          </div>
        </div>
        <div className='text-xs'>
          <div className='w-full flex justify-center items-center px-3 py-2 hover:bg-gray-200 cursor-pointer'>
            <p>Posts</p>
            <p className='text-blue-500'>0</p>
          </div>
        </div>
    </div>
  )
}

export default SideBar
