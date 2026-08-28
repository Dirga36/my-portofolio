import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Fuad",
  lastName: "Husnan",
  name: `Fuad Husnan`,
  role: "Full Stack Developer",
  avatar: "/images/avatar.png",
  email: "workfuad369@gmail.com",
  location: "Asia/Jakarta", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Bahasa"], // optional: Leave the array empty if you don't want to display languages
  locale: "en", // BCP 47 language tag for the HTML lang attribute, e.g., 'en', 'ja', 'zh-TW'
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/dirga36",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/fu-ad-husnan-10481a30b",
    essential: true,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/fuadhusnan/",
    essential: false,
  },
  {
    name: "x.com",
    icon: "twitter",
    link: "https://www.x.com/@FuadH369",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Full-Stack Developer ⫸ Transforming Complex Business Logic Into Seamless User Experiences</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">KBD Chatbot</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/karsa-bangun-desa-chatbot",
  },
  subline: (
    <>
      Engineering end-to-end web applications with robust backend architecture and intuitive React interfaces.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/fuad-husnan",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Hello! I am a Fullstack Developer focused on building modern web applications that are fast, interactive, and impactful. Leveraging expertise in the React ecosystem, and scalable backend architectures using Supabase and Vercel, I bridge precise interface design with reliable system performance. I also utilize workflow automation tools like Docker and n8n and implement robust cybersecurity foundations to ensure that every solution I design is not only resilient and secure but also delivers an intuitive user experience.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Telkom University",
        timeframe: "2025",
        role: "WordPress Developer",
        achievements: [
          <>
            Optimized web storage through specially designed Plugin.
          </>,
        ],
        images: [
          {
            src: "/images/gallery/pkl-tel-u.jpeg",
            alt: "Telkom University Internship Certificate",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "UTB",
        description: <>Studying computer science.</>,
      },
      {
        name: "BBPVP Bandung",
        description: <>Studied generative ai.</>,
      },
      {
        name: "SMKN7 Baleendah",
        description: <>Studied software engineering.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Next.js",
        description: (
          <>Building next gen apps with Next.js.</>
        ),
        tags: [
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "React",
            icon: "react",
          },
        ],
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/og/nextjs-landing-page.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Vercel",
        description: (
          <>Deploy any frontend apps with Vercel.</>
        ),
        tags: [
          {
            name: "Vercel",
            icon: "vercel",
          },
        ],
        images: [
          {
            src: "/images/og/dashboard-4_1.avif",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Copilot",
        description: (
          <>Build anything with GitHub Copilot.</>
        ),
        tags: [
          {
            name: "Copilot",
            icon: "copilot",
          },
          {
            name: "GitHub",
            icon: "github",
          },
          {
            name: "Visual Studio Code",
            icon: "vscode",
          },
        ],
        images: [
          {
            src: "/images/og/Copilot.webp",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Laravel",
        description: (
          <>Build robust web applications, MVPs, or SaaS with Laravel.</>
        ),
        tags: [
          {
            name: "Laravel",
            icon: "laravel",
          },
          {
            name: "PHP",
            icon: "php",
          },
        ],
        images: [
          {
            src: "/images/og/1625808060_laravel-banner1.webp",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Docker",
        description: (
          <>Dackages any application and everything it needs into a single portable environtment with Docker.</>
        ),
        tags: [
          {
            name: "Docker",
            icon: "docker",
          },
        ],
        images: [
          {
            src: "/images/og/Docker-Logo-2013-2015.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "n8n",
        description: (
          <>Create workflow automation platform that allows you to connect different apps, services, and AI models with n8n.</>
        ),
        tags: [
          {
            name: "n8n",
            icon: "n8n",
          },
        ],
        images: [
          {
            src: "/images/og/N8n-logo-new.svg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Frontend related projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  images: [
    {
      src: "/images/gallery/dev-fest-bandung-2025.jpeg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/pkl-tel-u.jpeg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/bbpvp-bandung.jpeg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/catounament-twibbon-template.png",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
