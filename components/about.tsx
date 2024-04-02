"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Pursuing a Bachelor of Science in Computer Science from Oregon State University has been a transformative
        journey, accentuating my passion for technology and programming. My technical repertoire spans a wide range of
        technologies, including <span className="font-medium">React, Next.js, Node.js, MongoDB, Python,</span> and
        more, equipping me with a robust foundation to tackle diverse programming challenges.{" "}
        I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        watching soccer games (Premier League), playing video games, and watching movies.
      </p>
    </motion.section>
  );
}
