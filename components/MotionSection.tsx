'use client';
import React from 'react';
import { motion } from 'framer-motion';

type MotionSectionProps = React.PropsWithChildren<{
  id?: string;
  className?: string;
}>;

const MotionSection: React.FC<MotionSectionProps> = ({ id, className, children }) => {
  return (
    <motion.section
      id={id}
      className={className}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {children}
    </motion.section>
  );
};

export default MotionSection;