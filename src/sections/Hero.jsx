import React from 'react';
import profilePhoto from '../public/your-photo.png';

export default function Hero() {
  return (
    <section id="hero" className="ethiopian-geo-pattern relative min-h-[85vh] flex items-center justify-center px-6 border-b border-stone-800/60">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-12 z-10">
        
        <div className="space-y-6 text-center md:text-left">
          <span className="text-xs font-mono uppercase tracking-widest text-ethiopian-gold-light bg-ethiopian-bg-card px-3 py-1 rounded-md border border-ethiopian-gold/20 shadow-xs">
            Full Stack Developer
          </span>
          
          <h1 className="text-5xl md:text-6xl font-black tracking-tight space-y-2">
            <span className="block text-5xl md:text-6xl font-black tracking-tight text-ethiopian-text-bright font-sans">
              ሄኖክ ብርሃኑ
            </span>
            <span className="text-xl md:text-2xl block text-ethiopian-gold font-medium tracking-wide font-mono">
              [ Henok Birhanu ]
            </span>
          </h1>
          
          <p className="text-ethiopian-text-muted max-w-md text-base leading-relaxed font-medium">
            Building elegant, high-performance web applications with clean architecture and modern user interfaces.
          </p>
          
          <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-2">
            <a href="#projects" className="px-6 py-3 bg-ethiopian-gold text-ethiopian-bg-dark text-sm font-bold rounded-lg hover:bg-ethiopian-gold-light transition-all shadow-md">
              View Projects
            </a>
            <a href="#skills" className="px-6 py-3 bg-ethiopian-bg-card border border-stone-800 text-sm rounded-lg hover:border-ethiopian-gold/40 transition-all text-ethiopian-text-bright font-medium">
              My Skills
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="relative p-3 bg-ethiopian-bg-card border border-stone-800/80 shadow-2xl rounded-2xl">
            <div className="absolute inset-3 rounded-xl border border-ethiopian-gold/30 pointer-events-none"></div>
            <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-xl bg-ethiopian-bg-inner overflow-hidden flex items-center justify-center">
              <img 
                src={profilePhoto} 
                alt="Henok Birhanu" 
                className="w-full h-full object-cover mix-blend-luminosity brightness-95 opacity-90 hover:mix-blend-normal hover:opacity-100 transition-all duration-300"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
