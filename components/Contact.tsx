import React, { useState } from 'react';
import { Mail, MapPin, Send } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-dark-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              準備好開始您的<br />
              <span className="text-indigo-400">自動化旅程</span>了嗎？
            </h2>
            <p className="text-slate-400 text-lg mb-8">
              無論是企業培訓、個人教練，或是專案合作，歡迎填寫表單或透過社群媒體與我聯繫。
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-center text-slate-300">
                <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center mr-4">
                  <Mail className="w-5 h-5 text-indigo-400" />
                </div>
                <span>contact@jerrymusic.com</span>
              </div>
              <div className="flex items-center text-slate-300">
                <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center mr-4">
                  <MapPin className="w-5 h-5 text-indigo-400" />
                </div>
                <span>Taipei, Taiwan (Available Remote)</span>
              </div>
            </div>

            <div className="flex space-x-4">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-slate-400 hover:bg-indigo-600 hover:text-white transition-all duration-300"
                  aria-label={link.platform}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="bg-dark-800 rounded-2xl p-8 border border-slate-700 shadow-2xl">
            {formStatus === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-8">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4">
                  <Send className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">訊息已發送！</h3>
                <p className="text-slate-400">謝謝您的聯繫，我會盡快回覆您。</p>
                <button 
                  onClick={() => setFormStatus('idle')}
                  className="mt-6 text-indigo-400 hover:text-indigo-300 text-sm"
                >
                  發送另一則訊息
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">姓名</label>
                    <input
                      type="text"
                      id="name"
                      required
                      className="w-full bg-dark-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                      placeholder="您的稱呼"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full bg-dark-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                      placeholder="example@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-400 mb-2">諮詢類型</label>
                  <select
                    id="subject"
                    className="w-full bg-dark-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                  >
                    <option>n8n 自動化流程諮詢</option>
                    <option>AI 音樂製作教學</option>
                    <option>聲音設計委託</option>
                    <option>其他合作提案</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">訊息內容</label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    className="w-full bg-dark-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors resize-none"
                    placeholder="請簡述您的需求..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className={`w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-lg transition-all duration-300 flex items-center justify-center ${
                    formStatus === 'submitting' ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {formStatus === 'submitting' ? '發送中...' : '確認送出'}
                  {!formStatus && <Send className="ml-2 w-5 h-5" />}
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="mt-20 border-t border-slate-800 pt-8 text-center text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Jerry Music. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
