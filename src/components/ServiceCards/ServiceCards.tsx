import { ServiceCard } from '@/components/ServiceCards/ServiceCard';
import styles from '@/components/ServiceCards/ServiceCards.module.scss';

import type { ICard } from './ServiceCard';

const cards: ICard[] = [
  {
    title: 'НАБОР ДЛЯ ЗАБОТЫ О СЕБЕ',
    icon: 'mental-2',
    description: 'Проверенные инструменты, дневниковые практики и рекомендации для бережного отношения к себе',
    link: '/blog/nabor-dlya-zaboty-o-sebe',
  },
  {
    title: 'ПРОФИЛАКТИКА ВЫГОРАНИЯ',
    icon: 'mental-1',
    description: 'Проверенные инструменты, дневниковые практики и рекомендации для бережного отношения к себе',
    link: '/blog/profilaktika-vygoraniya',
  },
  {
    title: 'ПРАКТИКИ ОСОЗНАННОСТИ',
    icon: 'mental-3',
    description:
      'Простые и эффективные техники для снижения стресса и тревоги. Наши упражнения помогут вам оставаться в моменте и обрести гармонию.',
    link: '/blog/praktiki-osoznannosti',
  },
];

export const ServiceCards = () => (
  <section className={`container ${styles['service-cards']}`}>
    <span className="color-subtitle subheadline3">ПОДДЕРЖКА, БЕЗОПАСНОСТЬ, РАЗВИТИЕ</span>
    <h2 className={`${styles.title} headline1`}>Ваш путь к душевному равновесию</h2>

    <div className={styles.cards}>
      {cards.map((card: ICard, index) => (
        <ServiceCard card={card} key={index} />
      ))}
    </div>
  </section>
);
