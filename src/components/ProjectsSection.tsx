import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FadeIn from './FadeIn';
import LiveProjectButton from './LiveProjectButton';

interface Project {
  number: string;
  category: 'Client' | 'Personal';
  name: string;
  liveUrl: string;
  col1Image1: string;
  col1Image2: string;
  col2Image: string;
}

const PROJECTS: Project[] = [
  {
    number: '01',
    category: 'Personal',
    name: 'Track AI',
    liveUrl: 'https://track-ai-tau.vercel.app',
    col1Image1: '/Project/Track Ai 1.png',
    col1Image2: '/Project/track ai 2.png',
    col2Image: '/Project/track ai 3.png',
    
  },
  {
    number: '02',
    category: 'Personal',
    name: 'AI-Based Proctoring',
    liveUrl: 'https://ai-proctoring-1-z1e6.onrender.com/',
    col1Image1: '/Project/Ai proc 1.png',
    col1Image2: '/Project/ai pro 2.png',
    col2Image: '/Project/Ai pro 3.png',
  },
  {
    number: '03',
    category: 'Personal',
    name: 'Quiz',
    liveUrl: 'https://webcoder2025.in/student/20234418/Quizway/',
    col1Image1: '/Project/quiz 1.png',
    col1Image2: '/Project/quiz 2.png',
    col2Image: '/Project/quiz 3.png',
  },
  {
    number: '04',
    category: 'Personal',
    name: 'Lapcom',
    liveUrl: 'https://webcoder2025.in/student/20234418/sanjay/',
    col1Image1: '/Project/lapcom 1.png',
    col1Image2: '/Project/lapcom 2.png',
    col2Image: '/Project/lapcom 3.png',
  },
  {
    number: '05',
    category: 'Personal',
    name: 'QR-Based Visitor Management System',
    liveUrl: 'https://webcoder2025.in/student/20234418/visitors/',
    col1Image1: '/Project/qr 1.png',
    col1Image2: '/Project/qrb 2.png',
    col2Image: '/Project/qr 3.png',
  },
  {
    number: '06',
    category: 'Personal',
    name: 'Recipe AI',
    liveUrl: 'https://recipe-ai-jade.vercel.app/',
    col1Image1: '/Project/recipe 1.png',
    col1Image2: '/Project/recipe 2.png',
    col2Image: '/Project/recipe 3.png',
  },
  {
    number: '07',
    category: 'Personal',
    name: 'Virtual Painting',
    liveUrl: 'https://virtual-painting.vercel.app/', // Paste Virtual Painting's live website URL here.
    col1Image1: '/Project/virtual 1.png',
    col1Image2: '/Project/virtual 2.png',
    col2Image: '/Project/virtal 3.png',
  },
];

const TOTAL_CARDS = PROJECTS.length;

interface ProjectCardProps {
  project: Project;
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'start start'],
  });

  const targetScale = 1 - (TOTAL_CARDS - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={cardRef}
      className="sticky mb-8 xs:mb-10 sm:mb-14 md:mb-16 h-[76vh] xs:h-[78vh] sm:h-[82vh] md:h-[85vh] max-h-[780px]"
      style={{
        top: `clamp(60px, calc(70px + ${index * 20}px), 140px)`,
      }}
    >
      <motion.div
        style={{ scale }}
        className="h-full rounded-[24px] xs:rounded-[32px] sm:rounded-[44px] md:rounded-[56px] border border-[#D7E2EA]/40 sm:border-2 sm:border-[#D7E2EA] bg-[#0C0C0C] p-3.5 xs:p-5 sm:p-7 md:p-8 flex flex-col justify-between gap-3 xs:gap-5 sm:gap-7 shadow-2xl overflow-hidden"
      >
        {/* Top row */}
        <div className="flex items-center justify-between gap-2 xs:gap-4 flex-wrap xs:flex-nowrap">
          <div className="flex items-center gap-2.5 xs:gap-4 sm:gap-6 min-w-0">
            <span
              className="text-[#D7E2EA] font-black leading-none select-none"
              style={{ fontSize: 'clamp(2.2rem, 6.5vw, 120px)' }}
            >
              {project.number}
            </span>
            <div className="flex flex-col gap-0.5 sm:gap-1 min-w-0">
              <span className="text-[#D7E2EA] uppercase tracking-widest text-[10px] xs:text-xs sm:text-sm opacity-60">
                {project.category}
              </span>
              <h3 className="text-[#D7E2EA] font-medium uppercase text-base xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl truncate">
                {project.name}
              </h3>
            </div>
          </div>

          <LiveProjectButton
            className="flex-shrink-0"
            href={project.liveUrl || undefined}
          />
        </div>

        {/* Bottom row: image grid */}
        <div className="flex gap-2 xs:gap-3 sm:gap-4 flex-1 min-h-0">
          <div className="flex flex-col gap-2 xs:gap-3 sm:gap-4 w-[40%] xs:w-[42%] min-h-0">
            <img
              src={project.col2Image}
              alt={`${project.name} preview 3`}
              loading="lazy"
              className="w-full object-cover rounded-[14px] xs:rounded-[20px] sm:rounded-[30px] md:rounded-[40px] flex-1 min-h-0"
            />
            <img
              src={project.col1Image2}
              alt={`${project.name} preview 2`}
              loading="lazy"
              className="w-full object-cover rounded-[14px] xs:rounded-[20px] sm:rounded-[30px] md:rounded-[40px] flex-1 min-h-0"
            />
          </div>
          <div className="flex w-[60%] xs:w-[58%] min-h-0">
            <img
              src={project.col1Image1}
              alt={`${project.name} preview 1`}
              loading="lazy"
              className="w-full h-full object-cover rounded-[14px] xs:rounded-[20px] sm:rounded-[30px] md:rounded-[40px]"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative bg-[#0C0C0C] rounded-t-[32px] sm:rounded-t-[48px] md:rounded-t-[60px] -mt-8 sm:-mt-12 md:-mt-14 z-10 px-4 sm:px-8 md:px-12 pt-16 sm:pt-24 pb-24 sm:pb-36"
    >
      <FadeIn delay={0} y={30} as="div">
        <h2
          className="hero-heading font-black uppercase text-center leading-none tracking-tight mb-10 xs:mb-14 sm:mb-20 md:mb-24"
          style={{ fontSize: 'clamp(2.5rem, 10vw, 150px)' }}
        >
          Projects
        </h2>
      </FadeIn>

      <div className="max-w-6xl mx-auto flex flex-col">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={project.number} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
