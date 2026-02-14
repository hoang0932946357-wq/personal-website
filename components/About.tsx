import React from 'react';
import { PERSONAL_INFO } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-dark-900 to-dark-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Image Side */}
          <div className="lg:w-1/2 relative">
            <div className="absolute inset-0 bg-indigo-500 rounded-2xl rotate-3 opacity-20 blur-lg"></div>
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              {/* Placeholder for Jerry's actual photo. Using a generic professional abstraction for now */}
              <img 
                src="https://picsum.photos/seed/jerrymusic/800/1000" 
                alt="Jerry Yu" 
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-8">
                <p className="text-white font-bold text-xl">余政憲 (Jerry Yu)</p>
                <p className="text-indigo-400">聲音設計師 / AI 自動化專家</p>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              連結 <span className="text-indigo-400">藝術感性</span> 與 <span className="text-indigo-400">科技理性</span>
            </h2>
            <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
              <p>
                你好，我是 Jerry余政憲。在過去的 20 年裡，我沈浸在聲音的世界，從遊戲音效到金鐘獎入圍的影視作品，我始終相信「聲音」是傳遞情感最強大的媒介。
              </p>
              <p>
                然而，隨著 AI 浪潮的來襲，我看見了新的可能。我不僅擁抱這些工具，更深入研究如何透過 <strong className="text-white">n8n 自動化流程</strong> 將繁瑣的工作交給機器，讓創作者能專注於最核心的「創意」。
              </p>
              <p>
                現在，我的使命是成為您的「數位轉型陪跑教練」。無論您是想要製作屬於自己的 AI 音樂，還是希望為公司建立自動化營運系統，我都能以跨領域的視角，為您提供最落地的解決方案。
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-6">
              <div className="p-4 bg-white/5 rounded-lg border border-white/10 text-center">
                <span className="block text-3xl font-bold text-white mb-1">20+</span>
                <span className="text-sm text-slate-400">年業界經驗</span>
              </div>
              <div className="p-4 bg-white/5 rounded-lg border border-white/10 text-center">
                <span className="block text-3xl font-bold text-white mb-1">100+</span>
                <span className="text-sm text-slate-400">自動化專案落地</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
