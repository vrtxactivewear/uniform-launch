import Hero from '@/components/Hero';
import Navigation from '@/components/Navigation';
import Concept from '@/components/Concept';
import UniformShowcase from '@/components/UniformShowcase';
import SizeGuide from '@/components/SizeGuide';
import NameAndNumber from '@/components/NameAndNumber';
import PurchaseSchedule from '@/components/PurchaseSchedule';
import RetailLocations from '@/components/RetailLocations';
import Partners from '@/components/Partners';
import Footer from '@/components/Footer';
import { defaultCampaign } from '@/content/campaign';

export default function Home() {
  const campaign = defaultCampaign;

  return (
    <>
      <Navigation campaign={campaign} />
      <main>
        <Hero campaign={campaign} />
        <Concept campaign={campaign} />
        {campaign.uniforms.map((uniform) => (
          <UniformShowcase key={uniform.id} uniform={uniform} campaign={campaign} />
        ))}
        <SizeGuide campaign={campaign} />
        <NameAndNumber campaign={campaign} />
        <PurchaseSchedule campaign={campaign} />
        <RetailLocations campaign={campaign} />
        <Partners campaign={campaign} />
        <Footer campaign={campaign} />
      </main>
    </>
  );
}
