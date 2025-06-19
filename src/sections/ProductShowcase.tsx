"use client";
import productImage from "@/assets/product-image.png";
import pyramidImage from "@/assets/pyramid.webp";
import tubeImage from "@/assets/tube.webp";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import CheckIcon from "@/assets/check.svg";
import { twMerge } from "tailwind-merge";

const pricingTiers = [
  {
    title: "Language Modeling & Diffusion Modeling",
    inverse: false,
    features: [
      "Hyperparameter Optimization & Fine-Tuning [LoRA | QLoRA] for Precision Performance",
      "Next-Generation Language Models for NLP, Text Generation, and Semantic Understanding",
      "Stable Diffusion: High-Quality Image Synthesis & 3D Content Generation",
      "Advanced Retrieval-Augmented Generation (RAG) for Deep Contextualized Responses",
      "State-of-the-Art Large-Scale Pretrained Models for Robust NLP Solutions"
    ],
  },
  {
    title: "AI Agent Building & Orchestration",
    inverse: true,
    features: [
      "n8n Workflow Automation for Seamless AI Agent Integration & System Orchestration",
      "MCP Architecture Boilerplates for Scalable, Multi-Agent Ecosystems",
      "Advanced RAG Implementation for Knowledge-Augmented AI Agent Intelligence",
      "Custom LangGraph & LangChain Agent Development with Raw Python for Maximum Flexibility",
      "Integrated Business Process Automation with AI and Human-in-the-Loop Validation"
    ],
  },
  {
    title: "Vision Language Modeling & Audio Modeling",
    inverse: false,
    features: [
      "Cutting-Edge Computer Vision: Object Detection, Segmentation, and Scene Understanding",
      "Vision-Language Models for Contextual Image Captioning, Visual Question Answering, and OCR",
      "Speech-to-Text, Text-to-Speech, and Voice Cloning with Advanced Generative Techniques",
      "Audio Classification and Sound Synthesis for Immersive User Experiences",
      "Multimodal Integration of Visual, Auditory, and Text Data for Holistic AI Systems"
    ],
  },
];

export const ProductShowcase = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section ref={sectionRef} className="bg-gradient-to-b from-[#000000] to-[#343a40] py-24 overflow-x-clip">
      <div className="container">
        <div className="max-w-[540px] mx-auto">

          <h2 className="text-center text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-white to-[#3a3a3a] text-transparent bg-clip-text mt-5">
            Take your Business to the next level with AI
          </h2>
          <p className="section-des mt-4">
          Our Mission? <br/> To turn your challenges into AI-powered Success Stories, tailored precisely to your Needs and Vision.
          </p>
        </div>

        <div className="relative"><div className="flex flex-col gap-6 min-h-full items-center mt-10 lg:flex-row lg:items-end lg:justify-center">
          {pricingTiers.map(({ title, features, inverse }) => (
            <div
              key={title}
              className={twMerge(
                "p-10 rounded-3xl border border-[#F1F1F1] bg-white h-full  max-w-xs w-full",
                inverse === true && "border-black bg-black text-white"
              )}
            >
              <div className="flex justify-between">
                <h3 className={twMerge("text-lg font-bold text-black/50", inverse && "text-white/60")}>
                  {title}
                </h3>

              </div>
              <div className="flex items-baseline gap-1 mt-[30px]">
              </div>

              <ul className="flex flex-col gap-5 mt-8">
                {features.map((feature) => (
                  <li key={feature} className="text-sm flex items-center gap-4">
                    <CheckIcon className="h-6 w-6" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

          <motion.img
            src={pyramidImage.src}
            alt="Pyramid image"
            height={262}
            width={262}
            className="hidden md:block absolute -right-36 -top-32"
            style={{
              translateY: translateY,
            }}
          />
          <motion.img
            src={tubeImage.src}
            alt="Tube image"
            height={248}
            width={248}
            className="hidden md:block absolute bottom-24 -left-64"
            style={{
              translateY: translateY,
            }}
          />
        </div>
      </div>
    </section>
  );
};
