'use client';

import { motion, MotionProps } from 'framer-motion';
import { ReactNode } from 'react';

interface BaseAnimationProps extends MotionProps {
    children: ReactNode;
    onExitComplete?: () => void;
  }
  
export default function ScaleInWrapper({
  children,
  onExitComplete,
  ...motionProps
}: BaseAnimationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
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