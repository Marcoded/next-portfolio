"use client";

//import { Typewriter, useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import Chevron from "..//..//..//public/chevron.svg";

const Hero = () => {
  const scrollDown = (vh: number) => {
    const scrollHeight = (window.innerHeight * vh) / 100;
    window.scrollBy({ top: scrollHeight, behavior: "smooth" });
  };

  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(15px)", y: -50 }}
      animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      transition={{ duration: 1.2 }}
    >
      <h1 className="ml-1 text-primary  text-xl lg:text-2xl">Hi, my name is</h1>
      <h1 className="text-5xl font-bold  text-neutral-content  lg:text-8xl">
        Marc Pollet
      </h1>

      <h1 className="text-3xl sm:text-5xl  lg:text-8xl">
        <Typewriter
          options={{
            delay: 35,
            deleteSpeed: 10,
            cursor: "|",
          }}
          onInit={(typewriter) => {
            typewriter
              .pauseFor(1000)
              .typeString("I build ")
              .callFunction(() => {
                console.log("String typed out!");
              })
              .pauseFor(100)
              .typeString("<span class='text-white'>Web Applications</span>")
              .pauseFor(1000)
              .deleteChars(16)
              .typeString("<span class='text-white'>user interfaces</span>")
              .pauseFor(1000)
              .deleteChars(15)
              .changeDelay(100)
              .typeString("<span class='text-accent'>things </span>")

              .typeString("for the web")

              .start();
          }}
        />
      </h1>
      <motion.div
        initial={{ opacity: 0, filter: "blur(15px)", y: -50 }}
        animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
        transition={{ duration: 0.5, delay: 9 }}
      >
        <Image
          onClick={() => scrollDown(100)}
          className="mx-auto hover:scale-110 transition-all h-8 md:h-14 duration-200 ease-in-out mt-10"
          src={Chevron}
          height={75}
          width={75}
          alt="chevron"
        ></Image>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
