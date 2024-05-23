import Image from 'next/image';

export const features = [
  {
    title: 'Powerful Document Editor',
    points: [
      'Comprehensive suite of tools to refine and tailor your CV effortlessly.',
      'Easily import your existing CV into the editor for swift modifications and updates.',
      'Leverage built-in artificial intelligence for intelligent suggestions and enhancements, streamlining the editing process.'
    ],
    image: <Image src="/document.svg" height={300} width={300} alt="document" className="mx-auto" />
  },
  {
    title: 'Artificial Intelligence',
    points: [
      'Automatically generate content for your resume based on your profession, experience, and industry standards.',
      'Let AI optimize the layout and formatting of your resume for maximum impact and readability.',
      'Receive tailored suggestions for skills, experiences, and achievements.'
    ],
    image: <Image src="/ai.svg" height={400} width={400} alt="ai" className="mx-auto" />,
    reverse: true
  },
  {
    title: 'Educational Plans',
    points: [
      'Unleash your students potential with unlimited resume creations and cutting-edge AI assistance.',
      'Tailored for educational institutions of all kinds, from schools to universities.',
      'Enjoy exclusive top-tier support from our seasoned team of experts.'
    ],
    image: <Image src="/class.svg" height={400} width={400} alt="ai" className="mx-auto" />
  }
];
