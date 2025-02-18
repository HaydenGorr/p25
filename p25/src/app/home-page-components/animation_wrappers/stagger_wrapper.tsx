'use client';

import { motion, MotionProps } from 'framer-motion';
import { ReactNode } from 'react';

interface BaseAnimationProps extends MotionProps {
    children: ReactNode;
    onExitComplete?: () => void;
  }
  
export default function StaggerWrapper ({
  children,
  onExitComplete,
  ...motionProps
}: BaseAnimationProps) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={{
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.2,
          },
        },
        hidden: {
          opacity: 0,
        },
      }}
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