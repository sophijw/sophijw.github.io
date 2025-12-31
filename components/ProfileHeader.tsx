
import React from 'react';

interface ProfileHeaderProps {
  imageSrc?: string;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ imageSrc = "./sophia.jpg" }) => {
  return (
    <div className="aspect-[3/4] w-full overflow-hidden rounded-[2.5rem] bg-zinc-900 mb-10 border border-zinc-800 shadow-sm relative flex items-center justify-center">
      <img 
        src={imageSrc} 
        alt="Profile"
        className="w-full h-full object-cover z-10"
        onLoad={(e) => {
          (e.target as HTMLImageElement).style.opacity = '1';
        }}
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.style.display = 'none';
          const parent = target.parentElement;
          if (parent && !parent.querySelector('.img-error')) {
            const fileName = imageSrc.split('/').pop() || 'image';
            const msg = document.createElement('div');
            msg.className = 'img-error absolute inset-0 flex flex-col items-center justify-center p-8 text-center text-zinc-400 bg-zinc-900';
            msg.innerHTML = `
              <div class="mb-2 text-2xl">📷</div>
              <div class="text-xs font-bold uppercase tracking-tighter mb-1">图片加载失败</div>
              <p class="text-[10px] leading-tight text-zinc-500 text-center">
                请确保图片位于主文件夹<br/>
                且命名为 <span class="text-blue-600 font-mono font-bold">${fileName}</span>
              </p>
            `;
            parent.appendChild(msg);
          }
        }}
      />
    </div>
  );
};

export default ProfileHeader;