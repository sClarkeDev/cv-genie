import { Faq } from '@/components/Faq';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/HeroSection';
import { Prices } from '@/components/Prices';
import { Section } from '@/components/Section';
import { Steps } from '@/components/Steps';
import { features } from '@/data/features';

const Home = () => {
  return (
    <main className="overflow-hidden">
      <HeroSection />

      <Steps />

      <div id="features" className="[&>*]:border-t">
        {features.map((feature) => (
          <Section key={feature.title} {...feature} />
        ))}

        <Prices />

        <Faq />

        <Footer />
      </div>
    </main>
  );
};

export default Home;
