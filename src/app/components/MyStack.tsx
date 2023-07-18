"use client";
import React from "react";
import { motion } from "framer-motion";

export const createTechBadge = (name: string, index: number) => (
  <div className=" relative hover:scale-105 ease-in-out group" key={index}>
    <h1 className=" rounded-md text-center text-accent  py-2 px-3  transition group-hover:bg-slate-800/50  group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] group-hover:drop-shadow-lg motion-reduce:transition-none">
      {name}
    </h1>
  </div>
);

export const compileBadges = (array:string[]) =>
array.map((tech, index) => createTechBadge(tech, index));

export default function MyStack() {
  const myStack = [
    "Typescript",
    "ES6",
    "React",
    "Next Js",
    "Ruby",
    "Rails",
    "Vite",
    "Tailwind css",
    "Webpack",
  ];





  return (
 
      <motion.div
        className="grid grid-cols-1 max-w-[60rem] md:grid-cols-2 container mx-5 mt-0 md:mt-10  gap-8 lg:gap-16 place-items-center bg-base-100  p-5 rounded-md shadow-xl hover:shadow-2xl transition-shadow duration-100 ease-in-out"
        style={{ backdropFilter: "blur(40px)" }}
        initial={{ opacity: 0, filter: "blur(10px)", }}
        whileInView={{ opacity: 1, filter: "blur(0px)",  }}
        transition={{ duration: 0.7 }}
     
      >
         <motion.div
            initial={{ opacity: 0, filter: "blur(20px)", x: -150 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", x: 0 }}
            transition={{ duration: 0.7 }}
            className=" absolute  rounded-md  w-full h-full border  border-accent -z-10 group-hover:rotate-3  transition-all duration-200 ease-in-out  top-2 left-2 group-hover:top-3 group-hover:left-3"
          ></motion.div>
          <motion.div
            initial={{ opacity: 0, filter: "blur(20px)", x: -180 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", x: 0 }}
            transition={{ duration: 0.8 }}
            className=" absolute rounded-md  w-full h-full border border-primary -z-10 group-hover:rotate-2  transition-all duration-250 ease-in-out  top-3 left-3 group-hover:top-5 group-hover:left-5"
          ></motion.div>
          <motion.div
            initial={{ opacity: 0, filter: "blur(20px)", x: -210 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", x: 0 }}
            transition={{ duration: 0.9 }}
            className="absolute rounded-md  w-full h-full border border-secondary -z-10 group-hover:rotate-3  transition-all duration-250 ease-in-out  top-4 left-4 group-hover:top-7 group-hover:left-7"
          ></motion.div>
        <div className="grid grid-cols-3 gap-3 order-2 ">{compileBadges(myStack)}</div>
        <div className="max-w-[30rem] px-5  p-5 order-1  ">
          <h1 className=" text-3xl font-bold text-white md:text-6xl mb-5">My stack</h1>
          <p>
            I use  <a
              href="https://react.dev/"
              target="_blank"
              rel="noreferrer"
              className="text-accent"
            >
              React
            </a>{" "} coupled with{" "}
            <a
              href="https://nextjs.org/"
              target="_blank"
              rel="noreferrer"
              className="text-accent"
            >
              Next.js
            </a>{" "}
            or{" "}
            <a
              href="https://vitejs.dev/"
              target="_blank"
              rel="noreferrer"
              className="text-accent"
            >
              Vite{" "}
            </a>
            to build my frontends, often in conjunction with{" "}
            <a
              href="https://tailwindcss.com/"
              target="_blank"
              rel="noreferrer"
              className="text-accent"
            >
              Tailwind css.{" "}
            </a>
            I love Tailwind&apos;s utility-first approach, but I&apos;m also
            proficient in regular CSS. For my backend, I use{" "}
            <a
              href="https://rubyonrails.org/"
              target="_blank"
              rel="noreferrer"
              className="text-accent"
            >
              Ruby On Rails.{" "}
            </a>{" "}
            and its MVC pattern. I usually deploy my apps on       <a
              href="https://vercel.com/"
              target="_blank"
              rel="noreferrer"
              className="text-accent"
            >
              Vercel.{" "}
            </a>{" "} or{" "}
            <a
              href="https://fly.io/"
              target="_blank"
              rel="noreferrer"
              className="text-accent"
            >
              Fly.io
            </a>
            .
          </p>
        </div>
       
      </motion.div>

   
  );
}
