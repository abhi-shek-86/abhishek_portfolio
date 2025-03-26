import React from "react";
import { FaInstagram, FaXTwitter, FaLinkedin, FaGithub } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full py-4 bg-black-100/55 text-white flex justify-center gap-6">
      {/* <a
        href="https://www.instagram.com/huzaifahmedz/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram size={24} />
      </a> */}
      {/* <a href="https://twitter.comhttps://x.com/HuzaifDev" target="_blank" rel="noopener noreferrer">
        <FaXTwitter size={24} />
      </a> */}
      <a
        href="https://www.linkedin.com/in/abhi1325/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin size={24} />
      </a>
      <a
        href="https://github.com/abhi-shek-86"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub size={24} />
      </a>

    </footer>
  );
};

export default Footer;