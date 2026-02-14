import React from 'react';
import { ArrowRight, PlayCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Gradients */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <div className="inline-flex items-center px-4 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-sm font-medium mb-8 animate-fade-in-up">
          <span className="flex h-2 w-2 relative mr-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          接受 2024 年度陪跑諮詢預約中
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight animate-fade-in-up [animation-delay:200ms]">
          用 <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">AI 音樂</span> 與 
          <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400"> 自動化工作流</span> 放大你的影響力
        </h1>
        
        <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-400 animate-fade-in-up [animation-delay:400ms]">
          我是 {PERSONAL_INFO.name}。結合 20 年專業聲音設計經驗與 n8n 自動化技術，協助你打造高效率的數位內容產製系統。
        </p>
        
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up [animation-delay:600ms]">
          <a 
            href="#contact"
            className="group px-8 py-4 bg-white text-dark-900 rounded-full font-bold text-lg hover:bg-slate-100 transition-all flex items-center justify-center"
          >
            預約免費評估
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="#portfolio"
            className="px-8 py-4 bg-transparent border border-slate-700 text-white rounded-full font-bold text-lg hover:bg-white/5 transition-all flex items-center justify-center"
          >
            <PlayCircle className="mr-2 w-5 h-5" />
            查看作品集
          </a>
        </div>

        {/* Tech Stack Strip */}
        <div className="mt-20 pt-8 border-t border-white/5 animate-fade-in-up [animation-delay:800ms]">
          <p className="text-slate-500 text-sm mb-4 tracking-wider uppercase">Powering Workflows With</p>
          <div className="flex flex-wrap justify-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Simple text representations or SVGs would go here. Using text for simplicity */}
             <span className="text-xl font-bold text-slate-300">n8n</span>
             <span className="text-xl font-bold text-slate-300">Suno</span>
             <span className="text-xl font-bold text-slate-300">Udio</span>
             <span className="text-xl font-bold text-slate-300">OpenAI</span>
             <span className="text-xl font-bold text-slate-300">Claude</span>
             <span className="text-xl font-bold text-slate-300">Make</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
