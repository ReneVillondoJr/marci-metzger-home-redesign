import { AboutIntroSection } from './components/AboutIntroSection';
import { ContactSection } from './components/ContactSection';
import { CookieBanner } from './components/CookieBanner';
import { GetItSoldSection } from './components/GetItSoldSection';
import { HeroSection } from './components/HeroSection';
import { MlsSearchSection } from './components/MlsSearchSection';
import { PartnerLogosSection } from './components/PartnerLogosSection';
import { PhotoGallerySection } from './components/PhotoGallerySection';
import { ServicesSection } from './components/ServicesSection';
import { SocialLinksSection } from './components/SocialLinksSection';

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
