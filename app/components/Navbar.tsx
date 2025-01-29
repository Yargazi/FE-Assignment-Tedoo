"use client";

import { useState } from "react";
import HomeIcon from "@/public/icons/home.svg";
import MessagesIcon from "@/public/icons/message-circle.svg";
import NotificationsIcon from "@/public/icons/bell.svg";
import Image from "next/image";

export default function Navbar() {
  const [active, setActive] = useState("home");

  const navItems = [
    { id: "home", label: "Home", Icon: HomeIcon },
    { id: "messages", label: "Messaging", Icon: MessagesIcon },
    { id: "notifications", label: "Notifications", Icon: NotificationsIcon },
  ];

  return (
    <header className="bg-white shadow-md h-[58px] w-full flex items-center px-6">
      {/* Logo */}
      <div className="flex items-center">
        <Image
          src="/icons/TEDOOO-LOGO.svg"
          alt="Logo"
          height={40}
          width={40}
          className="rounded"
        />
      </div>

      {/* Search Bar */}
      <div className="flex-grow mx-4">
        <div className="relative">
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
            <Image
              src="/icons/search.svg"
              alt="Search"
              height={20}
              width={20}
            />
          </span>
          <input
            type="text"
            placeholder="Search"
            className="w-full h-10 pl-10 pr-4 rounded-full bg-gray-100 text-sm text-gray-600 outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>
      </div>

      {/* Links */}
      <nav className="flex items-center space-x-6 ml-auto">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActive(item.id)}
            className="flex flex-row gap-2 items-center relative group"
          >
            {/* Icon */}
            <item.Icon
              className={`w-5 h-5 ${
                active === item.id
                  ? "stroke-teal-500"
                  : "stroke-gray-600 group-hover:stroke-teal-500"
              } transition duration-200`}
            />
            {/* Label */}
            <span
              className={`text-sm font-medium ${
                active === item.id
                  ? "text-teal-500"
                  : "text-gray-600 group-hover:text-teal-500"
              } transition duration-200`}
            >
              {item.label}
            </span>
            {/* Active Indicator */}
            {active === item.id && (
              <div className="absolute bottom-[-17px] h-[3px] w-full rounded-md bg-teal-500"></div>
            )}
          </button>
        ))}

        {/* Avatar */}
        <a href="#" className="flex items-center">
          <Image
            src="/icons/avatar.png"
            alt="Profile"
            height={32}
            width={32}
            className="rounded-full"
          />
        </a>
      </nav>
    </header>
  );
}
