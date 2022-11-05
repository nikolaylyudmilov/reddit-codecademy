import Image from "next/image";
import React from "react";
import {
  BellIcon,
  ChatIcon,
  GlobeIcon,
  PlusIcon,
  SparklesIcon,
  SpeakerphoneIcon,
  VideoCameraIcon,
  StarIcon,
} from "@heroicons/react/outline";
import {
  ChevronDownIcon,
  HomeIcon,
  MenuIcon,
  SearchIcon,
} from "@heroicons/react/solid";

function Header() {
  return (
    <div className="sticky top-0 z-50 flex bg-white px-4 py-2 shadow-sm">
      <div className="relative h-10 w-20 flex-shrink-0 cursor-pointer">
        <Image
          objectFit="contain"
          src="/../public/icons/reddit-logo.png"
          layout="fill"
        />
      </div>

      <div className="mx-7 flex items-center xl:min-w-[300px]">
        <HomeIcon className="h-5 w-5" />
        <p className="ml-2 hidden flex-1 lg:inline">Home</p>
        <ChevronDownIcon className="h-5 w-5" />
      </div>

      <form className="flex flex-1 items-center space-x-2 border border-gray-200 bg-gray-100 px-3 py-1 rounded-sm">
        <SearchIcon className="h-6 w-6 text-gray-400" />
        <input
          className="flex-1 bg-transparent outline-none"
          type="text"
          placeholder="Search Reddit"
        />
        <button type="submit" hidden />
      </form>

      <div className="flex text-gray-500 items-center space-x-2 hidden lg:inline-flex">
        {/* apply burger */}
        <SparklesIcon className="icon" />
        <GlobeIcon className="icon" />
        <VideoCameraIcon className="icon" />
        <hr className="h-10 border border-gray-100" />

        <BellIcon className="icon" />
        <ChatIcon className="icon" />
        <PlusIcon className="icon" />
        <SpeakerphoneIcon className="icon" />
      </div>
      <div className="ml-5 flex items-center lg:hidden">
        <MenuIcon className="icon" />
      </div>

      <div className="hidden cursor-pointer items-center space-x-2 border border-gray-100 p-2 lg:flex">
        <div className="relative h-5 w-5 flex-shrink-0">
          <Image
            objectFit="contain"
            src="/../public/icons/reddit-bl-icon.png"
            layout="fill"
          />
        </div>
        <p className="text-gray-400">Sign In</p>
      </div>
    </div>
  );
}

export default Header;
