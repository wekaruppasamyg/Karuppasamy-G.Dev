import { useRef } from 'react';
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

interface CharProps {
  char: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
}

function Char({ char, index, total, progress }: CharProps) {
  // Each character owns a slice of the overall 0-1 scroll progress so that
  // characters reveal left-to-right as the paragraph scrolls through view.
  const start = index / total;
  const end = start + 1 / total;
  const opacity = useTransform(progress, [start, end], [0.2, 1]);

  return (
    <span style={{ position: 'relative', display: 'inline-block' }}>
      {/* invisible placeholder preserves layout/width */}
      <span style={{ visibility: 'hidden' }}>{char === ' ' ? '\u00A0' : char}</span>
      <motion.span
        style={{ position: 'absolute', left: 0, top: 0, opacity }}
        aria-hidden="true"
      >
        {char === ' ' ? '\u00A0' : char}
      </motion.span>
    </span>
  );
}

/**
 * Renders `text` split into individual characters, each fading from 0.2 to 1
 * opacity as the paragraph scrolls through the viewport.
 */
export default function AnimatedText({ text, className, style }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  });

  const characters = Array.from(text);

  return (
    <p ref={ref} className={className} style={style} aria-label={text}>
      {characters.map((char, i) => (
        <Char
          key={`${char}-${i}`}
          char={char}
          index={i}
          total={characters.length}
          progress={scrollYProgress}
        />
      ))}
    </p>
  );
}
