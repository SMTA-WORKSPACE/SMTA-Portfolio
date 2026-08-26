"use client";

import React from "react";
import { Icon } from "@iconify/react";
import { SectionHeading } from "../ui/SectionHeading";

const TECH_STACK = [
  { name: "n8n", icon: "simple-icons:n8n", color: "#EA4B71", isImage: false },
  { name: "Make", type: "image", src: "/images/logos/MAKE.png" },
  { name: "Monday.com", type: "image", src: "/images/logos/monday.png" },
  { name: "Go High Level", type: "image", src: "/images/logos/ghl.png" },
  { name: "Google Sheets", icon: "mdi:google-spreadsheet", color: "#34A853", isImage: false },
  { name: "Retell AI", type: "image", src: "/images/logos/retell.png" },
  { name: "Claude AI",     type: "image", src: "/images/logos/claude.png" },
  { name: "Elementor", icon: "simple-icons:elementor", color: "#92003B", isImage: false },
  { name: "WordPress", icon: "logos:wordpress-icon", color: "inherit", isImage: false },
  { name: "WooCommerce", icon: "logos:woocommerce-icon", color: "inherit", isImage: false },
  { name: "Twilio", icon: "logos:twilio-icon", color: "inherit", isImage: false },
  { name: "OpenAI", icon: "logos:openai-icon", color: "inherit", isImage: false },
  { name: "Meta API", icon: "logos:meta-icon", color: "inherit", isImage: false },
  { name: "Google Cal", icon: "logos:google-calendar", color: "inherit", isImage: false },
  { name: "WhatsApp API", icon: "logos:whatsapp-icon", color: "inherit", isImage: false }
];

export const TechStack = () => {
  return (
    <section className="py-20 bg-background-secondary overflow-hidden border-y border-border/50">
      <div className="container mx-auto px-6 mb-10">
        <SectionHeading 
          label="Tech Stack"
          icon="mdi:tools"
          title="Built With the Best Tools in the Industry"
        />
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scroll-left {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .carousel-track {
          animation: scroll-left 30s linear infinite;
          display: flex;
          gap: 32px;
          width: max-content;
          padding: 10px 0;
        }
        .carousel-track:hover {
          animation-play-state: paused;
        }
      `}} />

      <div className="relative w-full overflow-hidden py-4">
        {/* Shadow overlays for smooth fade on edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-32 bg-linear-to-r from-background-secondary to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-32 bg-linear-to-l from-background-secondary to-transparent z-10 pointer-events-none" />

        <div className="carousel-track">
          {[...TECH_STACK, ...TECH_STACK].map((tech, idx) => (
            <div 
              key={idx} 
              className="flex flex-col items-center justify-center w-[88px] shrink-0 cursor-pointer group"
            >
              <div className="w-[88px] h-[88px] rounded-full bg-white border border-[#E5E7EB] flex items-center justify-center mb-3 group-hover:-translate-y-1 transition-transform shadow-sm group-hover:shadow-md overflow-hidden">
                {(tech as any).type === 'image' || (tech as any).isImage ? (
                  <img 
                    src={(tech as any).src || (tech as any).imageSrc} 
                    alt={tech.name} 
                    style={{ width: '88px', height: '88px', objectFit: 'cover' }} 
                  />
                ) : (
                  <Icon 
                    icon={(tech as any).icon as string} 
                    className="w-[36px] h-[36px]" 
                    style={(tech as any).color && (tech as any).color !== 'inherit' ? { color: (tech as any).color } : {}}
                  />
                )}
              </div>
              <span className="text-[12px] font-medium text-[#6B7280] whitespace-nowrap text-center">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
