"use client";
import logoWebp from "@/assets/logo.png.webp";
import logoTransformed from "@/assets/logo_synchron-transformed.png";
import imagePng from "@/assets/image.png";
import image6Png from "@/assets/image (6).png";
import image5Png from "@/assets/image (5).png";
import image4Png from "@/assets/image (4).png";
import image3Png from "@/assets/image (3).png";
import image2Png from "@/assets/image (2).png";
import image1Png from "@/assets/image (1).png";
import  StartUpSingam  from "@/assets/logo.f8ceb29d.png";
import { motion } from "framer-motion";
import Image from "next/image";

export const LogoTicker2 = () => {
  return (
    <div className="py-8 md:py-12 bg-black">
      <div className="container">
        <div
          className="flex overflow-hidden"
          style={{ maskImage: "linear-gradient(to right, transparent, black, transparent)" }}
        >
          <motion.div
            className="flex gap-14 flex-none pr-14"
            animate={{
              translateX: "-50%",
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            <Image src={logoWebp} alt="logoWebp" className="logo-ticker-image grayscale" style={{ filter: 'brightness(0) invert(1)' }} />
            <Image src={image6Png} alt="image6Png" className="logo-ticker-image grayscale" style={{ filter: 'brightness(0) invert(1)' }} />
            <Image src={StartUpSingam} alt="image6Png" className="logo-ticker-image grayscale" style={{ filter: 'brightness(0) invert(1)' }} />
            <Image src={logoTransformed} alt="logoTransformed" className="logo-ticker-image grayscale" style={{ filter: 'brightness(0) invert(1)' }} />
            <Image src={image5Png} alt="image5Png" className="logo-ticker-image grayscale" style={{ filter: 'brightness(0) invert(1)' }} />
            <Image src={image3Png} alt="image3Png" className="logo-ticker-image grayscale" style={{ filter: 'brightness(0) invert(1)' }} />
            <Image src={image2Png} alt="image2Png" className="logo-ticker-image grayscale" style={{ filter: 'brightness(0) invert(1)' }} />
            <Image src={image1Png} alt="image1Png" className="logo-ticker-image" style={{ filter: 'brightness(0) invert(1)' }} />
          </motion.div>
        </div>
      </div>
    </div>
  );
};