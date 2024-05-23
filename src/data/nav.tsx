import { ArrowRight, FileQuestion, PoundSterling } from 'lucide-react';

export const nav = [
  {
    name: 'Features',
    path: '#features',
    icon: <ArrowRight className="h-6 w-6" />
  },
  {
    name: 'Prices',
    path: '#prices',
    icon: <PoundSterling className="h-6 w-6" />
  },
  {
    name: 'FAQ',
    path: '#faq',
    icon: <FileQuestion className="h-6 w-6" />
  }
];
