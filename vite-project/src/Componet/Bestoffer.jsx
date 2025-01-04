import { GrRun } from "react-icons/gr";
import { IoBodyOutline } from "react-icons/io5";
import { GrYoga } from "react-icons/gr";
import { IoIosTrendingUp } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";
export default function Bestoffer() {
  return (
    <>
      <div className="bg-[#443b3b] text-white">
        
          <div className=" pt-16 items-center grid md:grid-cols-2 sm:grid-cols-1 gap-12 md:p-6">
            <div className=" pl-16 pe-md-5 me-md-5">
              <h1 className="text-4xl font-semibold">The Best Program We offers For You</h1>
            </div>
            <div className="">
              <p className="pr-8">
                
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam
                quae et, architecto magni ad qui ratione assumenda fuga dolores
                dolorum doloribus praesentium earum excepturi. Repudiandae
                corporis quaerat odio nemo debitis.
              </p>
            </div>
          </div>
        
        {/* ****** */}
        <div className="row gx-0 flex pl-5 h-[350px]">
            <div className="col-md-3">
                <div className="bestoffer_col1">
                    <IoIosTrendingUp className="text-6xl"/>
                    <h4>Strength Training</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat architecto earum quia?</p>
                    <button>Learn More
                        <FaArrowRight className="ps-2"/>
                    </button>
                </div>
            </div>
            <div className="col-md-3">
                <div className="bestoffer_col1">
                    <GrYoga className="text-6xl"/>
                    <h4>Basic Yoga</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum voluptatibus architecto quis?</p>
                    <button>Learn More
                    <FaArrowRight className="ps-2"/>
                    </button>
                </div>
            </div>
            <div className="col-md-3">
                <div className="bestoffer_col1">
                    <IoBodyOutline className="text-6xl pb-3"/>
                    <h4>Body Building</h4>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium aperiam ex libero!</p>
                    <button>Learn More
                    <FaArrowRight className="ps-2"/>
                    </button>
                </div>
            </div>
            <div className="col-md-3">
                <div className="bestoffer_col1">
                    <GrRun className="text-6xl pb-3"/>
                    <h4>Weight Losing</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis inventore reprehenderit sint!</p>
                    <button>Learn More
                    <FaArrowRight className="ps-2"/>
                    </button>
                </div>
            </div>
        </div>
      </div>
    </>
  );
}
