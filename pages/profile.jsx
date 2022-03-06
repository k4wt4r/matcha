import React from "react";
import Image from "next/image";
import backgrounduserprofile from "../public/images/backgrounduserprofile.jpg";
import g4 from "../public/images/g4.jpg";

function profile() {
  return (
    <div className="w-screen min-h-screen flex ">
      <div className="w-full h-1/3 flex flex-col">
        <div className="w-full flex h-1/6">
          <Image
            className="flex "
            alt="background image"
            src={backgrounduserprofile}
            layout="responsive"
            objectFit="contain"
          />
        </div>
        <div className="w-full  flex flex-col  items-center mb-82">
          <Image
            className="rounded-full flex  md:h-1/3"
            alt="background image"
            src={g4}
            height={120}
            width={120}
            priority
          />
          <h1 className="text-bold text-2xl text-gray-600 ">Kawtar EL-ALAMI</h1>
        </div>
        <div className="border-sky-400 max-h-60 w-screen flex flex-row justify-between p-6">
          <div className="flex flex-col">
            <h2>Gender</h2>
            <h4>Female</h4>
          </div>
          <div className="flex flex-col">
            <h2>Age</h2>
            <h4>24</h4>
          </div>
          <div className="flex flex-col">
            <h2>Likes</h2>
            <h4>969</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default profile;
