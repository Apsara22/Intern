import img1 from "../assets/images/logo_main-48JSqkPZ.png"
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
export default function Footer() {
  return (
    <>
      <div className="con-flu bg-[#464646] text-white">
        <div className="pt-10 pl-28">
          <div className="row gx-0 flex space-x-24  ">
            <div className="col-md-2">
              <div className="footer font-bold">
                <h3 className="text-2xl pb-5">Company</h3>
                <ul>
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Why Us</a>
                  </li>
                  <li>
                    <a href="#">Security</a>
                  </li>
                  <li>
                    <a href="#">Partnership</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-2">
              <div className="footer font-bold">
                <h3 className="text-2xl pb-5">Company</h3>
                <ul>
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Why Us</a>
                  </li>
                  <li>
                    <a href="#">Security</a>
                  </li>
                  <li>
                    <a href="#">Partnership</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-2">
              <div className="footer font-bold">
                <h3 className="text-2xl pb-5">Company</h3>
                <ul>
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Why Us</a>
                  </li>
                  <li>
                    <a href="#">Security</a>
                  </li>
                  <li>
                    <a href="#">Partnership</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-2">
              <div className="footer text-center justify-between p-3 pl-6 font-bold">
                <h3 className="text-2xl pb-5">Contact US</h3>
                <div className="flex space-x-7 p-3 cursor-pointer">
                  <div>
                    <FaPhoneAlt className="text-red-600 text-2xl"/>
                  </div>
                  <div>+977 98865445677</div>
                </div>
                <div className="flex space-x-7 p-3 cursor-pointer">
                  <div>
                    <IoMdMail className="text-red-600 text-2xl" />
                  </div>
                  <div>contact@example.com</div>
                </div>
                <div className="flex space-x-7 p-3 cursor-pointer">
                  <div>
                    <FaLocationDot className="text-red-600 text-2xl"/>
                  </div>
                  <div>Kathmandu, Nepal</div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="footer">
              <h3 className="text-2xl pb-5 font-bold">Subscribe Our Newsletter</h3>
              <input type="email" name="email" className="p-3" placeholder="Enter Your Email" id="" />

              </div>
              <p className="text-xl pt-3 font-bold">Never miss an update & news to your email.</p>
            </div>
          </div>
        </div>
        <div className="py-4 footer-row  ">
        </div>
        <div className="gx-0 justify-between flex pt-9 pl-10">
          <div className="col-md-3 h-24 w-32">
            <img src={img1} alt="" />
          </div>
          <div className="col-md-6">
            <p>@2024 <strong>PAnedeCode.</strong> All Copyrights reserved</p>
          </div>
          <div className="col-md-3 flex cursor-pointer space-x-5 text-2xl pr-9">
            <FaFacebook/><FaLinkedin/><FaTwitter/>

          </div>
        </div>
      </div>
    </>
  );
}
