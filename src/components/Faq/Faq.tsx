'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { MaxWidthContainer } from '../MaxWidthContainer';

import faqs from '@/data/faqs.json';
import { motion } from 'framer-motion';

export const Faq = () => {
  return (
    <motion.section
      id="faq"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="px-5 lg:px-0 py-14"
    >
      <MaxWidthContainer>
        <div className="space-y-14">
          <p className="text-center text-2xl font-medium tracking-tight lg:text-4xl">Frequently Asked Questions</p>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq) => (
              <AccordionItem key={faq.question} value={faq.question}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </MaxWidthContainer>
    </motion.section>
  );
};
