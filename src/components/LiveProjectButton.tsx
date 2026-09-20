interface LiveProjectButtonProps {
  className?: string;
  href?: string;
  onClick?: () => void;
}

export default function LiveProjectButton({ className = '', href, onClick }: LiveProjectButtonProps) {
  const baseClasses = `rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-wider sm:tracking-widest px-4 py-2 sm:px-6 sm:py-2.5 md:px-8 md:py-3 text-xs sm:text-sm md:text-base transition-all duration-200 active:scale-95 hover:bg-[#D7E2EA]/15 whitespace-nowrap inline-flex items-center justify-center ${className}`;

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={baseClasses}>
        Live Project
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={baseClasses}>
      Live Project
    </button>
  );
}
