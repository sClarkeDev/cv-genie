'use client';

import { motion } from 'framer-motion';
import { MaxWidthContainer } from '../MaxWidthContainer';

interface SectionProps {
  title: string;
  image: React.ReactNode;
  points: string[];
  reverse?: boolean;
}

const Point = ({ text, index, reverse }: { text: string; index: number; reverse?: boolean }) => (
  <motion.div
    initial={{ opacity: 0, x: reverse ? -100 : 100 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: Number(`0.${index + 1}`) }}
    viewport={{ once: true }}
    className="flex items-center space-x-4"
  >
    <span className="hidden lg:block h-3 w-3 rounded-full bg-primary shadow flex-shrink-0" />
    <p className="text-muted-foreground">{text}</p>
  </motion.div>
);

export const Section = ({ title, image, points, reverse }: SectionProps) => {
  return (
    <section className="px-5 lg:px-0 py-16 lg:py-20">
      <MaxWidthContainer>
        <div
          className={`flex flex-col items-center space-y-10 lg:flex-row lg:space-y-0 lg:space-x-20 ${reverse && 'lg:flex-row-reverse lg:space-x-reverse'}`}
        >
          <motion.div
            initial={{ opacity: 0, x: reverse ? 100 : -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            {image}
          </motion.div>
          <div className="flex-1 space-y-6 lg:space-y-10 text-center lg:text-left">
            <motion.h2
              initial={{ opacity: 0, x: reverse ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-2xl font-medium tracking-tight lg:text-4xl"
            >
              {title}
            </motion.h2>

            <div className="flex flex-col items-center space-y-6 lg:space-y-8 lg:block">
              {points.map((point, index) => (
                <Point key={point} text={point} index={index} reverse={reverse} />
              ))}
            </div>
          </div>
        </div>
      </MaxWidthContainer>
    </section>
  );
};
