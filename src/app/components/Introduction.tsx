"use client";
import MarcPhoto from "..//..//..//public/marcPhoto.jpg";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Introduction() {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.7 }}
    >
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 place-items-center bg-base-100  p-5 rounded-md shadow-xl hover:shadow-2xl transition-shadow duration-100 ease-in-out"
        style={{ backdropFilter: "blur(40px)" }}
      >
        <div className="max-w-[35rem] px-5  p-5  ">
          <h1 className=" text-3xl font-bold text-white md:text-6xl mb-5">
            A bit about me
          </h1>
          <p className="text-justify text-neutral-content leading-relaxed">
            I started my career in{" "}
            <span className="text-accent">product management</span> after
            earning my master&apos;s degree in Marketing. Wanting to dive deeper
            into the technical side, I completed a coding bootcamp and
            transitioned into full-stack development. <br /> <br />
            Over the past year, I&apos;ve been working as a full-stack
            developer, primarly a building B2B application for a company in the
            energy sector. <br /> <br />
            With my background in both business and development, I&apos;m able
            to approach problems from multiple angles, understanding not just
            how to build, but why it matters for the business. I&apos;m excited
            to continue growing as a developer and bringing value to the teams I
            work with.
          </p>
        </div>
        <div className="relative group pb-5 md:pb-0">
          <Image
            src={MarcPhoto}
            width={400}
            height={400}
            alt="Headshot"
            className="  rounded-md h-48 md:h-52 lg:h-60 aspect-square w-auto object-cover object-top   transition-all duration-200 ease-in-out shadow-2xl"
          />

          <motion.div
            initial={{ opacity: 0, filter: "blur(20px)", y: 150 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ duration: 0.7 }}
            className=" absolute  rounded-md h-48 md:h-52 lg:h-60 aspect-square border  border-accent -z-10 group-hover:rotate-3  transition-all duration-200 ease-in-out  top-2 left-2 group-hover:top-3 group-hover:left-3"
          ></motion.div>
          <motion.div
            initial={{ opacity: 0, filter: "blur(20px)", y: 180 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ duration: 0.8 }}
            className=" absolute rounded-md h-48 md:h-52 lg:h-60 aspect-square border border-primary -z-10 group-hover:rotate-2  transition-all duration-250 ease-in-out  top-3 left-3 group-hover:top-5 group-hover:left-5"
          ></motion.div>
          <motion.div
            initial={{ opacity: 0, filter: "blur(20px)", y: 210 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ duration: 0.9 }}
            className="absolute rounded-md h-48 md:h-52 lg:h-60 aspect-square border border-secondary -z-10 group-hover:rotate-3  transition-all duration-250 ease-in-out  top-4 left-4 group-hover:top-7 group-hover:left-7"
          ></motion.div>
        </div>
      </div>
    </motion.div>
  );
}
