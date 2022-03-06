import React from 'react'
import Image from 'next/image'
import g1 from "../../public/images/g1.jpg"

function Profiles() {
    return (
        <section className='flex justify-center items-center min-h-60 w-screen'>
            <div className='flex justify-center items-center sm:h-60 sm:rounded-md border-6 border-red-700'>
                <Image
                className='rounded-lg '
                    src={g1}
                    alt="profile1"
                />
            </div>
            <div>

            </div>
        </section>
    )
}

export default Profiles