import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
export default function Navbar(){

    return(
        <>
        <header className="max-w-screen-2xl mx-auto px-4 py-6 md:pl-16 sm:pl-2">
            <nav className="flex justify-between items-center">
                
                {/* left side */}
                <div className="flex items-center md:gap-16 gap-4">
                    <Link>
                    <IoMenu className="h-6 "/>

                    </Link>
                    
                    <span className="relative sm:w-72 w-40 space-x-2">
                        <IoIosSearch className="absolute inline-block left-3 inset-y-2"/>
                        <input type="search" placeholder="search here" className="bg-[#EAEAEA] w-full py-1 md:px-8 px-6 rounded-md focus:outline-none"/>
                    </span>

                </div>

                {/* right side? */}

                <div>
                    <FaUserCircle/>

                    <button>
                        <FaHeart/>g
                    </button>
                    <Link>
                    <FaCartShopping/>
                    </Link>

                </div>

            </nav>
            
        </header>
        </>
    )
}