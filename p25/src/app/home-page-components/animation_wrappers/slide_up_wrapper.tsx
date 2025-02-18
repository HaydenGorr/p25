'use client';

import { motion, MotionProps } from 'framer-motion';
import { ReactNode } from 'react';

interface BaseAnimationProps extends MotionProps {
    children: ReactNode;
    onExitComplete?: () => void;
  }
  
export default function SlideUpWrapper({
  children,
  onExitComplete,
  ...motionProps
}: BaseAnimationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
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