import img1 from "../assets/images/test2.jpg";
import img2 from "../assets/images/fitness1-5ZkARyP1.jpeg";
import { FaStar } from "react-icons/fa6";
import { IoIosStarOutline } from "react-icons/io";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
export default function Testmonial() {
  return (
    <>
      <div className="bg-[#25252aea] pt-20 text-white h-96 ">
        <div>
          <div className="row gx-0 flex grid-rows-2">
            <div className="col-md-6">
              <div className="test-col"> abnjkjkk
                
              </div>
            </div>
            <div className="col-md-6">
              <div className="test-col">
                <Swiper
                  effect={"cards"}
                  grabCursor={true}
                  modules={[EffectCards]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <div className="row pl-[950px] pr-28 ">
                      <div className="col p-4 test_main  ">
                        <div className="gx-0 items-center flex space-x-7 ">
                          <div className="md-4   ">
                            <img
                              src={img1}
                              alt=""
                              className="size-24 rounded-full"
                            />
                          </div>
                          <div className="md-4 tracking-wide">
                            <h1 className="text-xl">Arajan Dhal</h1>
                            <p>Happy Customer</p>
                          </div>
                        </div>
                        <div className="star flex text-[1.3rem] pr-[0.4rem] cursor-pointer  text-[#e7a50c]">
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <IoIosStarOutline />
                        </div>
                        <p className="font-light ">
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Quaerat tempore aspernatur excepturi? Doloribus
                          recusandae eos velit eum deleniti necessitatibus
                          obcaecati, voluptatem minima saepe rerum repellendus
                          pariatur ipsum reiciendis delectus exercitationem!
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
          <p></p>
        </div>
      </div>
    </>
  );
}
