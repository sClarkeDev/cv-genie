'use client';

import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';
import { MaxWidthContainer } from '../MaxWidthContainer';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';

const steps: { title: string; points: string[]; price: string; description: string }[] = [
  {
    title: 'Basic',
    points: ['Basic editor', 'Export resumes in PDF format', 'Basic support'],
    price: 'Free',
    description: 'Access our intuitive editor and export your resumes in PDF format.'
  },
  {
    title: 'Recommended',
    points: ['Advanced AI Assisted editor', 'Export resumes in multiple formats', 'Priority support'],
    price: '£4.99',
    description: 'Unlock all features to create your standout resume and export in all available formats.'
  },
  {
    title: 'Unlimited',
    points: ['All available features', 'Unlimited resume creations', 'Top priority support'],
    price: '£49.99',
    description: 'Enjoy unlimited resume creations for your students.'
  }
];

const Price = ({
  title,
  price,
  points,
  description,
  index
}: {
  title: string;
  price: string;
  points: string[];
  description: string;
  index: number;
}) => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.5, delay: Number(`0.${(index + 1) * 2}`) }}
    viewport={{ once: true }}
    className="h-full w-full"
  >
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-2xl">{title}</CardTitle>

          {index === 1 && <Star className="h-5 w-5 text-primary" />}
        </div>

        <CardDescription>{description}</CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        <p className="text-3xl font-semibold tracking-tight">{price}</p>

        <div className="space-y-4">
          {points.map((point) => (
            <div key={point} className="flex items-center space-x-2">
              <Check className="h-4 w-4 text-green-500" />

              <p>{point}</p>
            </div>
          ))}
        </div>
      </CardContent>

      <CardFooter className="w-full">
        <Button className="w-full">Start Now</Button>
      </CardFooter>
    </Card>
  </motion.div>
);

export const Prices = () => {
  return (
    <section id="prices" className="px-5 lg:px-0 py-14">
      <MaxWidthContainer>
        <div className="flex flex-col space-y-14">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex-1 flex flex-col items-center justify-center space-y-4 text-center"
          >
            <h3 className="text-2xl font-medium tracking-tight lg:text-4xl">Our Prices</h3>
            <p className="text-muted-foreground">A package suitable for every usecase</p>
          </motion.div>
          <div className="flex-1 grid gap-14 lg:grid-cols-3">
            {steps.map((step, index) => (
              <Price key={step.title} index={index} {...step} />
            ))}
          </div>
        </div>
      </MaxWidthContainer>
    </section>
  );
};
