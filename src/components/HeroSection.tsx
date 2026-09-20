import FadeIn from './FadeIn';
import Magnet from './Magnet';
import ContactButton from './ContactButton';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Contact', href: '#contact' },
];

const PORTRAIT_URL = '/sanjayG.png';

export default function HeroSection() {
  return (
    <section
      className="relative min-h-[100dvh] h-[100dvh] flex flex-col justify-between overflow-hidden"
      style={{ overflowX: 'clip' }}
    >
      {/* Navbar */}
      <FadeIn delay={0} y={-20} as="nav" className="relative z-30">
        <div className="flex justify-between items-center gap-1 xs:gap-2 px-3 xs:px-4 sm:px-8 md:px-12 pt-4 sm:pt-6 md:pt-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[#D7E2EA] font-medium uppercase tracking-wide sm:tracking-wider text-[10px] xs:text-xs sm:text-base md:text-lg lg:text-xl py-1 px-1 sm:px-2.5 transition-opacity duration-200 hover:opacity-70 active:opacity-50"
            >
              {link.label}
            </a>
          ))}
        </div>
      </FadeIn>

      {/* Heading placed at top below navbar */}
      <div className="w-full px-3 xs:px-4 sm:px-8 md:px-12 relative z-10 select-none mt-3 xs:mt-5 sm:mt-6 md:mt-8">
        <FadeIn delay={0.15} y={30} as="div">
          <h1 className="hero-heading font-black uppercase tracking-tight leading-[0.9] text-center w-full select-none text-[10vw] xs:text-[9vw] sm:text-[6.8vw] md:text-[6.4vw] lg:text-[6.8vw]">
            <span className="block sm:inline">Hi, i&apos;m </span>
            <span className="block sm:inline">Karuppasamy G</span>
          </h1>
        </FadeIn>
      </div>

      {/* Centered 3D Portrait - anchored at bottom */}
      <div className="absolute inset-x-0 bottom-0 z-10 flex justify-center items-end pointer-events-none">
        <FadeIn
          delay={0.35}
          y={40}
          duration={0.85}
          as="div"
          className="w-[190px] xs:w-[230px] sm:w-[310px] md:w-[370px] lg:w-[420px] xl:w-[460px] max-w-[80vw]"
        >
          <Magnet
            padding={120}
            strength={3}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
            className="pointer-events-auto"
          >
            <img
              src={PORTRAIT_URL}
              alt="Karuppasamy G portrait"
              className="w-full h-auto drop-shadow-2xl mx-auto block select-none"
              loading="eager"
            />
          </Magnet>
        </FadeIn>
      </div>

      {/* Bottom bar */}
      <div className="flex justify-between items-end gap-3 sm:gap-6 px-4 sm:px-8 md:px-12 pb-5 sm:pb-8 md:pb-10 relative z-20">
        <FadeIn delay={0.35} y={20} as="div">
          <p
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[130px] xs:max-w-[170px] sm:max-w-[220px] md:max-w-[260px]"
            style={{ fontSize: 'clamp(0.68rem, 1.1vw, 1.25rem)' }}
          >
a developer focused on crafting innovative websites, AI-powered solutions, and remarkable digital experiences
          </p>
        </FadeIn>

        <FadeIn delay={0.5} y={20} as="div">
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
}
