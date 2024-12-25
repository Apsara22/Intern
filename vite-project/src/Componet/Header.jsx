import logo from "../assets/images/logo_main-48JSqkPZ.png";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

export default function Header() {
  const Links = [
    { name: "Home", link: "/" },
    { name: "About US", link: "/" },
    { name: "Porgram", link: "/" },
    { name: "Membership", link: "/" },
    { name: "Testimonals", link: "/" },
  ];
  const [open, setOpen] = useState(false);
  return (
    <nav className="w-full top-[10px] left-0">
      <div className="md:flex bg-[#403434] relative py-6 md:py-4 md:px-10 px-7 items-center justify-between ">
        <div className="mr-1 pt-2 flex items-center cursor-pointer pr-12">
          <a>
            <img src={logo} className="w-[30%] " />
          </a>
        </div>
        <div>
          <div
            className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden text-white"
            onClick={() => setOpen(!open)}
          >
            {open ? <IoMdClose /> : <IoMenu/>}
          </div>
          <ul className={`md:flex items-center cursor-pointer gap-10  `}>
            {Links.map((link) => (
              <li className="text-white hover:text-red-500 font-[1rem] md:my-0 my-7">
                <a href={link.link}>{link.name}</a>
              </li>
            ))}
            <button className="text-white bg-red-600 border-0 py-2 px-6 md:ml-8 rounded">
              Signup{" "}
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
}
