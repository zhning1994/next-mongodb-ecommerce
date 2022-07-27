import React from 'react';
import {
  FaFacebook,
  FaTwitter,
  FaGooglePlus,
  FaYoutube,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
} from 'react-icons/fa';

const FooterScreen = () => {
  return (
    <footer className="flex flex-col justify-center items-center shadow-inner bg-[#00296b] p-10">
      <div className="flex flex-col justify-center my-10">
        <div className="flex text-2xl text-white gap-4 mb-3">
          <FaFacebook />
          <FaTwitter />
          <FaGooglePlus />
          <FaYoutube />
          <FaInstagram />
          <FaLinkedin />
          <FaTiktok />
        </div>
        <p className="text-white font-sans mx-auto">
          CopyRight &copy; 2022 Jupiter{' '}
        </p>
      </div>
      <hr className="border-1 w-[90%]" />
      <div className="flex justify-between w-[90%] my-10">
        <div className="text-white">
          <h2 className="text-3xl">Jupiter</h2>
          <p>The best clothes in town</p>
        </div>
        <div className="text-white">
          <p>TOP SALES</p>
          <p>PROMOTION</p>
          <p>NEW ITEMS</p>
          <p>BUY 2 FREE 1</p>
        </div>
        <div className="text-white">
          <p>RETURN POLICY</p>
          <p>DELIVERY</p>
          <p>TERMS AND CONDITION</p>
          <p>TESTIMONIAL</p>
        </div>
        <div className="text-white">
          <p>ABOUT US</p>
          <p>CONTACT US</p>
          <p>CAREER</p>
          <p>CUSTOMER SERVICE</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterScreen;
