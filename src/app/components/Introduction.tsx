"use client";
import MarcPhoto from "..//..//..//public/marcPhoto.jpg";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Introduction() {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(10px)",  }}
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
            As a long-time tech enthusiast, I earned my master&apos;s degree in
            Marketing and started my career in{" "}
            <span className="text-accent">product management</span>. Realizing
            the importance of understanding the technical aspects of developing
            a SaaS, I embarked on my journey into web development about 2 years
            ago. <br /> <br />
            Along the way, I discovered a passion for building things, which
            guided my career pivot. Now, with both coding skills and business
            acumen, I&apos;m primarily{" "}
            <span className="text-accent">focused on coding</span> and{" "}
            <span className="text-accent">
              continually improving my technical skills
            </span>
            . I&apos;m excited and ready to contribute these competencies to a
            team.
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
            initial={{ opacity: 0, filter: "blur(20px)", x: 150 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", x: 0 }}
            transition={{ duration: 0.7 }}
            className=" absolute  rounded-md h-48 md:h-52 lg:h-60 aspect-square border  border-accent -z-10 group-hover:rotate-3  transition-all duration-200 ease-in-out  top-2 left-2 group-hover:top-3 group-hover:left-3"
          ></motion.div>
          <motion.div
            initial={{ opacity: 0, filter: "blur(20px)", x: 180 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", x: 0 }}
            transition={{ duration: 0.8 }}
            className=" absolute rounded-md h-48 md:h-52 lg:h-60 aspect-square border border-primary -z-10 group-hover:rotate-2  transition-all duration-250 ease-in-out  top-3 left-3 group-hover:top-5 group-hover:left-5"
          ></motion.div>
          <motion.div
            initial={{ opacity: 0, filter: "blur(20px)", x: 210 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", x: 0 }}
            transition={{ duration: 0.9 }}
            className="absolute rounded-md h-48 md:h-52 lg:h-60 aspect-square border border-secondary -z-10 group-hover:rotate-3  transition-all duration-250 ease-in-out  top-4 left-4 group-hover:top-7 group-hover:left-7"
          ></motion.div>
        </div>
      </div>
    </motion.div>
  );
}
