import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { useState } from "react";
import adv1 from "../assets/ad1.jpg";
export default function Navbar() {
  const currentUser = true;
  const [dropdown, setdropdown] = useState(false);

  const navagation = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Orders", href: "/order" },
    { name: "Cart Page", href: "/cart" },
    { name: "Check Out", href: "/checkout" },
  ];

  return (
    <>
      <header className="max-w-screen-2xl mx-auto px-4 py-6 md:pl-16 sm:pl-2 md:pr-20">
        <nav className="flex justify-between items-center">
          {/* left side */}
          <div className="flex items-center md:gap-16 gap-4">
            <Link>
              <IoMenu className="h-6 " />
            </Link>

            <span className="relative sm:w-72 w-40 space-x-2">
              <IoIosSearch className="absolute inline-block left-3 inset-y-2" />
              <input
                type="search"
                placeholder="search here"
                className="bg-[#EAEAEA] w-full py-1 md:px-8 px-6 rounded-md focus:outline-none"
              />
            </span>
          </div>

          {/* right side? */}

          <div className="flex relative gap-4 items-center">
            <div className="">
              {currentUser ? (
                <button onClick={() => setdropdown(!dropdown)}>
                  <img src={adv1} className="h-6" />{" "}
                </button>
              ) : (
                <FaUserCircle />
              )}
              {/* show the navgation */}
              {dropdown && (
                <div className="absolute right-0 mt-2 w-48 shadow-lg rounded-md z-40">
                  <ul className="py-2">
                    {navagation.map((item) => (
                      <li key={item.name}>
                        <Link to={item.href} className="block px-4 py-2 text-sm hover:bg-gray-100">{item.name }</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <button className="hidden sm:block">
              <FaHeart />
            </button>
            <Link className="bg-primary p-1 sm:px-6 py-2 flex items-center rounded-sm gap-2">
              <FaCartShopping />
              <span className="semibold sm:ml-1">0</span>
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
}
