import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedSectionProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale' | 'fade';
  delay?: number;
  duration?: number;
  className?: string;
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({ 
  children, 
  direction = 'up', 
  delay = 0, 
  duration = 0.6,
  className = ''
}) => {
  const getInitial = () => {
    switch (direction) {
      case 'down': return { y: -50, opacity: 0 };
      case 'left': return { x: 50, opacity: 0 };
      case 'right': return { x: -50, opacity: 0 };
      case 'scale': return { scale: 0.8, opacity: 0 };
      case 'fade': return { opacity: 0 };
      default: return { y: 50, opacity: 0 };
    }
  };

  const getAnimate = () => {
    switch (direction) {
      case 'scale': return { scale: 1, opacity: 1 };
      case 'fade': return { opacity: 1 };
      default: return { x: 0, y: 0, opacity: 1 };
    }
  };

  return (
    <motion.div
      className={className}
      initial={getInitial()}
      whileInView={getAnimate()}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration, 
        delay,
        type: "spring",
        stiffness: 100,
        damping: 20
      }}
    >
      {children}
    </motion.div>
  );
};

// Cursor follower component
export const CursorFollower: React.FC = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const [isHovering, setIsHovering] = React.useState(false);
  const cursorRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + 'px';
        cursorRef.current.style.top = e.clientY + 'px';
        setIsVisible(true);
      }
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    const handleElementHover = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.matches('button, a, [role="button"], .hoverable')) {
        setIsHovering(true);
      }
    };

    const handleElementLeave = () => setIsHovering(false);

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseover', handleElementHover);
    document.addEventListener('mouseout', handleElementLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseover', handleElementHover);
      document.removeEventListener('mouseout', handleElementLeave);
    };
  }, []);

  return (
    <motion.div
      ref={cursorRef}
      className={`fixed pointer-events-none z-50 mix-blend-difference ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ transform: 'translate(-50%, -50%)' }}
      animate={{
        scale: isHovering ? 2 : 1,
        backgroundColor: isHovering ? '#ffffff' : 'rgba(255, 255, 255, 0.5)'
      }}
      transition={{ type: "spring", stiffness: 500, damping: 28 }}
    >
      <div className="w-4 h-4 bg-white rounded-full" />
    </motion.div>
  );
};