import { AboutIntroSection } from './AboutIntroSection';
import { ContactSection } from './ContactSection';
import { CookieBanner } from './CookieBanner';
import { GetItSoldSection } from './GetItSoldSection';
import { HeroSection } from './HeroSection';
import { MlsSearchSection } from './MlsSearchSection';
import { PartnerLogosSection } from './PartnerLogosSection';
import { PhotoGallerySection } from './PhotoGallerySection';
import { ServicesSection } from './ServicesSection';
import { SiteFooter } from './SiteFooter';
import { SiteHeader } from './SiteHeader';
import { SocialLinksSection } from './SocialLinksSection';

export function HomePage() {
  return (
    <>
      <SiteHeader />

      <main>
        <HeroSection />
        <AboutIntroSection />
        <GetItSoldSection />
        <MlsSearchSection />
        <PartnerLogosSection />
        <PhotoGallerySection />
        <ServicesSection />
        <SocialLinksSection />

        <ContactSection />
      </main>

      <SiteFooter />
      <CookieBanner />
    </>
  );
}
