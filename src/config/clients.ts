export interface ITechnology {
  name: string;
  icon: string;
}

export interface IClient {
  title: string;
  shortTitle: string;
  description: string;
  technologies: ITechnology[];
  tags: string[];
  image: string;
  label: string;
  href: string;
  caseStudyHref?: string;
  caseStudy: boolean;
  portfolio: boolean;
  icon?: string;
  hide?: boolean;
}

export const clients: IClient[] = [
  {
    title: 'Flight Centre Holidays',
    shortTitle: 'Flight Centre Travel Group',
    description:
      'As part of its omni-channel initiative, Flight Centre approached us to provide its travellers with a more connected and personalized holiday package experience.',
    technologies: [
      {
        name: 'React',
        icon: '/tech-2/react-mini.svg',
      },
      {
        name: 'Next.js',
        icon: '/tech-2/next-mini.svg',
      },
      {
        name: 'AWS',
        icon: '/tech-2/aws-mini.svg',
      },
      {
        name: 'Serverless',
        icon: '/tech-2/serverless-mini.svg',
      },
    ],
    tags: ['E-commerce', 'Travel'],
    image: '/avalon-website/case-study-fc_upwoin.jpg',
    label: '/clients/flight-centre.svg',
    href: 'https://www.flightcentre.com.au/',
    caseStudyHref: '/case-studies/bupa-rebuild',
    portfolio: true,
    caseStudy: true,
    icon: '/tech-2/flight-centre.svg',
  },
  {
    title: 'Toyota Australia Website',
    shortTitle: 'Toyota',
    description:
      "Working closely with Toyota's engineering team, we implemented many interactive components while migrating the legacy website to a new, lightning-fast online shopping experience backed by an enterprise content management system.",
    technologies: [
      {
        name: 'React',
        icon: '/tech-2/react-mini.svg',
      },
      {
        name: 'Angular',
        icon: '/tech-2/angular-mini.svg',
      },
      {
        name: 'Sitecore',
        icon: '/tech-2/sitecore-mini.svg',
      },
    ],
    tags: ['Automotive', 'E-commerce'],
    image: '/avalon-website/case-study-toyota_vjv9jc.jpg',
    label: '/clients/toyota.svg',
    href: 'https://www.toyota.com.au/',
    portfolio: true,
    caseStudy: true,
    icon: '/tech-2/toyota.svg',
  },
  {
    title: 'Godfrey Hirst Residential',
    shortTitle: 'Godfrey Hirst Carpets',
    description:
      'Godfrey Hirst worked with the Avalon team to transform their vision into a CMS-driven site that is both flexible and enables them to provide products and content to each localized customer base they serve.',
    technologies: [
      {
        name: 'React',
        icon: '/tech-2/react-mini.svg',
      },
      {
        name: 'Next.js',
        icon: '/tech-2/next-mini.svg',
      },
      {
        name: 'Airtable',
        icon: '/tech-2/airtable-mini.svg',
      },
    ],
    tags: ['E-commerce', 'Retail'],
    image: '/avalon-website/case-study-gh_oosfws.jpg',
    label: '/clients/godfrey-hirst.svg',
    href: 'https://www.godfreyhirst.com/au',
    portfolio: true,
    caseStudy: true,
    icon: '/tech-2/godfrey-hirst.svg',
  },
  {
    title: 'Bupa Optical Store',
    shortTitle: 'Bupa',
    description:
      'We developed an online optical store to provide Bupa with a new interface for their growing customer base, introducing new pair pricing and services like virtual try-on and custom prescriptions.',
    technologies: [
      {
        name: 'React',
        icon: '/tech-2/react-mini.svg',
      },
      {
        name: 'Shopify',
        icon: '/tech-2/shopify-mini.svg',
      },
    ],
    tags: ['E-commerce', 'Insurance', 'Optical'],
    image: '/avalon-website/case-study-bupa_k4hxas.jpg',
    label: '/clients/bupa.svg',
    href: 'https://www.bupa.com.au/',
    portfolio: true,
    caseStudy: true,
    icon: '/tech-2/bupa.svg',
  },
  {
    title: 'SurfStitch Online Store',
    shortTitle: 'SurfStitch',
    description:
      'We built a modern and performant online shopping experience for SurfStitch, featuring an internal marketplace dashboard and many payment provider integrations - leading to a significant boost in conversions and user engagement.',
    technologies: [
      {
        name: 'Vue',
        icon: '/tech-2/vue-mini.svg',
      },
      {
        name: 'React',
        icon: '/tech-2/react-mini.svg',
      },
      {
        name: 'Salesforce',
        icon: '/tech-2/salesforce-mini.svg',
      },
    ],
    tags: ['E-commerce'],
    image: '/avalon-website/case-study-surfstitch_npnk1h.jpg',
    label: '/clients/surfstitch.svg',
    href: 'https://www.surfstitch.com/',
    portfolio: true,
    caseStudy: true,
    icon: '/tech-2/surfstitch.svg',
  },
  {
    title: 'Fox Sports Website',
    shortTitle: 'Fox Sports',
    description:
      'Our team developed a website that matches all client’s needs and makes sport news as close to the audience as possible. Nothing extra, nothing distracting, only sport for real fans.',
    technologies: [],
    tags: ['Media', 'Entertainment', 'Sports'],
    image: 'FoxSports',
    label: '/clients/fox-sports.svg',
    href: 'https://www.foxsports.com.au/',
    portfolio: false,
    caseStudy: false,
    icon: '/tech-2/fox-sports.svg',
  },

  {
    title: 'Suncorp Banking and Insurance',
    shortTitle: 'Suncorp Group',
    description: '',
    technologies: [],
    tags: ['Banking', 'Investment', 'Insurance'],
    image: 'Suncorp',
    label: '/clients/suncorp.svg',
    href: 'https://www.suncorp.com.au/',
    portfolio: false,
    caseStudy: false,
    icon: '/tech-2/suncorp.svg',
  },
  {
    title: 'RACQ',
    shortTitle: 'RACQ',
    description: '',
    technologies: [],
    tags: ['Insurance', 'Banking', 'Roadside Assistance'],
    image: '/avalon-website/case-study-racq_dpq1p8.jpg',
    label: '/clients/racq.svg',
    href: 'https://www.racq.com.au/',
    icon: '/tech-2/racq.svg',
    portfolio: false,
    caseStudy: false,
  },
  {
    title: 'Optus',
    shortTitle: 'Optus',
    description: '',
    technologies: [],
    tags: ['Telecommunications', 'Broadband', 'Internet'],
    image: 'Optus',
    label: '/clients/optus.svg',
    href: 'https://www.optus.com.au/',
    portfolio: false,
    caseStudy: false,
  },
  {
    title: 'Latitude Financial',
    shortTitle: 'Latitude Financial',
    description: '',
    technologies: [],
    tags: ['Banking', 'Investment'],
    image: 'LFS',
    label: '/clients/lfs.svg',
    href: 'https://www.latitudefinancial.com.au/',
    portfolio: false,
    caseStudy: false,
  },
  {
    title: 'IAG',
    shortTitle: 'IAG',
    description: '',
    technologies: [],
    tags: ['Insurance'],
    image: 'IAG',
    label: '/clients/iag.svg',
    href: 'https://www.iag.com.au/',
    portfolio: false,
    caseStudy: false,
    hide: false,
  },
];
