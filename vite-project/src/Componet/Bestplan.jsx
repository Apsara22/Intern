import { TiTick } from "react-icons/ti";
export default function Bestplan() {
  return (
    <>
      <div className="bg-[#26282c] text-white ">
        <div className=" items-center justify-center pt-7 pl-72 font-bold text-center">
        <h1 className="text-4xl ">Choose The Best Plan</h1>
        
        <p>Choose a plan that's right far your growing team. Simple pricing & No hidden Charges</p>
        </div>
        <div className="">
          <div className="row gx-0 p-10 flex space-x-7 pl-[500px] text-center">
            <div className="col-md-4">
              <div className="bestplan_col1 ">
                <h4 className="text-xl uppercase font-bold"> Discover</h4>
                <h1 className="text-3xl ">
                  $99 <span className="text-sm">/Per Months</span>
                </h1>
                <div className="best_detial text-xl">
                  <p>
                    <TiTick  className="img"/> 5 classes Per Month
                  </p>
                  <p>
                    <TiTick className="img" /> 4 group class monthly
                  </p>
                  <p>
                    <TiTick className="img" /> online class access
                  </p>
                  <p>
                    <TiTick  className="img"/> E-book Fitness guide
                  </p>
                  <p>
                    <TiTick  className="img"/> 1 Extra Fitness traning
                  </p>
                </div>
                <button className="chose-btn">Choose Plan</button>
              </div>
            </div>
            <div className="col-md-4 ">
              <div className="bestplan_col12  ">
                <h2 className="text-2xl  p-3">Most Popular</h2>

                <h4 className="text-xl uppercase font-bold"> Enterprise</h4>
                <h1 className="text-3xl ">
                  $299 <span className="text-sm">/Per Months</span>
                </h1>
                <div className="best_detial text-xl">
                  <p>
                    <TiTick  className="img"/> 5 classes Per Month
                  </p>
                  <p>
                    <TiTick className="img" /> 4 group class monthly
                  </p>
                  <p>
                    <TiTick className="img" /> online class access
                  </p>
                  <p>
                    <TiTick  className="img"/> E-book Fitness guide
                  </p>
                  <p>
                    <TiTick  className="img"/> 1 Extra Fitness traning
                  </p>
                </div>
                <button className="chose-btn1">Choose Plan</button>
              </div>
            </div>
            <div className="col-md-4">
              <div className="bestplan_col1 ">
                <h4 className="text-xl uppercase font-bold">Professional </h4>
                <h1 className="text-3xl ">
                  $199 <span className="text-sm">/Per Months</span>
                </h1>
                <div className="best_detial text-xl">
                  <p>
                    <TiTick  className="img"/> 5 classes Per Month
                  </p>
                  <p>
                    <TiTick className="img" /> 4 group class monthly
                  </p>
                  <p>
                    <TiTick className="img" /> online class access
                  </p>
                  <p>
                    <TiTick  className="img"/> E-book Fitness guide
                  </p>
                  <p>
                    <TiTick  className="img"/> 1 Extra Fitness traning
                  </p>
                </div>
                <button className="chose-btn">Choose Plan</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
