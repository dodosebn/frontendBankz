import React from "react";
import intBgMobile from "../images/bg-intro-mobile.svg";
import intBgDesktop from "../images/bg-intro-desktop.svg";
import imgMock from "../images/image-mockups.png";
import Button from "./shared/button";
import { motion } from "framer-motion";

const navVariants = {
  hidden: {
    x: "-100vw",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.4 },
  },
};

const Intro = ({ menuClicked }) => {
  const backgroundStyle = menuClicked
    ? "bg-gradient-to-b from-[#9698a5] to-white"
    : "";

  return (
    <div className="font-sans LightGrayishBlue pb-4">
      <div className={`relative ${backgroundStyle}`}>
        {/* Background for desktop */}
        <section className="flex flex-col justify-center lg:relative">
          <picture className="lg:relative lg:left-[35rem] bottom-[2rem]">
            <source media="(min-width: 768px)" srcSet={intBgDesktop} />
            <img
              src={intBgMobile}
              alt="Background illustration"
              className="w-full lg:w-[73rem] lg:h-[31rem] lg:object-cover z-0"
            />
          </picture>

          {/* Image mockup */}
          <div
            className={`absolute right-0 left-0 mb-[15rem] ${
              menuClicked ? "hidden" : "block"
            } lg:bottom-[39em] lg:left-[45rem] lg:relative z-0`}
          >
            <img
              src={imgMock}
              alt="Mockups"
              className="h-[37rem] w-full lg:w-[40rem] lg:h-[50rem]"
            />
          </div>
        </section>

        {/* Main content */}
        <motion.section
          variants={navVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col justify-center text-center font-sans lg:relative bottom-[88em] pb-10 lg:pb-0 right-[16rem]"
        >
          <h1 className="text-4xl text-DarkBlue font-medium lg:pr-[20.5rem]">
            Next generation
            <span className="hidden lg:block pr-[2rem]">digital banking</span>
          </h1>
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1, stiffness: 300 }}
            className="pt-5 flex justify-center text-center font-sans text-GrayishBlue text-[1rem] lg:pr-[12rem]"
          >
            <p className="w-[23rem] lg:w-[25rem] font-medium lg:text-start">
              Take your financial life online. Your Easybank account will be a
              one-stop-shop for spending, saving,{" "}
              <br className="hidden lg:block" />
              budgeting, investing, and much more.
            </p>
          </motion.article>
          <Button className="pt-5 lg:mr-[27rem]" />
        </motion.section>
      </div>
    </div>
  );
};

export default Intro;
