
import { Button } from "@/components/ui/button";
import React from "react";
import LogoCloud from "./logo-cloud";

const Hero = () => {
  return (
          <div 
        className="min-h-screen flex flex-col items-center justify-center py-20 px-6 text-foreground relative overflow-hidden"
        style={{
          backgroundImage: "url('/abstract-fluid-liquid-artwork-artstation-hd-wallpaper-preview.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat"
        }}
      >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40 dark:bg-black/60"></div>
      
      <div className="md:mt-6 flex items-center justify-center relative z-10">
        <div className="text-center max-w-2xl">
          <h1 
            className="mt-6 max-w-[20ch] text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight"
            style={{
              fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
              background: "linear-gradient(135deg, #ffffff 0%, #f0f0f0 50%, #e0e0e0 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}
          >
            AI-Powered Autonomous Retail Solutions
          </h1>
          <p className="mt-6 max-w-[60ch] xs:text-lg text-white/90">
            Watch Brysk&apos;s technology in action—transforming small-format retail into smart, autonomous, staff-free stores that work 24/7.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center sm:justify-center gap-4">
            <Button size="lg" className="rounded-full text-base bg-primary text-primary-foreground">
              Book a Demo
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full text-base border-white text-white hover:bg-white hover:text-black"
            >
              See It Live
            </Button>
          </div>
          <div className="mt-12 flex flex-col items-center">
            {/* YouTube Video Embed */}
            <div className="w-full max-w-4xl aspect-video rounded-xl overflow-hidden border border-white/20 shadow-2xl">
              <iframe
                src="https://www.youtube.com/embed/9e6ynmU2FF0?si=uzXYB0LkaA-Ze0h9"
                title="AI-Powered Autonomous Retail Solutions Demo"
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="relative z-10">
        <LogoCloud className="mt-24 max-w-3xl mx-auto" />
      </div>
    </div>
  );
};

export default Hero;