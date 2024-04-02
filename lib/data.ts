import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaPython } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import puzzleFuzionImg from "@/public/images/puzzle-fuzion.png";
import adventureAIImg from "@/public/images/adventure-ai.png";
import masterMindImg from "@/public/corpcomment.png";
import coursePlannerImg from "@/public/images/course-planner.gif";
import riceCADImg from "@/public/images/ricecad.png"

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "FHIR API Developer",
    location: "Springfield, OR",
    description:
        "Developed an API for healthcare practitioner data integration across the Pacific Northwest with Python and Flask.",
    icon: React.createElement(FaPython),
    date: "Sep 2023 - Present",
  },
  {
    title: "Teaching Assistant",
    location: "Corvallis, OR",
    description:
        "Provided instructional support in programming, course materials, and web development principles.",
    icon: React.createElement(LuGraduationCap),
    date: "Sep 2023 - Present",
  },
  {
    title: "Retail Department Associate",
    location: "Corvallis, OR",
    description:
        "Managed textbook operations and web orders, contributing to seamless online retail operations.",
    icon: React.createElement(CgWorkAlt),
    date: "Aug 2023 - Apr 2024",
  },
] as const;

export const projectsData = [
  {
    title: "PuzzleFuzion",
    description:
        "Developed a real-time multiplayer puzzle game with innovative mechanics and seamless user experiences.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: puzzleFuzionImg,
  },
  {
    title: "AdventureAI",
    description:
        "Led the front-end development of a text-based RPG game integrating AI for dynamic content generation.",
    tags: ["TypeScript", "React", "Convex", "Tailwind"],
    imageUrl: adventureAIImg,
  },
  {
    title: "MasterMind",
    description:
        "Developed a Mastermind game clone in Assembly language, demonstrating low-level programming proficiency.",
    tags: ["Assembly"],
    imageUrl: masterMindImg,
  },
  {
    title: "CoursePlanner",
    description:
        "Led design and backend implementation for a Schedule/Course Planner website, improving user experience.",
    tags: ["JavaScript", "CSS", "MariaDB"],
    imageUrl: coursePlannerImg,
  },
  {
    title: "riceCAD",
    description:
        "Developed a lightweight web-based CAD tool for Minecraft, leading frontend development.",
    tags: ["JavaScript", "Handlebars"],
    imageUrl: riceCADImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "MySQL",
  "Python",
  "Flask",
  "Assembly",
  "React Native",
] as const;
