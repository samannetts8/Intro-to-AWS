import React, { Fragment } from "react";
import { sections } from "@/lib/content";

const ContentSection = ({ section = {} }) => {
  // Early return if section is not provided
  if (!section || !section.content_order) {
    return (
      <div className="p-4 text-muted-foreground italic">Content coming soon!</div>
    );
  }

  // Helper function to render content blocks
  const renderContent = (contentKey) => {
    if (!section[contentKey]) return null;

    return (
      <div className="bg-card rounded-lg p-6 shadow-sm mb-6">
        {section[contentKey].split("\n\n").map((paragraph, index) => (
          <p key={index} className="mb-4 last:mb-0">
            {paragraph}
          </p>
        ))}
      </div>
    );
  };

  // Helper function to render media section
  const renderMedia = () => {
    if (!section.media || section.media.length === 0) return null;

    return (
      <div className="space-y-6">
        {section.media.map((media, index) => (
          <div key={index} className="rounded-lg overflow-hidden">
            {media.type === "image" ? (
              <img
                src={media.url}
                alt={media.caption || ""}
                className="w-full h-auto"
              />
            ) : (
              <iframe
              src={media.url}
              title={media.caption || "Video"}
              className="w-full h-64" // Set the height and width here
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen

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
    );
  };

  return (
    <div>
      {section.content_order.map((contentKey) => (
        <React.Fragment key={contentKey}>
          {contentKey === "media" ? renderMedia() : renderContent(contentKey)}
        </React.Fragment>
      ))}
    </div>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="lg:pl-64">
        <div className="max-w-7xl mx-auto p-6">
          <div className="prose dark:prose-invert max-w-none">
            <div className="flex justify-center">
              <h1 className="text-6xl font-bold mb-6">ABCs of AWS</h1>
            </div>
            <p className="text-xl text-muted-foreground mb-8">
              <a>
                Deploying your first project on <strong>AWS</strong> can feel
                like stepping into a whole new world—but don't worry, this guide
                has got you covered! <br />
                <br />
                AWS currently offers 100+ different cloud services 🤯 so for
                this guide, we'll be focusing on the fundamentals -
                specifically, how to deploy your web app to AWS!
                <br />
                <br />
                So, whether you're deploying via...
                <br />
                <br />
                ➡️ A Docker Container
                <br/>
                ➡️ Pushing a repo from GitHub
                <br/>
                ➡️ Uploading to AWS Elastic Beanstalk
                <br/> <br/>

                ... this guide should have you covered!</a>
              <br />
              <br />
              <a className="text-3xl">🟢Let's dive in!🟢</a>
            </p>
            <div className="space-y-12">
              {sections.map((section) => (
                <section
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-24"
                >
                  <div className="grid lg:grid-cols-[300px,1fr] gap-8">
                    {/* Overview Column */}
                    <div>
                      <h2 className="text-2xl font-bold mb-4">
                        {section.title}
                      </h2>
                    </div>
                    {/* Content Column */}
                    <div>
                      <ContentSection section={section} />
                    </div>
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
