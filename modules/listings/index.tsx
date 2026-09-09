import { ThreeColumnGallery } from '@/modules/lets-move/components/threecolumnzoom';
import { FindYourHome } from './components/find-your-home';

export default function Listings() {
  return (
    <main>
      <FindYourHome />
      <ThreeColumnGallery />
    </main>
  );
}
