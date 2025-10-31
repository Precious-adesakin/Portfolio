// src/components/Hero.js
'use client';

import { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white px-4">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Hi, I'm <span className="text-cyan-400">Chukwudi Okeke</span>
        </h1>

        <TypeAnimation
          sequence={[
            'Full-Stack Developer',
            2000,
            'React & Next.js Enthusiast',
            2000,
            'Problem Solver',
            2000,
          ]}
          wrapper="h2"
          speed={50}
          className="text-2xl md:text-4xl text-cyan-300 font-medium"
          repeat={Infinity}
        />

        <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
          I build fast, responsive, and user-friendly web applications with modern tools.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="px-8 py-3 bg-cyan-500 text-black font-semibold rounded-lg hover:bg-cyan-400 transition"
          >
            View My Work
          </a>
          <a
            href="/resume.pdf"
            download
            className="px-8 py-3 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-black transition"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}