import React from "react";
import NabBar from "../NavBar/NabBar";
import { FaSearch } from "react-icons/fa";
import Image from "next/image";
import {AiTwotoneLike} from "react-icons/ai"
import {AiTwotoneDislike} from "react-icons/ai"
import pDp from "../../public/images/pDp.jpg"


export default function FindPartner() {
  return (
    <>
      <NabBar />
      <section className="p-2 flex flex-col  min-h-full w-screen">
        <div className="border-6 max-h-full mb-4">
          <div className="flex flex-row ">
            <FaSearch className="ml-2 mt-3 fixed " color="#E84855" />
            <input
              type="text"
              placeholder="find partner"
              className="sm:w-full rounded-md border-none bg-slate-200 pl-10 h-10  placeholder:text-slate-600  placeholder:text-lg"
            />
          </div>
        </div>
        <div>
        <div className=''>
                <Image
                className='rounded-lg '
                    src={pDp}
                    alt="profile1"
                />
            </div>
        </div>
        <div className="p-6 flex flex-row sm:flex justify-around flex-grow i">
          <button type="submit">
          <AiTwotoneDislike className=" p-1 w-10 h-10 bg-[#E84855] ring-8 ring-[#E84855] rounded-full" fill="white" />
          </button>
          <button tybe="submit">
          <AiTwotoneLike className="p-1 w-10 h-10 bg-[#629677]  ring-8 ring-[#629677] rounded-full" fill="white" />
          </button>
        </div>
      </section>
    </>
  );
}
