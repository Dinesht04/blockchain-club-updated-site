import Logo from "../assets/logo.png";
import { Link } from "next/link";
import { FaLinkedin, FaInstagram } from "react-icons/fa6";

function Footer() {
  return (
    <section className="relative overflow-x-hidden py-10 bg-black">
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="-m-6 flex flex-wrap">
          <div className="w-full p-6 md:w-1/2 lg:w-3/6">
            <div className="flex h-full flex-col justify-between">
              <div className="mb-4 inline-flex items-center">
                <img src={Logo} alt="Logo" className="h-[10rem]" />
              </div>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/6">
            <div className="h-full text-white flex justify-center items-center text-center md:text-left">
              <h4> &copy; Reserved to BlockchainClubVITB </h4>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-1/6">
            <div className="h-full text-center md:text-left">
              <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-100">
                Support
              </h3>
              <ul>
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium text-gray-100 hover:text-orange-500"
                    href={"/about"}
                  >
                    About Us
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium text-gray-100 hover:text-orange-500"
                    href={"/contact"}
                  >
                    Contact Us
                  </Link>
                </li>
                <li className="mb-4">
                  <p className=" text-base font-medium text-gray-100 mb-2">
                    Connect with Us
                  </p>
                  <span className="flex justify-center md:justify-start">
                    <a
                      href="https://www.linkedin.com/company/blockchain-club-vitb/"
                      target="_blank"
                    >
                      <FaLinkedin className=" text-gray-100 hover:text-orange-500 text-base mt-1 mx-1" />
                    </a>
                    <a
                      href="https://www.instagram.com/blockchain_club_vitb/"
                      target="_blank"
                    >
                      <FaInstagram className=" text-gray-100 hover:text-orange-500 text-base mt-1 mx-1" />
                    </a>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
