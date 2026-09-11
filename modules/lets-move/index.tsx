import { ContactSection } from '@/modules/homepage/components/ContactSection';
import { MlsSearchSection } from '@/modules/homepage/components/MlsSearchSection';
import { ThreeColumnGallery } from '@/modules/lets-move/components/threecolumnzoom';

export default function LetMove() {
  return (
    <>
      <ThreeColumnGallery />
      <MlsSearchSection />
      <ContactSection title='CONTACT US' />
    </>
  );
}
