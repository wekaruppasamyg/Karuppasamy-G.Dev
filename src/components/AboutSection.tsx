import FadeIn from './FadeIn';
import ContactButton from './ContactButton';
import AnimatedText from './AnimatedText';

const MOON_ICON =
  'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png';
const OBJECT_3D =
  'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png';
const LEGO_ICON =
  'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png';
const GROUP_3D =
  'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png';

const ABOUT_TEXT =
"I’m a Full-Stack Web & AI Developer passionate about creating modern, innovative, and user-friendly digital experiences. I build responsive websites, web apps, AI-powered solutions, custom software, and interactive interfaces. I love transforming ideas into real-world digital products while continuously exploring new technologies. 🚀";
export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-[85vh] sm:min-h-screen flex items-center justify-center px-4 sm:px-8 md:px-12 py-16 sm:py-24 md:py-32 overflow-hidden"
    >
      {/* Decorative corner images */}
      <FadeIn
        delay={0.1}
        x={-60}
        y={0}
        duration={0.9}
        as="div"
        className="absolute top-[2%] sm:top-[4%] left-[1%] sm:left-[2%] md:left-[4%] w-[55px] xs:w-[75px] sm:w-[120px] md:w-[170px] lg:w-[210px] pointer-events-none select-none opacity-50 sm:opacity-80 md:opacity-100 z-0"
      >
        <img src={MOON_ICON} alt="Decorative moon 3D icon" loading="lazy" />
      </FadeIn>

      <FadeIn
        delay={0.25}
        x={-60}
        y={0}
        duration={0.9}
        as="div"
        className="absolute bottom-[3%] sm:bottom-[8%] left-[1%] sm:left-[5%] md:left-[8%] w-[50px] xs:w-[70px] sm:w-[100px] md:w-[140px] lg:w-[180px] pointer-events-none select-none opacity-50 sm:opacity-80 md:opacity-100 z-0"
      >
        <img src={OBJECT_3D} alt="Decorative 3D object" loading="lazy" />
      </FadeIn>

      <FadeIn
        delay={0.15}
        x={60}
        y={0}
        duration={0.9}
        as="div"
        className="absolute top-[2%] sm:top-[4%] right-[1%] sm:right-[2%] md:right-[4%] w-[55px] xs:w-[75px] sm:w-[120px] md:w-[170px] lg:w-[210px] pointer-events-none select-none opacity-50 sm:opacity-80 md:opacity-100 z-0"
      >
        <img src={LEGO_ICON} alt="Decorative lego 3D icon" loading="lazy" />
      </FadeIn>

      <FadeIn
        delay={0.3}
        x={60}
        y={0}
        duration={0.9}
        as="div"
        className="absolute bottom-[3%] sm:bottom-[8%] right-[1%] sm:right-[5%] md:right-[8%] w-[60px] xs:w-[80px] sm:w-[120px] md:w-[170px] lg:w-[220px] pointer-events-none select-none opacity-50 sm:opacity-80 md:opacity-100 z-0"
      >
        <img src={GROUP_3D} alt="Decorative 3D object group" loading="lazy" />
      </FadeIn>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center gap-8 xs:gap-10 sm:gap-14 md:gap-16 max-w-4xl mx-auto w-full">
        <FadeIn delay={0} y={30} as="div">
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(2.5rem, 10vw, 150px)' }}
          >
            About me
          </h2>
        </FadeIn>

        <div className="flex flex-col items-center gap-10 xs:gap-14 sm:gap-16 md:gap-20 w-full">
          <AnimatedText
            text={ABOUT_TEXT}
            className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[94%] sm:max-w-[560px] md:max-w-[620px] px-2"
            style={{ fontSize: 'clamp(0.95rem, 1.8vw, 1.35rem)' }}
          />

          <FadeIn delay={0.1} y={20} as="div">
            <ContactButton />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
