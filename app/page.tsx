import { sections } from '@/lib/content';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="max-w-7xl mx-auto p-6">
        <div className="prose dark:prose-invert max-w-none">
          <h1 className="text-4xl font-bold mb-6">Documentation</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Welcome to our comprehensive documentation. Explore the sections below to learn more.
          </p>
          
          <div className="space-y-12">
            {sections.map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-16">
                <div className="grid lg:grid-cols-[300px,1fr] gap-8">
                  {/* Overview Column */}
                  <div className="lg:sticky lg:top-8 lg:self-start">
                    <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
                  </div>
                  
                  {/* Content Column */}
                  <div>
                    <div className="bg-card rounded-lg p-6 shadow-sm">
                      {section.content.split('\n\n').map((paragraph, index) => (
                        <p key={index} className="mb-4 last:mb-0">
                          {paragraph}
                        </p>
                      ))}
                    </div>

                    {/* Media Section */}
                    {section.media && section.media.length > 0 && (
                      <div className="mt-6 space-y-6">
                        {section.media.map((media, index) => (
                          <div key={index} className="rounded-lg overflow-hidden">
                            {media.type === 'image' ? (
                              <img
                                src={media.url}
                                alt={media.caption || ''}
                                className="w-full h-auto"
                              />
                            ) : (
                              <video
                                src={media.url}
                                controls
                                className="w-full"
                                poster="/video-placeholder.jpg"
                              />
                            )}
                            {media.caption && (
                              <p className="text-sm text-muted-foreground mt-2">
                                {media.caption}
                              </p>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}