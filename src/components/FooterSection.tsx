import FadeIn from './FadeIn';
import ContactButton from './ContactButton';
import { ArrowUp, Mail, Github, Linkedin, Instagram } from 'lucide-react';

const SOCIAL_LINKS = [
  { name: 'GitHub', icon: Github, href: 'https://github.com/wekaruppasamyg'},
  { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/karuppasamy-g21/'},
  { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/unique_sanjay_____________?igsi=MXJiZTB5YjZ1Z2R5cw%3D%3D'},
];

export default function FooterSection() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="contact"
      className="relative bg-[#0C0C0C] text-[#D7E2EA] pt-20 sm:pt-28 md:pt-36 pb-12 sm:pb-16 px-4 sm:px-8 md:px-12 border-t border-[#D7E2EA]/10 overflow-hidden"
    >
      {/* Background subtle glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full pointer-events-none opacity-15 blur-[120px]"
        style={{
          background: 'radial-gradient(circle, #B600A8 0%, #7621B0 50%, transparent 70%)',
        }}
      />

      <div className="max-w-6xl mx-auto flex flex-col gap-12 sm:gap-16 md:gap-20 relative z-10">
        {/* Main CTA */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-8 sm:gap-6">
          <div className="flex flex-col gap-3 sm:gap-4 max-w-xl">
            <FadeIn delay={0} y={20} as="div">
              <span className="text-[#D7E2EA]/60 uppercase tracking-widest text-xs sm:text-sm font-light">
                Have a project in mind?
              </span>
            </FadeIn>
            <FadeIn delay={0.1} y={25} as="div">
              <h2
                className="hero-heading font-black uppercase tracking-tight leading-[0.9]"
                style={{ fontSize: 'clamp(2.5rem, 7vw, 90px)' }}
              >
                Let&apos;s Create Together
              </h2>
            </FadeIn>
          </div>

          <FadeIn delay={0.2} y={20} as="div" className="flex-shrink-0">
            <ContactButton />
          </FadeIn>
        </div>

        {/* Email & Social Links */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pt-8 border-t border-[#D7E2EA]/10">
          <a
            href="mailto:contact@karuppasamy.dev"
            className="flex items-center gap-3 text-sm sm:text-base md:text-lg text-[#D7E2EA]/80 hover:text-white transition-colors duration-200 group"
          >
            <Mail className="w-5 h-5 text-[#B600A8] group-hover:scale-110 transition-transform" />
            <span>wekaruppasamyg23@gmail.com</span>
          </a>

          <div className="flex items-center gap-4 sm:gap-6 flex-wrap">
            {SOCIAL_LINKS.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs sm:text-sm text-[#D7E2EA]/70 hover:text-white transition-colors duration-200"
                  aria-label={item.name}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </a>
              );
            })}
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="flex flex-col-reverse xs:flex-row justify-between items-start xs:items-center gap-4 pt-6 text-xs text-[#D7E2EA]/50">
          <p>© {new Date().getFullYear()} Karuppasamy G. All rights reserved.</p>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-[#D7E2EA] transition-colors duration-200 self-end xs:self-auto group py-1"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
