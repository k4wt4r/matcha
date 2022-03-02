import React from "react";
import Image from "next/image";
import dating from "../../public/images/dating.png";
import Link from "next/link";
function Signup() {
    return (
        <div className="bg-gradient-to-tr from-purple-800 via-purple-600 to-pink-400 w-full min-h-screen flex justify-center items-center ">
            <form className="w-full md:w-2/3 lg:w-1/4 rounded-br-lg items-center justify-center px-4 lg:px-11 py-16  bg-gray-400 bg-opacity-50 rounded-2xl shadow-5xl relative z-2 border border-opacity-40 border-1 backdrop-filter backdrop-blur-sm mx-1.3">
                <Image
                    className="mb-40"
                    src={dating}
                    alt="dating image"
                    width={300}
                    height={300}
                />
                <div className="mb-2">
                    <span className="block text-gray-200 font-bold md:text-left md:mb-3 pr-40">
                        Username
                    </span>
                    <input
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-6 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        placeholder="username" />
                </div>
                <div className="mb-2">
                    <span className="block text-gray-200 font-bold md:text-left md:mb-3 pr-40">
                        Fistname
                    </span>
                    <input
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-6 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        placeholder="firstname"
                    />
                </div>
                <div className="mb-2">
                    <span className="block text-gray-200 font-bold md:text-left md:mb-3 pr-40">
                        Lastname
                    </span>
                    <input
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-6 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        placeholder="fisrname" />
                </div>
                <div className="mb-2">
                    <span className="block text-gray-200 font-bold md:text-left md:mb-3 pr-40">
                        Email
                    </span>
                    <input
                        name="email"
                        type="email"
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-6 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        placeholder="Enter your Email"
                    />
                </div>
                <div className="mb-2">
                    <span className="block text-gray-200 font-bold md:text-left mb-1 md:mb-3 pr-40">
                        Password
                    </span>
                    <input
                        name="password"
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-6 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        type="password"
                        placeholder="Enter your password"
                    />
                    <div className="flex justify-between  text-purple-800 mt-6 mb-4 ">
                        <button
                            type="submit"
                            className="text-white bg-pink-500 shadow-md shadow-pink-400 hover:bg-gradient-to-l focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-800 rounded-lg text-sm px-6 py-2.5 text-center animate-pusle"
                        >
                            Sign up
                        </button>
                    </div>
                    <div className=" mt-8">
                        <div className="flex flex-row text-gray-200">
                            Already have an account?
                            <p className="text-purple-800  ml-1.5 text-center">
                                <Link href="/signup">
                                    <a>Sign in </a>
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Signup;
