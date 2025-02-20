export type MediaContent = {
  type: 'image' | 'video';
  url: string;
  caption?: string;
};

export type Section = {
  id: string;
  title: string;
  content: string;
  media?: MediaContent[];
};

export const sections: Section[] = [
  {
    id: 'introduction',
    title: 'Introduction',
    content: `Welcome to our comprehensive documentation. This guide will help you understand our platform and get started quickly.

    Our platform is designed with simplicity and power in mind, making it accessible for beginners while providing advanced features for experienced users.`,
    media: [
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
        caption: 'Modern development environment'
      }
    ]
  },
  {
    id: 'getting-started',
    title: 'Getting Started',
    content: `Let's begin with the basics. This section will guide you through the initial setup process and core concepts.

    Follow our step-by-step guide to ensure a smooth onboarding experience. We'll cover everything from account creation to basic configuration.`,
    media: [
      {
        type: 'video',
        url: 'https://example.com/getting-started-guide.mp4',
        caption: 'Quick start guide'
      }
    ]
  },
  {
    id: 'features',
    title: 'Key Features',
    content: `Explore our platform's powerful features that help you achieve more. From advanced analytics to seamless integrations, we provide all the tools you need.

    Each feature is designed with real-world use cases in mind, ensuring you can solve complex problems efficiently.`,
    media: [
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
        caption: 'Analytics dashboard'
      }
    ]
  },
  {
    id: 'best-practices',
    title: 'Best Practices',
    content: `Learn how to make the most of our platform with these recommended best practices and optimization tips.

    We've compiled these guidelines based on years of experience and feedback from our user community.`,
    media: [
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40',
        caption: 'Team collaboration'
      }
    ]
  }
] as const;

export type SectionId = typeof sections[number]['id'];