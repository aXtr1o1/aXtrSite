"use client";
import React, { use } from "react";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

const testimonials = [
  {"text": "Feature Extraction", "username": "user_zvjw57bv"},
  {"text": "Post Estimation", "username": "user_n5a1q5d4"},
  {"text": "Face Recognition", "username": "user_whje6n7k"},
  {"text": "Multimodal Modeling", "username": "user_r8n4gp3n"},
  {"text": "Optical Character Recognition [OCR]", "username": "user_twishr7n"},
  {"text": "Model Quantisation", "username": "user_9d2etzq8"},
  {"text": "Prompt Engineering", "username": "user_ix2s70a3"},
  {"text": "Image Captioning", "username": "user_mrxg2uft"},
  {"text": "Voice Cloning", "username": "user_9zz1py2l"},
  {"text": "Autonomous Navigation", "username": "user_k5rtshng"},
  {"text": "AI Agent Building", "username": "PixelPusher123"},
  {"text": "Simultaneous Localization and Mapping [SLAM]", "username": "VisualWizard78"},
  {"text": "Synthetic Data Generation", "username": "ColorCoder99"},
  {"text": "Visual Question Answering", "username": "TextExtractor77"},
  {"text": "Video Summarization", "username": "ObjectMapper66"},
  {"text": "Auto Speech Recognition", "username": "SpaceNavigator55"},
  {"text": "Data Augmentation", "username": "PointFinder44"},
  {"text": "Style Transfer", "username": "Divider33"},
  {"text": "Generative Music Composition", "username": "FrameAnalyzer22"},
  {"text": "Graph Neural Networks", "username": "VoiceGenerator123"},
  {"text": "Depth Estimation", "username": "SoundCreator456"},
  {"text": "Photogrammetry", "username": "AudioConverter789"},
  {"text": "Image Segmentation", "username": "SpeechRecognizer111"},
  {"text": "AI Art Generation", "username": "SoundCategorizer222"},
  {"text": "Pipeline Optimisation", "username": "EmotionDetector333"},
  {"text": "Part of Speech [POS] Tagging", "username": "VoiceMimic444"},
  {"text": "3D Reconstruction", "username": "AutomaticTranscriber555"},
  {"text": "Open Vocabulary Object Detection", "username": "SoundProducer666"},
  {"text": "Video Classification", "username": "MusicComposer777"},
  {"text": "Swarm Intelligence", "username": "ToneAnalyzer888"},
  {"text": "Risk Assessment", "username": "LanguageProcessor999"},
  {"text": "Predictive Maintenance", "username": "user_x1y2z3a4"},
  {"text": "Reinforcement Techniques", "username": "user_b2c3d4e5"}
];

const firstColumn = testimonials.slice(0, 8);
const secondColumn = testimonials.slice(8, 16);
const thirdColumn = testimonials.slice(16, 24);

const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({text,username}) => (
                <div className="bg-white section-des text-black w-full card" key={username}>
                  <div>{text}</div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};

export const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-black">
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
          </div>

          <h2 className="section-title mt-5">What we do</h2>
          <p className="section-des mt-5">
            From intuitive design to powerful features, we provide SOTA Solutions for your AI needs.
          </p>
        </div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
};
