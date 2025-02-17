'use client';

import { motion, MotionProps } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimationWrapperProps extends MotionProps {
  children: ReactNode;
  onExitComplete?: () => void; // Optional callback
}

export default function AnimationWrapper({
  children,
  onExitComplete,
  ...motionProps
}: AnimationWrapperProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{
        opacity: 0,
        y: 20,
        transition: { duration: 0.3, ease: 'easeInOut' },
      }}
      onAnimationComplete={(definition) => {
        if (definition === 'exit' && onExitComplete) {
          onExitComplete();
        }
      }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
}
