'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { MaxWidthContainer } from '../MaxWidthContainer';
import { Button } from '../ui/button';

export const HeroSection = () => {
  return (
    <MaxWidthContainer>
      <section className="space-y-10 xl:space-y-0">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col items-center mt-8 px-5 space-y-5 md:space-y-7 max-w-6xl mx-auto text-center xl:mt-16"
        >
          <div className="py-1 px-2 border rounded-md">
            <p className="text-sm text-muted-foreground">New & Updated Version 2.0 is live!</p>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
            Create a Job-Ready <span className="text-blue-500">Resume</span> in Minutes
          </h1>
          <h2 className="text-lg font-medium tracking-tight  md:text-xl">Fast, Easy, and Effective</h2>

          <div className="flex items-center space-x-4">
            <Link href="#prices" scroll>
              <Button>Start Free</Button>
            </Link>
            <Link href="#steps" scroll>
              <Button variant="secondary">More Info</Button>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="relative w-full aspect-[700/500]"
        >
          <Image alt="Resume" src="/animated_computer.svg" fill />
        </motion.div>
      </section>
    </MaxWidthContainer>
  );
};
