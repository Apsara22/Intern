import img1 from "../assets/images/partner1-zF7vbTNY.png";
import img2 from "../assets/images/partner2-0v4I3E4H.png";
import img3 from "../assets/images/partner3-1SbtTxdT.png";
import img4 from "../assets/images/fitness1-5ZkARyP1.jpeg";
import icon1 from "../assets/images/icon.png";
export default function Fitness() {
  return (
    <>
      <div className="bg-[#737474] text-white p-[1rem 0] flex items-center h-40">
        <div>
          <div className=" items-center pt-10 grid lg:grid-cols-2 sm:grid-cols-1">
            <div className="pl-16">
              <h1 className="font-bold text-3xl">950K +</h1>
              <p className="tracking-wide font-medium pt-2">
                Trusted Companies Partner
              </p>
            </div>
            <div>
              <div className=" flex pl-20 space-x-8 ">
                <img src={img1} alt="" className="px-3 rounded-xl " />
                <img src={img2} alt="" className="px-3 rounded-xl " />
                <img src={img3} alt="" className="px-3 rounded-xl " />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ******************************************************* */}
      <div className="bg-[#737171] text-white p-[1rem 0] flex items-center  relative h-[500px]">
        
          <div className=" items-center pt-10 grid md:grid-cols-2 sm:grid-cols-1 gap-14 sm:space-y-10">
            <div className="pl-16">
              <img
                src={img4}
                alt=""
                className="rounded-xl w-[650px] h-[350px]"
              />
              <div className="flex gap-6 items-end bg-white text-black top-[50%] left-[38%] py-4  rounded-xl absolute pop  ">
                <img src={icon1} alt="" className="h-9" />
                <h6 className="text-small text-left">Professional Trainer</h6>
              </div>
            </div>
            <div>
              <div className="  font-bold pb-14 p-[1rem 4rem] ">
                <h1 className="text-4xl font-semibold">Get Ready To Reach Your Goals</h1>
                <div className="pt-3 pb-4 fit ">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Ab, sit ipsam tempore, id ratione corporis, earum molestias
                    magnam ducimus vitae maiores! Modi, impedit iure.
                  </p>
                  <br />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Minus tempore facere incidunt.
                  </p>
                </div>
                <button className="py-3 px-2 bg-red-600 rounded font-bold hover:px-4 hover:py-3 cursor-pointer">
                  Free Trail Today
                </button>
              </div>
            </div>
          </div>
        
      </div>
    </>
  );
}
