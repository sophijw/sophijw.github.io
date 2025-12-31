
import React, { useState } from 'react';
import { Linkedin, Instagram, ArrowRight, Plus, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const togglePrinciple = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const PRINCIPLES = [
    {
      id: '01',
      title: 'Think through First Principle',
      content: "I don’t settle for \"how it's always been done.\" Instead, I break complex problems down to their fundamental truths. Then, I build solutions from the ground up. This allows me to innovate rather than just iterate."
    },
    {
      id: '02',
      title: 'Rational Optimists',
      content: "I am a realist about the present, but an optimist about the future. I see the world as it actually is, flaws and all, not how I want it to be. Yet, I bring unwavering confidence to my team, driven by the conviction that we have the agency to reshape that reality."
    },
    {
      id: '03',
      title: 'Customer Centricity',
      content: "I build what I can sell, rather than selling what I can build. To do this, I listen with the intent to understand, not just to reply. By decoding the real human needs behind the data, I ensure we solve actual problems instead of shipping cool features no one asked for."
    },
    {
      id: '04',
      title: 'Bias for Action',
      content: "I value progress over perfection. Instead of getting stuck in endless planning or waiting for \"perfect conditions,\" I build prototypes, ship to users, and learn from real-world feedback. I believe the fastest way to the right answer is to start moving."
    },
    {
      id: '05',
      title: 'Extreme Ownership',
      content: "I never say \"that's not my job.\" I take full accountability for the outcome, not just the effort. When roadblocks arise, I don't wait for permission or blame the process. I make the necessary calls to unblock the path and deliver results."
    }
  ];

  return (
    <div className="min-h-screen bg-white transition-colors duration-500">
      <div className="pt-32 pb-24 px-6 md:px-12 max-w-6xl mx-auto animate-in fade-in duration-700">
        
        {/* Narrative Section */}
        <div className="max-w-4xl">
          <header className="mb-12">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-black mb-8 leading-[1.1]">
              Hello, I’m <span className="font-bold text-blue-600">Sophia Wu</span>.
            </h1>
            <div className="flex gap-6">
              <a href="https://www.linkedin.com/in/jiangyiwu/" target="_blank" className="text-blue-600 hover:scale-110 transition-transform">
                <Linkedin size={32} fill="currentColor" stroke="none" />
              </a>
              <a href="https://www.instagram.com/sophwujiangyi?igsh=cGM3ZGx1dWJjNHc1&utm_source=qr" target="_blank" className="text-blue-600 hover:scale-110 transition-transform">
                <Instagram size={32} strokeWidth={2.5} />
              </a>
            </div>
          </header>

          <div className="space-y-12 text-2xl md:text-3xl lg:text-4xl leading-[1.5] text-black font-normal tracking-tight">
            <p>
              My path is non-linear by design. It started at NYU, where I became obsessed over <span className="font-bold text-blue-600">the mechanics of influence</span>. I studied Mass Communication to see how ideas spread. I studied Organizational Communication to understand how teams align. I learned Brand Strategy to tell better stories. Later, I chose the dual degree at Yale and HEC Paris because I realized that slides don't ship products. I wanted to <span className="font-bold text-blue-600">create with people, lead without a title, and drive results through vision</span>.
            </p>
            
            <p>
              Right now, I am a graduate student ready to launch. I’m new, but I’ve been in the trenches. I spent my summers in Fintech and Tech at <span className="font-bold text-blue-600">Mastercard, Tencent, and Capgemini</span>. I worked as a Product Manager and Business Analyst, turning messy requirements into roadmaps and used data to make hard decisions.
            </p>

            <p>
              Outside of the office, I am a builder. From 2022 to 2024, <span className="font-bold text-blue-600">I led a 30-person team and built a marketplace from nothing.</span> This was my real-world MBA. It taught me that I love the scrappy work of starting something new. I find joy in bringing clarity to chaos.
            </p>

            <p>
              Currently, <span className="font-bold text-blue-600">I am using AI to solve my own headaches</span>. I am coding an "anchor board" for long-term investors. Most apps are designed to spike your dopamine and anxiety. I want to build the opposite. I am making a tool that lets me sleep well at night and feel good about my investments.
            </p>

            <div className="border-t-[1px] border-black/30 pt-12">
              <p className="text-black font-medium mb-10">
                I am graduating soon. I am looking for my first full-time role. I am ready to stop practicing and start shipping.
              </p>
              
              <Link 
                to="/experience" 
                className="inline-flex items-center gap-4 bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-xl hover:bg-blue-700 transition-all group hover:shadow-xl hover:-translate-y-1"
              >
                See the Linear Version
                <ArrowRight className="transition-transform group-hover:translate-x-2" size={24} strokeWidth={3} />
              </Link>
            </div>
          </div>
        </div>

        {/* Operative Section */}
        <section className="mt-48 max-w-4xl">
          <div className="flex items-center gap-6 mb-16">
            <h2 className="text-sm font-bold text-blue-600 uppercase tracking-[0.3em] whitespace-nowrap">
              Here is how I operate
            </h2>
            <div className="h-px bg-black/30 w-full"></div>
          </div>

          <div className="divide-y divide-black/20">
            {PRINCIPLES.map((item) => (
              <div key={item.id} className="py-8 group">
                <button 
                  onClick={() => togglePrinciple(item.id)}
                  className="w-full flex items-start justify-between text-left transition-colors"
                >
                  <div className="flex items-start gap-6 md:gap-10">
                    <span className="text-lg md:text-xl font-bold text-blue-600 tabular-nums pt-1">
                      {item.id}
                    </span>
                    <h3 className={`text-3xl md:text-5xl font-bold tracking-tight transition-colors ${expandedId === item.id ? 'text-blue-600' : 'text-black/60 group-hover:text-blue-600'}`}>
                      {item.title}
                    </h3>
                  </div>
                  <div className="pt-2 md:pt-4">
                    {expandedId === item.id ? (
                      <Minus size={32} className="text-blue-600" />
                    ) : (
                      <Plus size={32} className="text-black/40 group-hover:text-blue-600 transition-colors" />
                    )}
                  </div>
                </button>
                
                <div 
                  className={`grid transition-all duration-500 ease-in-out ${
                    expandedId === item.id 
                      ? 'grid-rows-[1fr] opacity-100 mt-8' 
                      : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-xl md:text-2xl leading-relaxed text-black/90 font-normal tracking-tight md:pl-20 max-w-3xl">
                      {item.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Closing Section */}
        <section className="mt-48 max-w-4xl border-t-[1px] border-black/30 pt-16">
          <div className="space-y-12 text-2xl md:text-3xl lg:text-4xl leading-[1.5] text-black font-normal tracking-tight">
            <p>
              I do my best work in the <span className="text-blue-600 font-bold italic">messy middle</span> of zero-to-one. If you need someone who brings clarity to chaos and ships value from Day 1, let's connect.
            </p>
            <p className="text-black">
              Find me on <a href="https://www.linkedin.com/in/jiangyiwu/" target="_blank" className="text-blue-600 font-bold hover:underline underline-offset-8">LinkedIn</a>, check out my project on <a href="https://github.com/sophijw" target="_blank" className="text-blue-600 font-bold hover:underline underline-offset-8">GitHub</a>, or shoot me an email at <a href="mailto:wujiangyi429@gmail.com" className="text-blue-600 font-bold hover:underline underline-offset-8">wujiangyi429@gmail.com</a>
            </p>
          </div>
        </section>

        <footer className="mt-48 pb-12 border-t border-black/20 pt-12 flex justify-between">
          <p className="text-black/60 text-xs font-bold uppercase tracking-widest">© 2025 Sophia Wu</p>
          <p className="text-black/60 text-xs font-bold uppercase tracking-widest">Designed for Impact</p>
        </footer>
      </div>
    </div>
  );
};

export default Home;