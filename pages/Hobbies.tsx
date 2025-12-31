
import React from 'react';
import ProfileHeader from '../components/ProfileHeader';
import InlineImage from '../components/InlineImage';

const Hobbies: React.FC = () => {
  return (
    <div className="pt-24 pb-12 px-6 max-w-6xl mx-auto animate-in fade-in duration-700">
      
      <div className="flex flex-col items-center text-center mb-24">
        <div className="w-full max-w-sm mb-12">
          <ProfileHeader imageSrc="./surf.jpg" />
        </div>
        <h1 className="text-[14px] font-black text-blue-600 uppercase tracking-[0.5em]">
          Living Beyond Digital
        </h1>
      </div>

      <div className="max-w-4xl mx-auto space-y-20">
        <section className="text-3xl md:text-5xl leading-[1.4] text-zinc-400 font-medium tracking-tighter">
          When I'm not building products, you'll likely find me 
          <span className="text-blue-600 font-black italic"> catching waves </span>
          <InlineImage src="https://images.unsplash.com/photo-1502680390469-be75c86b636f?q=80&w=400" alt="Surfing" />
          at the Côte des Basques. I believe that the best 
          <span className="text-blue-600 font-black"> creative thinking </span>
          <InlineImage src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=400" alt="Coding" />
          happens when you're completely disconnected from a Wi-Fi signal.
        </section>

        <section className="text-3xl md:text-5xl leading-[1.4] text-zinc-400 font-medium tracking-tighter">
          My mornings are strictly reserved for 
          <span className="text-blue-600 font-black"> specialty coffee </span>
          <InlineImage src="https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=400" alt="Coffee" />
          and deep-diving into 
          <span className="text-blue-600 font-black"> generative art </span>
          <InlineImage src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400" alt="Art" />.
          I'm currently fascinated by how 
          <span className="text-blue-600 font-black italic"> architecture </span>
          <InlineImage src="https://images.unsplash.com/photo-1448132395167-a16c933300e5?q=80&w=400" alt="Architecture" />
          influences the way we design digital spaces.
        </section>

        <section className="text-3xl md:text-5xl leading-[1.4] text-zinc-400 font-medium tracking-tighter border-t-4 border-zinc-800 pt-16">
          I'm always looking for 
          <span className="text-blue-600 font-black"> new books </span>
          <InlineImage src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d?q=80&w=400" alt="Books" />
          and 
          <span className="text-blue-600 font-black"> quiet places </span>
          <InlineImage src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=400" alt="Mountains" />
          to reflect on where technology is heading next.
        </section>
      </div>
      
      <footer className="mt-48 pb-12 text-center">
        <p className="text-zinc-500 text-xs font-black uppercase tracking-widest">Off-Grid Exploration • 2025</p>
      </footer>
    </div>
  );
};

export default Hobbies;