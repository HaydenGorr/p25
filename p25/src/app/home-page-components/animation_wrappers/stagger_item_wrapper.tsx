'use client';

import { motion, MotionProps } from 'framer-motion';
import { ReactNode } from 'react';

interface BaseAnimationProps extends MotionProps {
    children: ReactNode;
    onExitComplete?: () => void;
  }
  
export default function StaggerItem ({ children, ...motionProps }: BaseAnimationProps) {
  return (
    <motion.div
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 20 },
      }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
};
