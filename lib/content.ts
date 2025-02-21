
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
  content_5?: string;
  heading?: string;
  heading_2?: string;
  heading_3?: string;
  heading_4?: string;
  media?: MediaContent[];
  media_2?: MediaContent[];
  media_3?: MediaContent[];
  content_order?: string[];
};

export const sections: Section[] = [
  {
    id: 'Background',
    title: 'Bit of Background 📃',
    content: `Amazon Web Services (AWS) is the world’s leading cloud platform, offering a vast range of tools to build, host, and scale applications without needing to manage physical infrastructure.`,
    content_2: `Before we dive into the nuts and bolts of AWS deployment, let’s take a step back and look at how we got here. Once upon a time, deploying an application meant buying physical servers, setting them up in a data center, and praying they wouldn’t crash under load. \n\nThen came the cloud—offering virtual servers, scalable infrastructure, and the ability to deploy applications from anywhere. AWS led the charge, and today, it powers everything from tiny side projects to the world’s biggest tech giants.`,
    content_3: `As mentioned, AWS has over 100 different services to offer developers in the areas of compute, database, storage, and content delivery services. We'll be looking at some of the following today:\n\n\ `,
    heading: `Amazon EC2`,
    content_4:`Amazon EC2 (Elastic Compute Cloud) is a scalable cloud computing service that provides virtual machines to run applications with flexible compute capacity. It allows users to launch, configure, and manage instances on-demand, paying only for the resources they use. \n\n `,
    heading_2:`Amazon Elastic Beanstalk`,
    content_5: `AWS Elastic Beanstalk is a Platform-as-a-Service (PaaS) that simplifies deploying and managing web applications by handling infrastructure, scaling, and monitoring. It supports multiple programming languages and frameworks, allowing developers to focus on code while AWS manages the environment.` ,

    media: [
      {
        type: 'image',
        url: '/assets/imgs/aws_ec2.png',
        caption: 'AWS EC2'
      }
    ],
    media_2: [
      {
        type: 'image',
        url: '/assets/imgs/aws_services.png',
        caption: 'List of AWS services'
      }
    ],
    media_3: [
      {
        type: 'image',
        url: '/assets/imgs/aws_elastic_beanstalk.png',
        caption: 'AWS Elastic Beanstalk'
      }
    ],
    content_order: ['content','media_2', 'content_2', 'content_3','heading', 'media','content_4','heading_2','media_3','content_5']
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
    
    Now, you should 'Go to the AWS Management Console!'\n\n
    \n\n
    💡Tip: Bookmark this page, you'll probably be using it frequently!\n\n
    💡Tip: For good practice, set up Multi-Factor Authentication (MFA) for additional security. More information can be found here: \n\nhttps://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_mfa.html
    `,
    content_4: `Just some last bits of admin to do before deploying your application! 
    \n\nFirstly, let's get your EC2 Key Pair set up:\n\n
    
    ➡️ On the AWS Management Console, type EC2 into the top left search bar\n\n
    ➡️ Now in the EC2 Dashboard, select the [Key Pairs] link in the 'Network & Security' section on the side bar\n\n
    ➡️ Select [Create key pair]\n\n
    ➡️ In the following screen:\n\n
    1️⃣Enter a descriptive name for your key pair (e.g., MyWebAppKey), so you can easily identify it later. \n\n
    2️⃣For the key pair type, select RSA (this is the most commonly used option and compatible with most clients). \n\nIt is possible to use an ED25519 algorithm for Windows, Linuxs and macOS, it is not natively supported on Windows, and so RSA may save some headaches down the road! \n\n
    3️⃣Select the .pem private key format. \n\nThis holds the benefits of being the preferred solution for Linux and macOS, as well as being supported by Window's builtin OpenSSH client (available in Windows 10 or later).`,
    content_5: `Now, onto setting up your EC2 instance profile:\n\n
    
    ➡️ On the AWS Management Console, type IAM into the top left search bar\n\n
    ➡️ Now in the Identiy and Access Management (IAM) Dashboard, select the [Roles] link in the 'Access management' section on the side bar\n\n
    ➡️ Select [Create role]\n\n
    ➡️ Creating these roles opens up an incredible degree of customisability. I encourage you to dig into what each available option and permission will offer you! However, for the sake of this guide's simplicity, I've boiled down the requirements to a few fundamental options suiting a smaller scale development project:\n\n
    1️⃣ Under Trusted entity type, choose AWS service.\n\n
    2️⃣ For 'Use Case, you can select the simple 'EC2' option. \n\n
    This will allow your EC2 instance to access any other AWS services (like S3 or CloudWatch) that your app might need, without any additional complexities. \n\n
    3️⃣ Clicking onto the next page, you can see the +1,000 array of Permission policies available to developers. Pretty daunting... however, I've done my best to condense this down to the most likely three you should have:\n\n
    
    1. AmazonEC2ReadOnlyAccess – To view EC2 instances and their configurations.\n\n
    2. AmazonS3FullAccess – If your app uses S3 to store files.\n\n
    3.CloudWatchLogsFullAccess – If you need logging for monitoring.\n\n
    
    4️⃣Enter a descriptive name for your role (e.g., MyWebAppKey), so you can easily identify it later. Then, just hit [Create role]! \n\n`,
    
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
      content_order: ['content','media','content_2','media_2', 'content_3', 'content_4','content_5']
  },
  {
    id: 'Environment',
    title: 'Going via GitHub',
    content: `Now you're up and running on AWS, we have to build the environment for you to deploy your application on. You have the opportunity to upload your codebase as a ZIP during if process if you'd like, but I would initialising your domain using AWS's template first, to allow for easier trouble shooting if required. \n\n
    `,
    media: [
      {
        type: 'image',
        url: '/assets/imgs/aws_EBS_start.png',
        caption: `When you're ready, click 'Create application'!`
      }
    ],
    content_2: `For this process, you'll have a total of 6 steps to complete before hosting your site. As we go, I'll be providing a simple explanation for each section, whilst also highlighting my choices used for a simple, personal project!\n\n
    
    Step 1: Configure environment\n\n
      
    ⭐Environment Tier - \n\n
    An AWS Elastic Beanstalk environment tier defines how the application runs and interacts with AWS resources. There are two main tiers: the Web Server tier, which handles HTTP requests and serves web applications, and the Worker tier, which processes background tasks using an AWS-managed queue. The tier determines the infrastructure setup and how AWS manages scaling, load balancing, and resource allocation for the application.\n\n
    My choice - 'Web Server Environment'\n\n
    
    ⭐Environment Information - \n\n
    The Environment information section contains the metadata about the environment, such as its name, description, and application version. This information helps identify and manage different environments, ensuring that the correct settings and deployments are applied to the intended instance of the application.\n\n
    
    ⭐Platform - \n\n
    The Platform section specifies the programming language, runtime, and operating system for the environment. It determines the underlying infrastructure and software stack that Elastic Beanstalk will use to run the application, ensuring compatibility with the selected framework and dependencies.\n\n
    My choice - Node.js\n\n
    
    ⭐Application Code - \n\n
    The Application Code section defines how the application's source code is provided. This can be done by uploading a local file, selecting a previously deployed version, or linking to an external source.\n\n
    My choice - Sample application => If you're feeling bold, you can access the required ZIP file through GitHub by navigating to the main page of the repository. Above the list of files, click [Code], and then just click [Download ZIP].\n\n
    
    ⭐Presets - \n\n
    The Preset section in the AWS Elastic Beanstalk configuration process allows you to choose predefined environment configurations based on your needs. For small applications and development processes, a single instance will do the job. \n\n
    The two single instance choices differ in whether you wish to use a spot instance. Spot instances allows you to bid for unused EC2 capacity at a lower price, thereby offering enhanced access to resources and automatic scaling. However, spot instances also come with the risk that they can be terminated by AWS if the capacity is needed elsewhere. This makes it a less reliable choice for production apps, but it can save costs if you can handle interruptions. 
    My choice - Single instance (free tier eligible).\n\n

    Step 2: Configure service access\n\n

    For context, an AWS service role is a special type of permission that allows an AWS service (like EC2 or Lambda) to access other AWS resources on your behalf. It gives the service the ability to do things like read from S3 or write to DynamoDB, based on the permissions you assign to it.\n\n

    If this is your first application, you will have to select 'Create and use new service role' for your application. Fortunately for us, we've already done the heavy lifting for this page during our set up!\n\n

    Enter your own 'Service role name', and then select the EC2 key pair and EC2 instance profile that you created at the beginning of this guide!\n\n 

    Step 3: Set up networking, database, and tags - OPTIONAL\n\n

    This section allows you to configure how your EC2 instance connects to your network (VPC), any databases it might need access to, and add tags to organize and identify your resources.\n\n Fortunately, we get a helping hand from Amazon here where, if you don't configure a VPC when you launch your environment, Elastic Beanstalk uses the default VPC. This default will be more than sufficient for our simple web app purposes. Therefore, we can skip this page in the set up. \n\n
    
    Step 4: Configure instance traffic and scaling - OPTIONAL\n\n

    This section allows you to set up how your EC2 instance will handle incoming traffic and automatically adjust its capacity based on demand. You can choose to enable auto-scaling to add or remove instances as needed and configure traffic routing rules. This is optional unless you expect high or fluctuating traffic.\n\n
     
    Thanks to our previous selection of Single Instance (free tier eligible) and EC2 instance profile, this section should have pre-completed, detailing the terms for our app's capacity and CloudWatch monitoring. \n\n
    
    As such, no edits needed here either!!
    
    Step 5: Configure instance traffic and scaling - OPTIONAL\n\n
    
    Same as step 4 - Glorious, isn't it!! Again, previous efforts have paid off with this page being appropriately filled 💖 Move straight on!\n\n
    
    Step 6: Review\n\n
    
    Finally, you're ready to launch your application!`,


    content_order: ['content','media','content_2','media_2', 'content_3']
  },
  {
    id: 'Docker',
    title: 'Deploy with Docker 🐋',
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