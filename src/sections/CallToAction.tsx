"use client";
import ArrowRight from "@/assets/arrow-right.svg";
import starImage from "@/assets/star.webp";
import springImage from "@/assets/spring.webp";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const CallToAction = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section ref={sectionRef} className="bg-gradient-to-b from-black to-[#363636] py-24 overflow-x-clip">
      <div className="container">
        <div className="section-heading relative">
          <h2 className="section-title">Book a call Today</h2>
          <p className="section-des mt-5">
            Take the first step in elevating your business to the next level with AI and aXtrLabs
          </p>

          <motion.img
            src={starImage.src}
            alt="star image"
            width={360}
            className="absolute -left-[350px] -top-[137px]"
            style={{
              translateY,
            }}
          />
          <motion.img
            src={springImage.src}
            alt="spring image"
            width={360}
            className="absolute -right-[331px] -top-[19px]"
            style={{
              translateY,
            }}
          />
        </div>

        <div className="flex gap-2 mt-10 justify-center">
          <a href="https://calendly.com/Sid-aXtr">
            <button className="btn btn-primary">Book a call</button>
          </a>
        <a href="https://drive.google.com/file/d/18zQqiG7xJR9YsWPoPtFHXcDO6bJB4i_b"  target="_blank" download="aXtrLabServices.pdf">              <button className="btn btn-text flex gap-1">
                <span>Learn more</span>
                {/* <ArrowIcon classname="h-2 w-2" /> */}
              </button></a>
        </div>
      </div>
    </section>
  );
};
