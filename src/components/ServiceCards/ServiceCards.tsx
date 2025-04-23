import { ServiceCard } from '@/components/ServiceCards/ServiceCard';
import styles from '@/components/ServiceCards/ServiceCards.module.scss';

import type { ICard } from './ServiceCard';

const cards: ICard[] = [
  {
    title: 'Front-end development',
    icon: 'frontend-sm',
    description:
      'Create websites to meet specific needs of your business that off-the-shelf software can not. We make it secure, faster, and easier to scale.',
    link: '/frontend',
  },
  {
    title: 'Back-end development',
    icon: 'backend-sm',
    description:
      'From sending a simple form to processing thousands of concurrent requests - we build reliable services that can do anything you need.',
    link: '/backend',
  },
  {
    title: 'Shopify development',
    icon: 'shopify-sm',
    description:
      'Amazing online shopping experiences and e-commerce integrations with cutting-edge technology and careful attention to detail.',
    link: '/shopify',
  },
];

export const ServiceCards = () => (
  <section className={`container ${styles['service-cards']}`}>
    <span className="color-subtitle subheadline3">Custom, secure, scalable</span>
    <h2 className={`${styles.title} headline1`}>Solutions for your business</h2>

    <div className={styles.cards}>
      {cards.map((card: ICard, index) => (
        <ServiceCard card={card} key={index} />
      ))}
    </div>
  </section>
);
