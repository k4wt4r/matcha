import React from 'react'

function NavBarElement({
    link,
    text,
    activeElement,
    setActiveElement,
    index
}) {
  return (
    <a
    href={link}
    onClick={() => setActiveElement}
    >{text}</a>
  )
}

export default NavBarElement