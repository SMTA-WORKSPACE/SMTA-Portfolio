"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { Icon } from "@iconify/react";

const sentence1 = ["Mohamed"];
const sentence2 = ["Thameem", "Ansari"];

export const Hero = () => {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-background"
    >
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-primary/50" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] rounded-full border border-primary/50" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1600px] h-[1600px] rounded-full border border-primary/50" />
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] items-center gap-12 lg:gap-8 mt-10 lg:mt-0">
          <div className="flex flex-col items-start text-left w-full lg:pr-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge variant="primary" icon="mdi:robot-outline" className="mb-6">
                AI Automation Specialist
              </Badge>
            </motion.div>

            <motion.h1
              className="font-sora font-extrabold leading-[1.1] mb-6"
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
            >
              <div className="block">
                {sentence1.map((word, i) => (
                  <motion.span
                    key={`s1-${i}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                    className="inline-block mr-3"
                    style={{ color: "#2D1B8E" }}
                  >
                    {word}
                  </motion.span>
                ))}
              </div>

              <div className="block">
                {sentence2.map((word, i) => (
                  <motion.span
                    key={`s2-${i}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
                    className="inline-block mr-3"
                    style={{ color: "#7C3AED" }}
                  >
                    {word}
                  </motion.span>
                ))}
              </div>
            </motion.h1>

            <motion.p
              className="text-text-secondary text-lg mb-8 leading-relaxed"
              style={{ maxWidth: "560px" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              I build AI systems that replace manual work, capture leads automatically, and run your entire business operations without you lifting a finger.
            </motion.p>

            <motion.p
              className="text-text-secondary text-lg mb-8 leading-relaxed"
              style={{ maxWidth: "560px" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
            >
              From WhatsApp AI agents to full automation workflows, everything is designed to save time, reduce cost, and scale faster.
            </motion.p>

            <motion.div
              className="mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.6 }}
            >
              <a
                href="https://www.linkedin.com/in/mohamed-thameem-ansari-22b336247/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" icon="mdi:linkedin">
                  Let's Connect
                </Button>
              </a>
            </motion.div>

            <motion.div
              className="flex flex-row flex-wrap gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.6 }}
            >
              {[
                { icon: "simple-icons:n8n", label: "n8n Workflow Automation" },
                { icon: "mdi:whatsapp", label: "AI Agents & Voice Bots" },
                { icon: "mdi:web", label: "Production Web Development" },
              ].map(({ icon, label }) => (
                <div
                  key={label}
                  className="bg-white border border-[#E5E7EB] rounded-full px-5 py-2.5 flex items-center gap-2.5"
                >
                  <Icon icon={icon} className="text-[#7C3AED] w-5 h-5" />
                  <span className="text-[#374151] font-medium text-sm">{label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="flex justify-center items-center w-full mt-4 lg:mt-0">
            <motion.div
              className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] lg:w-[360px] lg:h-[360px]"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div
                className="absolute inset-0 rounded-full p-[3px]"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(124,58,237,0.5), rgba(124,58,237,0.05))",
                  animation: "spin 8s linear infinite",
                }}
              >
                <div className="w-full h-full rounded-full bg-white" />
              </div>

              <div className="absolute inset-2 overflow-hidden rounded-full border-[6px] border-white bg-gray-100 shadow-2xl z-10">
                <Image
                  src="/images/profile.jpg"
                  alt="Mohamed Thameem Ansari"
                  fill
                  sizes="360px"
                  className="object-cover object-[center_30%]"
                  priority
                />
              </div>

              <div className="absolute inset-0 z-20 pointer-events-none">
                <motion.div
                  animate={{ y: [-8, 8, -8] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute bg-white border border-[#E5E7EB] rounded-full px-2.5 py-1.5 lg:px-3.5 lg:py-2 flex items-center gap-1.5 shadow-md -left-4 lg:-left-12 top-6 lg:top-7"
                >
                  <Icon icon="simple-icons:n8n" className="text-[#EA4B71] w-4 h-4" />
                  <span className="text-xs font-semibold text-[#374151]">n8n</span>
                </motion.div>

                <motion.div
                  animate={{ y: [8, -8, 8] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="absolute bg-white border border-[#E5E7EB] rounded-full px-2.5 py-1.5 lg:px-3.5 lg:py-2 flex items-center gap-1.5 shadow-md -right-4 lg:-right-10 top-1/4"
                >
                  <Icon icon="mdi:lightning-bolt" className="text-[#F97316] w-4 h-4" />
                  <span className="text-xs font-semibold text-[#374151]">GHL</span>
                </motion.div>

                <motion.div
                  animate={{ y: [-6, 6, -6] }}
                  transition={{ duration: 4.5, repeat: Infinity }}
                  className="absolute bg-white border border-[#E5E7EB] rounded-full px-2.5 py-1.5 lg:px-3.5 lg:py-2 flex items-center gap-1.5 shadow-md -left-2 lg:-left-4 bottom-12 lg:bottom-16"
                >
                  <img src="/images/logos/MAKE.png" alt="Make" className="w-4 h-4 object-contain" />
                  <span className="text-xs font-semibold text-[#374151]">Make</span>
                </motion.div>

                <motion.div
                  animate={{ y: [6, -6, 6] }}
                  transition={{ duration: 3.5, repeat: Infinity }}
                  className="absolute bg-white border border-[#E5E7EB] rounded-full px-2.5 py-1.5 lg:px-3.5 lg:py-2 flex items-center gap-1.5 shadow-md -right-2 lg:right-4 bottom-4 lg:bottom-6"
                >
                  <img src="/images/logos/monday.png" alt="Monday" className="w-4 h-4 object-contain" />
                  <span className="text-xs font-semibold text-[#374151]">Monday</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
};