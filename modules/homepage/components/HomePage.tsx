import { AboutIntroSection } from './AboutIntroSection';
import { ContactSection } from './ContactSection';
import { CookieBanner } from './CookieBanner';
import { GetItSoldSection } from './GetItSoldSection';
import { HeroSection } from './HeroSection';
import { MlsSearchSection } from './MlsSearchSection';
import { PartnerLogosSection } from './PartnerLogosSection';
import { PhotoGallerySection } from './PhotoGallerySection';
import { ServicesSection } from './ServicesSection';
import { SocialLinksSection } from './SocialLinksSection';

export function HomePage() {
  return (
    <>
      <main>
        <HeroSection />
        <GetItSoldSection />
        <AboutIntroSection />
        <MlsSearchSection />
        <PartnerLogosSection />
        <PhotoGallerySection />
        <ServicesSection />
        <SocialLinksSection />
        <ContactSection />
      </main>

      <CookieBanner />
    </>
  );
}
