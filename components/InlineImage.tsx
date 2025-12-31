
import React from 'react';

interface InlineImageProps {
  src: string;
  alt: string;
}

const InlineImage: React.FC<InlineImageProps> = ({ src, alt }) => (
  <span className="inline-flex align-middle mx-1 -mt-1">
    <span className="relative h-[1.1em] aspect-[4/3] overflow-hidden rounded-md border border-zinc-200 shadow-sm bg-zinc-50">
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-full object-cover"
        onError={(e) => {
          (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=100";
        }}
      />
    </span>
  </span>
);

export default InlineImage;
