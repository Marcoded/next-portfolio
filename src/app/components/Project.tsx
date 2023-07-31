"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import GitHubLogo from "./GitHubLogo";

import gitHubLogo from "..//..//..//public/github-mark-white.svg";

import Chevron from "..//..//..//public/chevron.svg";
import Arrow from "..//..//..//public/arrow.svg";
import { createTechBadge, compileBadges } from "./MyStack";
import Link from "next/link";
import { motion } from "framer-motion";

interface ProjectProps {
  hostedUrl: string;
  image: StaticImageData;
  description: string;
  techUsed: string[];
  orientation: "left" | "right";
  title: string;
  githubLink: string;
}

export default function Project(props: ProjectProps) {
  const orientation = props.orientation === "left" ? "" : "md:order-2";

  const handleGitHubLinkClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open(props.githubLink, "_blank");
  };

  return (  
    <motion.div
      initial={{ opacity: 0, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.7 }}
      className=" container mx-auto max-w-[65rem]"
    >
      <a
        href={props.hostedUrl}
        target="_blank"
        rel="noreferrer"
        className="group relative container mx-auto max-w-[65rem] transition-all"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 rounded-md p-5 gap-8 lg:gap-16 place-items-center group-hover:bg-slate-800/50 group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] group-hover:drop-shadow-lg motion-reduce:transition-none">
          <div
            className={`group relative w-auto transition-all ${orientation} max-w-[35rem]`}
          >
            <div className="flex gap-3 ">
              <h1 className="text-white group-hover:text-accent text-bold text-2xl">
                {props.title}
              </h1>
              <Image
                className=" -rotate-45 group-hover:-translate-y-1  group-hover:translate-x-1 transition-all duration-300 ease-in-out"
                src={Arrow}
                height={25}
                width={25}
                alt="Chevron"
              ></Image>
            </div>
            <div className="flex flex-col gap-3 leading-relaxed">
              <p>{props.description}</p>
              <Image
                alt="Open Github repo"
                src={gitHubLogo}
                height={20}
                width={20}
                onClick={handleGitHubLinkClick}
                className=" mt-3 inline-flex justify-end text-primary "
              />
            </div>
            <div className="grid grid-cols-4 gap-3 mt-5">
              {compileBadges(props.techUsed)}
            </div>
          </div>
          <Image
            src={props.image}
            alt="flammin hot project screenshot"
            height={400}
            width={400}
            className="rounded-r-lg "
          ></Image>
        </div>
      </a>
    </motion.div>
  );
}
