import { FaCirclePlay } from "react-icons/fa6";
export default function Home() {
  return (
    <>

<div className="hero h-[800px] bg-center bg-cover bg-no-repeat  items-center">
            <div className="text-white pt-[9rem] pl-12 ">
              <h1 className="text-6xl font-extrabold space-x-2 space-y-4">
                GET <span className="text-red-600">HEALTHY</span>
                <br /> BODY WITH <span className="text-red-600">
                  PERFECT
                </span>{" "}
                <br /> EXERCISE
              </h1>
              <p className="p-4 text-xl">
                We are always there to help you make a healthy body and min
                through power of fitness
              </p>
              <div className="flex">
                <button className="py-3 px-2 bg-red-600 rounded font-bold hover:px-4 hover:py-3 cursor-pointer">
                  Get Started
                </button>
                <buton className="flex bg-transparent border-0 text-white ">
                  <FaCirclePlay className="w-16 text-4xl ml-2 cursor-pointer hover:text-6xl" />
                  <span className="text-xl text-center hover:text-2xl">
                    Watch Video
                  </span>
                </buton>
              </div>
            </div>
          </div>
          
    </>
  );
}
