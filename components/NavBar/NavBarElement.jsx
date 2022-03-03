import React from 'react'

function NavBarElement({
    link,
    text,
    activeElement,
    setActiveElement,
    index,
})
 {
  return (
          <a
          className={`block mt-4 lg:inline-block lg:mt-0 mr-4 cursor-pointer ${activeElement ? "text-pink-600" : "text-black"}`}
          href={link}
          onClick={() => setActiveElement(index)}
          >{text}</a>
  )
}

export default NavBarElement