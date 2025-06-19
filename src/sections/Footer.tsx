import logo from "@/assets/logosaas.png";
import nasscomlogo from "@/assets/nasscomFG.png";
import steplogo from "@/assets/stepLogo.png";
import SocialX from "@/assets/social-x.svg";
import SocialInsta from "@/assets/social-insta.svg";
import SocialLinkedin from "@/assets/social-linkedin.svg";
import SocialPin from "@/assets/social-pin.svg";
import SocialYoutube from "@/assets/social-youtube.svg";
import Image from "next/image";
import n8ndev from "@/assets/Vector_n8n_Network[1].png"
// Import the SVG as a component
import { default as N8NdevIcon } from "@/assets/Vector n8n Network.svg"
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center">
      <div className="container">
        <div className="flex justify-center items-center gap-3 my-4">
          <Image src={steplogo} alt="step logo" height={35} className="relative"/>
          <Image src={logo} alt="logo" height={50} className="relative" />
          <Image src={nasscomlogo} alt="nasscom logo" height={35} className="relative brightness-0 invert"/>
        </div>
        <div className="flex justify-center items-center gap-3 my-4 fill-white">
          <a href="http://n8ndevelopers.com">
          <Image src={n8ndev} alt="n8n dev logo" height={54} className="relative brightness-0 invert" />
          </a>
          
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
        <p className="">&copy; 2025 aXtrLabs - All rights reserved.</p>
      </div>
    </footer>
  );
};