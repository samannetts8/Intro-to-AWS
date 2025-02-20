
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
  media_2?: MediaContent[];
  content_order?: string[];
};

export const sections: Section[] = [
  {
    id: 'Background',
    title: 'Bit of Background 📃',
    content: `Amazon Web Services (AWS) is the world’s leading cloud platform, offering a vast range of tools to build, host, and scale applications without needing to manage physical infrastructure.`,
    content_2: `Before we dive into the nuts and bolts of AWS deployment, let’s take a step back and look at how we got here. Once upon a time, deploying an application meant buying physical servers, setting them up in a data center, and praying they wouldn’t crash under load. \n\nThen came the cloud—offering virtual servers, scalable infrastructure, and the ability to deploy applications from anywhere. AWS led the charge, and today, it powers everything from tiny side projects to the world’s biggest tech giants.`,
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
    title: 'Getting Started ⚙️',
    content: `Before we dive into deploying your application on AWS, let’s make sure you have everything you need!\n\n No matter which approach you take—Docker Containers, GitHub Repositories, or AWS Elastic Beanstalk—there is something you'll need to set up first!\n\n
    🎯 An AWS Account`,
    content_2: `Click "Create an AWS Account." If you already have an Amazon account (for shopping, etc.), you can log in and use it for AWS. Otherwise, create a new account.\n\n
    ⚠️Even if you’re using AWS Free Tier, you must enter a credit or debit card for verification. AWS may place a temporary $1 charge to confirm the card, but it will be refunded.⚠️\n\n\
    
    AWS offers several support plans:

     ➡️ Basic (Free) – Ideal for personal projects and learning.\n\n
     ➡️ Developer ($29/month) – Good for non-production workloads.\n\n
     ➡️ Business & Enterprise (More expensive) – For critical applications.\n\n

    For now, select Basic Support (Free) unless you need advanced support.`,
    content_3: `After successfully registering a payment method and verifying your account, you should meet the above screen. Congratulations!! 🥳🎆\n\n
    
    Now, you should 'Go to the AWS Management Console'\n\n
    \n\n
    💡Tip: Bookmark this page, you'll probably be using it frequently!\n\n
    💡Tip: For good practice, set up Multi-Factor Authentication (MFA) for additional security. More information can be found here: \n\nhttps://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_mfa.html
    `,
    media: [
      {
        type: 'image',
        url: '/assets/imgs/aws_sign_up_1.png',
        caption: 'Amazon Sign Up Page [https://aws.amazon.com/free/]'
      }
    ],
    media_2: [
      {
        type: 'image',
        url: '/assets/imgs/aws_sign_up_2.png',
        caption: 'Whhooppeee!'
      }
    ],
      content_order: ['content','media','content_2','media_2', 'content_3']
  },
  {
    id: 'features',
    title: 'Key Features',
    content: `Explore our platform's powerful features that help you achieve more. From advanced analytics to seamless integrations, we provide all the tools you need.

    Each feature is designed with real-world use cases in mind, ensuring you can solve complex problems efficiently.`,
    media: [
      {
        type: 'video',
        url: 'https://www.youtube.com/embed/JIbIYCM48to',
        caption: 'Quick start guide'
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









// media: [
//   {
//     type: 'video',
//     url: 'https://www.youtube.com/embed/JIbIYCM48to',
//     caption: 'Quick start guide'
//   }