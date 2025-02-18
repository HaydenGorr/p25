'use client';

import { motion, MotionProps } from 'framer-motion';
import { ReactNode } from 'react';

interface BaseAnimationProps extends MotionProps {
    children: ReactNode;
    onExitComplete?: () => void;
  }
  
export default function FadeInWrapper({
  children,
  onExitComplete,
  ...motionProps
}: BaseAnimationProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      onAnimationComplete={(definition) => {
        if (definition === 'exit' && onExitComplete) {
          onExitComplete();
        }
      }}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
};
