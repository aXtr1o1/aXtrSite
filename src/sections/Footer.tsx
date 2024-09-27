import logo from "@/assets/logosaas.png";
import SocialX from "@/assets/social-x.svg";
import SocialInsta from "@/assets/social-insta.svg";
import SocialLinkedin from "@/assets/social-linkedin.svg";
import SocialPin from "@/assets/social-pin.svg";
import SocialYoutube from "@/assets/social-youtube.svg";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center">
      <div className="container">
        <div className="inline-flex relative ">
          <Image src={logo} alt="logo" height={40} className="relative" />
        </div>
        <nav className="navbar flex flex-col md:flex-row md:justify-center gap-6 mt-6">
        <a href="#hero">About</a>
              <a href="#services">Services</a>
              <a href="#testimonials">Expertise</a>
              
        </nav>
        <a href="http://www.psgstep.org/index.php?page_id=3"  target="_blank">
        <div className="flex justify-center gap-2 mt-6"><SocialPin/>PSG STEP
        </div>
        </a>
        <p className="">&copy; 2024 aXtrLabs - All rights reserved.</p>
      </div>
    </footer>
  );
};
