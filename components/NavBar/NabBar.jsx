import React from "react";
import NavBarElement from "./NavBarElement";
import Image from "next/image";
import menu from "../../public/images/menu.png";
import { FaSearch } from "react-icons/fa";
import { AiOutlineSetting } from "react-icons/fa";
import { useState } from "react";
import Modal from "react-modal";

const navBarElements = [
  { link: "/", text: "Home" },
  { link: "/profile", text: "Profile" },
  { link: "/messages", text: "Messages" },
  { link: "/notifications", text: "Notifications" },
];

function NabBar() {
  const [activeElement, setActiveElement] = React.useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  function openModal() {
    setModalIsOpen(true);
  }
  function closeModal() {
    setModalIsOpen(false);
  }
  return (
    <nav className='w-screen min-h-20 flex flex-row justify-between p-6  bg-gray-200 relative  md:flex"'>
      <div className="bg-transparent text-gray-100 flex justify-between ">
        <a href="#" className="text-xl text-pink-600">
          MaTcHa
        </a>
      </div>
      <div className="w-full block lg:flex justify-between lg:items-center lg:w-auto">
        <div className="text-lg lg:flex justify-between sm:hidden md:hidden">
          {navBarElements.map(({ link, text }, index) => (
            <NavBarElement
              link={link}
              text={text}
              activeElement={activeElement === index}
              setActiveElement={setActiveElement}
              key={index}
            />
          ))}
        </div>
        <div className="w-full border-4 flex flex-row sm:hidden">
          <input
            className="rounded-lg border-1 w-48 h-8 px-4 "
            placeholder="search"
          />
          <FaSearch className="ml-40 mt-2 fixed" />
        </div>
      </div>
      <div className="flex flex-row justify-between px-4">
          <button className="bg-black text-gray-200 border-gray-200 rounded-3xl w-20 text-lg h-10 ">
              Logout
          </button>
        <button className="lg:hidden" onClick={openModal}>
          <Image
            className="ml-4"
            src={menu}
            alt="menu icon"
            width={20}
            height={20}
          />
        </button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          className=" h-screen md:h-full "
        >
          <div className=" min-h-screen p-20 w-screen flex items-center justify-center flex-col">
            <div className="sm:flex  flex-col items-center justify-center mb-4 text-bold">
              <div className="text-lg lg:flex justify-between ">
                {navBarElements.map(({ link, text }, index) => (
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
            <div className="flex mt-8">
              <button className=" mr-8 border-1 rounded-md bg-black text-white w-20 h-8" onClick={closeModal}>
                Back
              </button>
            </div>
          </div>
        </Modal>
      </div>
    </nav>
  );
}

export default NabBar;
