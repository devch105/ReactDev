import React, { useState } from "react";
import logoimage from "../assets/logo.png";
import { HiOutlineX, HiMenuAlt1 } from "react-icons/hi";

function Header() {
  const [toggle, setToggle] = useState(false);
  const menulist = [
    { id: 1, name: "Home", target: "#home" },
    { id: 2, name: "About", target: "#about" },
    { id: 3, name: "Skills", target: "#skills" },
    { id: 4, name: "Contact", target: "#contact" },
  ];

  return (
    <>
      <div className="flex p-5 items-center justify-between md:justify-start bg-[#1B1B1A] border-[#6e6e6d] rounded-md">
        <img src={logoimage} className="w-[70px] h-full" />
        <ul className="md:flex lg:flex gap-2 ml-6 hidden">
          {menulist.map((item) => (
            <li
              key={item.id}
              className="text-yellow-200 hover:bg-red-400 hover:text-white px-3 py-1 pb-2 rounded-full cursor-pointer text-[20px]"
            >
              <a href={item.target}>{item.name}</a>
            </li>
          ))}
        </ul>
        <div className="md:hidden lg:hidden">
          {!toggle ? (
            <HiMenuAlt1
              className="text-[30px] cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
          ) : (
            <HiOutlineX
              className="text-[30px] cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
          )}
          {toggle ? (
            <ul className="flex flex-col gap-2 absolute ml-[-50px] items-center bg-slate-100 rounded-md pd-3 mt-2">
              {menulist.map((item) => (
                <li
                  key={item.id}
                  className="hover:bg-red-400 hover:text-white px-3 py-1 pb-2 rounded-full cursor-pointer"
                >
                  <a href={item.target}>{item.name}</a>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default Header;
