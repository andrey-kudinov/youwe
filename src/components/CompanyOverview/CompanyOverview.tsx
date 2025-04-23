import cn from 'classnames';

import styles from './CompanyOverview.module.scss';
import { IOverviewCard, OverviewCard } from './OverviewCard/OverviewCard';

const overviewCards: IOverviewCard[] = [
  {
    title: 'What we do',
    illustration: 'what-we-do',
    description:
      'We provide a wide range of high-tech solutions which let our clients satisfy their users’ demand, drive growth, and increase profit. Check out our services to learn more about our expertise and tech stack.',
    links: [
      {
        text: 'Go to Front-End Development',
        href: '/frontend',
      },
      {
        text: 'Go to Back-End Development',
        href: '/backend',
      },
      {
        text: 'Go to Shopify Plus',
        href: '/shopify',
      },
    ],
  },
  {
    title: 'Our portfolio',
    illustration: 'our-portfolio',
    description:
      'We firmly believe that your website’s performance is our responsibility. Check our portfolio to learn more about our works and get inspired. We are proud of every achievement.',
    links: [
      {
        text: 'Go to Portfolio',
        href: '/work',
      },
    ],
  },
];

export const CompanyOverview = () => (
  <section className={cn(styles['company-overview'], 'container')}>
    <header className={cn(styles.header)}>
      <h2 className={cn('headline3', styles.heading)}>
        We provide services with the highest industry expertise and best practices
      </h2>
      <p className={cn(styles.eyebrow, 'color-subtitle', 'subheadline3')}>Company overview</p>
    </header>

    <ul className={styles.list}>
      {overviewCards.map((overviewCard, index) => (
        <li key={index}>
          <OverviewCard overviewCard={overviewCard} />
        </li>
      ))}
    </ul>
  </section>
);
