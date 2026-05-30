import { HeroSection } from '@/components/sections/HeroSection';
import { AboutPreview } from '@/components/sections/AboutPreview';
import { VisionMissionPreview } from '@/components/sections/VisionMissionPreview';
import { ProgramPreview } from '@/components/sections/ProgramPreview';
import { GalleryPreview } from '@/components/sections/GalleryPreview';
import { CollaborationCTA } from '@/components/sections/CollaborationCTA';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <VisionMissionPreview />
      <ProgramPreview />
      <GalleryPreview />
      <CollaborationCTA />
    </>
  );
}