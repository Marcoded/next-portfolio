"use client";

import { motion } from "framer-motion";
import React from "react";

export const createTechBadge = (name: string, index: number) => (
  <motion.div
    className="relative hover:scale-105 ease-in-out group"
    key={index}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <h1 className="rounded-md text-center text-accent py-2 px-3 transition group-hover:bg-slate-800/50 group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] group-hover:drop-shadow-lg motion-reduce:transition-none">
      {name}
    </h1>
  </motion.div>
);

export const compileBadges = (array: string[]) =>
  array.map((tech, index) => createTechBadge(tech, index));

interface SkillCategory {
  name: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    skills: [
      "TypeScript",
      "JavaScript",
      "React",
      "Next.js",
      "Redux - RTK Query",
      "Sass",
      "Tailwind CSS",
      "Zod",
    ],
  },
  {
    name: "Backend",
    skills: ["Node.js", "Express.js", "Ruby on Rails", "REST APIs", "GraphQL"],
  },
  {
    name: "Databases & ORMs",
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Prisma", "Drizzle"],
  },
  {
    name: "DevOps & Cloud",
    skills: ["Docker", "CI/CD", "AWS EC2", "AWS S3", "Coolify"],
  },
  {
    name: "Testing",
    skills: ["E2E testing", "Unit tests", "Jest", "Cypress"],
  },
  {
    name: "Other",
    skills: [
      "Git",
      "Agile methodologies",
      "Responsive design",
      "API documentation",
      "Security best practices",
      "OAuth and JWT authentication",
      "Payment gateways integration",
    ],
  },
];

const SkillCategory: React.FC<SkillCategory> = ({ name, skills }) => (
  <div className="mb-6">
    <h3 className="text-xl font-semibold text-primary mb-2">{name}</h3>
    <div className="flex flex-wrap gap-2">{compileBadges(skills)}</div>
  </div>
);

export default function Skills() {
  return (
    <motion.div
      className="container mx-auto z-10 px-4 py-8 max-w-4xl"
      initial={{ opacity: 0, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.7 }}
    >
      <motion.div
        className="relative bg-base-100 rounded-lg shadow-xl overflow-hidden group"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative z-10 p-6 md:p-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
            Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <SkillCategory
                key={index}
                name={category.name}
                skills={category.skills}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
