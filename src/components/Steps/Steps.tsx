'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Download, Edit2, Stars } from 'lucide-react';
import { MaxWidthContainer } from '../MaxWidthContainer';
import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card';

const steps: { title: string; description: string; icon: React.ReactNode }[] = [
  {
    title: 'Select a template',
    description: 'Select from one of our existing templates or upload your current resume for editing.',
    icon: <Edit2 className="h-10 w-10 text-primary" />
  },
  {
    title: 'Edit',
    description: 'Using our predefined templates and ai assisted text editor you can create your cv with ease.',
    icon: <Stars className="h-10 w-10 text-primary" />
  },
  {
    title: 'Download',
    description: 'Export and download your CV as a PDF or DOCX file.',
    icon: <Download className="h-10 w-10 text-primary" />
  }
];

const Step = ({
  title,
  description,
  icon,
  step
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  step: number;
}) => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.5, delay: Number(`0.${step * 2}`) }}
    viewport={{ once: true }}
  >
    <div className="relative h-full w-full">
      <Card className="flex flex-col items-center justify-center pt-2">
        <CardHeader className="flex flex-col items-center justify-center text-center space-y-3">
          {icon}
          <CardTitle className="!mt-4">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
      </Card>
    </div>
  </motion.div>
);

export const Steps = () => {
  return (
    <MaxWidthContainer>
      <section id="steps" className="flex flex-col px-5 space-y-14 pb-14 mt-14 lg:mt-0 lg:pb-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex-1 flex flex-col items-center justify-center space-y-4 text-center"
        >
          <h3 className="text-center text-2xl font-medium tracking-tight lg:text-4xl">As easy as 1,2,3</h3>
          <p className="text-muted-foreground">Creating a professional resume has never been easier</p>
        </motion.div>
        <div className="flex-1 grid gap-5 lg:gap-10 lg:grid-cols-3">
          <AnimatePresence>
            {steps.map((step, index) => (
              <Step
                key={step.title}
                step={index + 1}
                title={step.title}
                description={step.description}
                icon={step.icon}
              />
            ))}
          </AnimatePresence>
        </div>
      </section>
    </MaxWidthContainer>
  );
};
