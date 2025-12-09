'use client';
import React from 'react';
import { motion } from 'framer-motion';

type MotionSectionProps = React.PropsWithChildren<{
  id?: string;
  className?: string;
  style?: React.CSSProperties;
}>;

const MotionSection: React.FC<MotionSectionProps> = ({ id, className, style, children }) => {
  return (
    <motion.section
      id={id}
      className={className}
      style={style}
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