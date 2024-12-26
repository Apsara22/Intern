import img1 from "../assets/images/girls.png";
export default function Services() {
  return (
    <>
      <div className="pt-16 bg-[#393b3f] text-white ">
        <div>
          <row className="gx-0 flex">
            <div className="col-md-6 pl-12 p-3 items-center py-3">
              <div className="services_col1  font-bold space-y-4">
                <h1 className="text-3xl">
                  Why Should Peoplehoose Fitnesxia Services
                </h1>
                <div className="flex text-center space-x-4">
                  {/* <IoIosCheckmarkCircleOutline /> */}
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    className="rounded-full check"
                  />

                  <h3 className="text-xl">
                    <label htmlFor="">Personal Training</label>
                  </h3>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Numquam labore et{" "}
                </p>
                <div className="flex text-center space-x-4">
                  {/* <IoIosCheckmarkCircleOutline /> */}
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    className="rounded-full check"
                  />

                  <h3 className="text-xl">
                    <label htmlFor="">Expert Trainer</label>
                  </h3>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Numquam labore et nobis.
                </p>
                <div className="flex text-center space-x-4">
                  {/* <IoIosCheckmarkCircleOutline /> */}
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    className="rounded-full check"
                  />

                  <h3 className="text-xl">
                    <label htmlFor="">Flexible Time</label>
                  </h3>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Numquam labore et nobis.
                </p>
              </div>
              <div className="pt-6">
              <button className="py-3 px-2 bg-red-600 rounded font-bold hover:px-4 hover:py-3 cursor-pointer">
                Join Today
              </button>
              </div>
              
            </div>
            <div className="col-md-6 pl-[350px] ">
              <div className="services_col2">
                <img src={img1} alt="" className="text-6xl w-[100%] h-[500px]" />
              </div>
            </div>
          </row>
        </div>
      </div>
    </>
  );
}
