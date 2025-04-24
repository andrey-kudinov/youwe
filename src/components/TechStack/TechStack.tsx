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
    name: 'name',
    path: '/mental/m1.png',
    href: '/',
  },
  {
    name: 'name',
    path: '/mental/m2.png',
    href: '/',
  },
  {
    name: 'name',
    path: '/mental/m3.png',
    href: '/',
  },
  {
    name: 'name',
    path: '/mental/m4.png',
    href: '/',
  },
  {
    name: 'name',
    path: '/mental/m5.png',
    href: '/',
  },
  {
    name: 'name',
    path: '/mental/m6.png',
    href: '/',
  },
  {
    name: 'name',
    path: '/mental/m7.png',
    href: '/',
  },
  {
    name: 'name',
    path: '/mental/m8.png',
    href: '/',
  },
  {
    name: 'name',
    path: '/mental/m9.png',
    href: '/',
  },
  {
    name: 'name',
    path: '/mental/m10.png',
    href: '/',
  },
  {
    name: 'name',
    path: '/mental/m11.png',
    href: '/',
  },
  {
    name: 'name',
    path: '/mental/m12.png',
    href: '/',
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
          НАДЕЖНАЯ ОСНОВА ДЛЯ ВАШЕГО ПСИХОЛОГИЧЕСКОГО БЛАГОПОЛУЧИЯ
        </p>
        <h2 className={`${styles.heading} headline1`}>Наши методики — это проверенная база</h2>
        <p className={`${styles.paragraph} paragraph1`}>
          Мы тщательно подбираем научно обоснованные подходы для каждого аспекта психического здоровья. Наша команда
          собрала десятки программ, используя лучшие практики современной психологии.
        </p>
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
