import { useEffect, useRef, useState } from 'react';

const PROJECT_IMAGES = [
  { src: '/images/Ai-Proctoring.png', title: 'AI Proctoring' },
  { src: '/images/Ai-Recipe.png', title: 'AI Recipe Generator' },
  { src: '/images/Lapcom.png', title: 'Lapcom E-Commerce' },
  { src: '/images/Qr-Based vistor Management System.png', title: 'QR Visitor Management' },
  { src: '/images/Track-Ai.png', title: 'Track AI Analytics' },
      { src: '/images/virtal 3.png',title:'Virtual Painting'},
    { src: '/images/quiz 2.png',title:'Quiz way'},

];

// Repeat images to create a rich continuous marquee
const ROW1_SOURCE = [...PROJECT_IMAGES, ...PROJECT_IMAGES];
const ROW2_SOURCE = [...PROJECT_IMAGES.slice(3), ...PROJECT_IMAGES.slice(0, 3), ...PROJECT_IMAGES];

const ROW1_IMAGES = [...ROW1_SOURCE, ...ROW1_SOURCE, ...ROW1_SOURCE];
const ROW2_IMAGES = [...ROW2_SOURCE, ...ROW2_SOURCE, ...ROW2_SOURCE];

function Tile({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative group rounded-xl sm:rounded-2xl overflow-hidden flex-shrink-0 w-[240px] h-[150px] xs:w-[280px] xs:h-[175px] sm:w-[340px] sm:h-[210px] md:w-[400px] md:h-[250px] lg:w-[440px] lg:h-[270px] border border-[#D7E2EA]/10 shadow-xl bg-[#141414]">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="w-full h-full object-cover select-none transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3 sm:p-4">
        <span className="text-white text-xs sm:text-sm font-medium tracking-wide">
          {alt}
        </span>
      </div>
    </div>
  );
}

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let animationFrameId: number;
    const handleScroll = () => {
      animationFrameId = requestAnimationFrame(() => {
        const section = sectionRef.current;
        if (!section) return;
        const sectionTop = section.getBoundingClientRect().top + window.scrollY;
        const raw = (window.scrollY - sectionTop + window.innerHeight) * 0.28;
        setOffset(raw);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#0C0C0C] pt-14 xs:pt-20 sm:pt-28 md:pt-36 pb-8 sm:pb-12 md:pb-16 overflow-hidden select-none"
    >
      <div className="flex flex-col gap-3 sm:gap-4 md:gap-5">
        {/* Row 1 - moves right on scroll */}
        <div
          className="flex gap-3 sm:gap-4 md:gap-5"
          style={{
            transform: `translateX(${offset - 250}px)`,
            willChange: 'transform',
          }}
        >
          {ROW1_IMAGES.map((img, i) => (
            <Tile key={`row1-${i}`} src={img.src} alt={img.title} />
          ))}
        </div>

        {/* Row 2 - moves left on scroll */}
        <div
          className="flex gap-3 sm:gap-4 md:gap-5"
          style={{
            transform: `translateX(${-(offset - 250)}px)`,
            willChange: 'transform',
          }}
        >
          {ROW2_IMAGES.map((img, i) => (
            <Tile key={`row2-${i}`} src={img.src} alt={img.title} />
          ))}
        </div>
      </div>
    </section>
  );
}
