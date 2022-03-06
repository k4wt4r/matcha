import React from 'react'
import Image from 'next/image'
import backgrounduserprofile from '../../public/images/backgrounduserprofile.jpg'
import pDp from '../../public/images/pDp.jpg'

function UserProfile() {
  return (
    <div className='w-screen min-h-screen flex'>
      <div className='w-full md:w-full md:flex lg:w-full flex flex-col mb-10'>
        <div className='w-full h-1/3 border-red-800 z-2'>
        <Image
        className=''
         alt="background image"
         src={backgrounduserprofile}
         layout='responsive'
         objectFit='contain'
        />
        <div className='w-full flex justify-center mb-82'>
        <Image
        className='rounded-full flex justify-center'
         alt="background image"
         src={pDp}
        height={100}
        width={100}
        />
        </div>
        </div>
      </div>
    </div>
  )
}

export default UserProfile