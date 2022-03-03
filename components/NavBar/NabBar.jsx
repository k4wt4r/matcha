import React from 'react'
import NavBarElement from './NavBarElement'


const navBarElements = [
    {link: "/", text: "Home"},
    {link: "/profile", text: "Profile"},
    {link: "/messages", text: "Messages"},
    {link: "/notifications", text:"Notifications"}
]


function NabBar() {
    const [activeElement, setActiveElement] = React.useState(0);
  return (
    <nav className='w-screen min-h-30 flex flex-row justify-between p-6  bg-gray-200 relative  md:flex"'>
        <div className='bg-transparent text-gray-100 flex justify-between '>
            <a href='#'
            className='text-bold text-pink-600'
            >
                lOgO
            </a>
        </div>
        <div className='w-full block lg:flex justify-between lg:items-center lg:w-auto'>
            <div className='text-sm lg:flex justify-between p-4'>
            {navBarElements.map(({link, text}, index) => (
                <NavBarElement
                link={link}
                text={text}
                activeElement={activeElement === index}
                setActiveElement={setActiveElement}
                key={index}
                />
            ))}
            </div>
        </div>
    </nav>
)
  }

export default NabBar