
export type MediaContent = {
  type: 'image' | 'video';
  url: string;
  caption?: string;
};

export type Section = {
  id: string;
  title: string;
  content: string;
  content_2?: string;
  content_3?: string;
  content_4?: string;
  media?: MediaContent[];
  content_order?: string[];
};

export const sections: Section[] = [
  {
    id: 'Background',
    title: 'Bit of Background 📃',
    content: `Amazon Web Services (AWS) is the world’s leading cloud platform, offering a vast range of tools to build, host, and scale applications without needing to manage physical infrastructure.`,
    content_2: `- `,
    content_3: `Amazon Wefasdfasdftools to build, host, and scale applications without needing to manage physical infrastructure.

    Our platform is designed with simplicity and power in mind, making it accessible for beginners while providing advanced features for experienced users.`,
    media: [
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
        caption: 'Modern development environment'
      }
    ],
    content_order: ['content', 'content_2', 'content_3','media']
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