
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
    content_2: `Before we dive into the nuts and bolts of AWS deployment, let’s take a step back and look at how we got here. Once upon a time, deploying an application meant buying physical servers, setting them up in a data center, and praying they wouldn’t crash under load. Then came the cloud—offering virtual servers, scalable infrastructure, and the ability to deploy applications from anywhere. AWS led the charge, and today, it powers everything from tiny side projects to the world’s biggest tech giants.`,
    media: [
      {
        type: 'image',
        url: '/assets/imgs/aws_services.png',
        caption: 'List of AWS services'
      }
    ],
    content_order: ['content','media', 'content_2', 'content_3']
  },
  {
    id: 'SetUp',
    title: 'Getting Started',
    content: ``,
    media: [
      {
        type: 'video',
        url: 'https://www.youtube.com/embed/JIbIYCM48to',
        caption: 'Quick start guide'
      }
    ],content_order: ['content','media', 'content_2', 'content_3']
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