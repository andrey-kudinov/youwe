import Image from 'next/image';
import Link from 'next/link';

import { loader } from '@/helpers/helpers';

import styles from './TechStack.module.scss';

interface Logo {
  name: string;
  href: string;
  path: string;
}

// TODO: Convert some of those links to internal links to service pages:
const DEFAULT_LOGOS: Logo[] = [
  {
    name: 'React',
    path: '/tech/react.svg',
    href: 'https://reactjs.org/',
  },
  {
    name: 'Next.js',
    path: '/tech/nextjs.svg',
    href: 'https://nextjs.org/',
  },
  {
    name: 'Shopify',
    path: '/tech/shopify.svg',
    href: 'https://www.shopify.com/',
  },
  {
    name: 'Salesforce',
    path: '/tech/salesforce.svg',
    href: 'https://www.salesforce.com/',
  },
  {
    name: 'Amazon Web Services',
    path: '/tech/aws.svg',
    href: 'https://aws.amazon.com/',
  },
  {
    name: 'Contentful',
    path: '/tech/contentful.svg',
    href: 'https://www.contentful.com/',
  },
  {
    name: 'Prismic',
    path: '/tech/prismic.svg',
    href: 'https://prismic.io/',
  },
  {
    name: 'Storybook',
    path: '/tech/storybook.svg',
    href: 'https://storybook.js.org/',
  },
  {
    name: 'Google Cloud',
    path: '/tech/google-cloud.svg',
    href: 'https://cloud.google.com/',
  },
  {
    name: 'Firebase',
    path: '/tech/firebase.svg',
    href: 'https://firebase.google.com/',
  },
  {
    name: 'Stripe',
    path: '/tech/stripe.svg',
    href: 'https://stripe.com/',
  },
  {
    name: 'Auth0',
    path: '/tech/auth0.svg',
    href: 'https://auth0.com/',
  },
];

const DEFAULT_INTRO_TEXT = `We obsess over the right technology stack for every application. Our team has created dozens of solutions using the best technologies in the market.`;

interface Props {
  introText?: string;
  heading?: string;
  subheading?: string;
  logos?: Logo[];
}

export const TechStack = (props: Props) => {
  const { introText, heading, subheading, logos } = props;

  return (
    <section className={`container ${styles.techstack}`}>
      <header className={styles.header}>
        <p className={`${styles.eyebrow} subheadline3 color-subtitle`}>
          {subheading || 'A solid foundation for your next project'}
        </p>
        <h2 className={`${styles.heading} headline1`}>{heading || 'Our technology stacks above the rest'}</h2>
        <p className={`${styles.paragraph} paragraph1`}>{introText || DEFAULT_INTRO_TEXT}</p>
      </header>

      <div className={styles.main}>
        <ul className={styles.list}>
          {(logos || DEFAULT_LOGOS).map((logo) => {
            const { name, href, path } = logo;

            return (
              <li key={name} className={styles.item}>
                <Link key={name} href={href} className={styles.link}>
                  <Image src={path} alt={name} width="0" height="0" sizes="100vw" loader={loader} unoptimized />
                  <span className="visually-hidden">{name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
