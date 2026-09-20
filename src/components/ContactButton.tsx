interface ContactButtonProps {
  className?: string;
  onClick?: () => void;
}

export default function ContactButton({ className = '', onClick }: ContactButtonProps) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.location.href = 'mailto:contact@karuppasamy.dev';
      }
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`rounded-full px-5 py-2.5 xs:px-7 xs:py-3 sm:px-9 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base text-white font-medium uppercase tracking-wider sm:tracking-widest transition-transform duration-200 active:scale-95 hover:scale-[1.02] outline outline-2 outline-white [outline-offset:-3px] whitespace-nowrap inline-flex items-center justify-center ${className}`}
      style={{
        background:
          'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
        boxShadow:
          '0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset',
      }}
    >
      Contact Me
    </button>
  );
}
