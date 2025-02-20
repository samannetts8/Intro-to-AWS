import { sections } from '@/lib/content';
import { SectionContent } from '@/components/section-content';

// Generate static params for all sections
export function generateStaticParams() {
  return sections.map((section) => ({
    sectionId: section.id,
  }));
}

export default function SectionPage({
  params,
}: {
  params: { sectionId: string };
}) {
  const currentIndex = sections.findIndex(s => s.id === params.sectionId);
  const section = sections[currentIndex];
  
  if (!section) {
    return null;
  }

  const prevSection = sections[currentIndex - 1];
  const nextSection = sections[currentIndex + 1];

  return <SectionContent section={section} prevSection={prevSection} nextSection={nextSection} />;
}