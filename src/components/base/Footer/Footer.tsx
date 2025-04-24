import Image from 'next/image';
import Link from 'next/link';

import styles from '@/components/base/Footer/Footer.module.scss';
import { loader } from '@/helpers/helpers';

// temporarily hidden logos
// const logos = [
//   { component: '<Linkedin width="24px" height="24p" />', href: '/' },
//   { component: '<Facebook width="24px" height="24p" />', href: '/' },
//   { component: '<Instagram width="24px" height="24p" />', href: '/' },
//   { component: '<Slack width="24px" height="24p" />', href: '/' },
//   { component: '<Twitter width="24px" height="24p" />', href: '/' },
//   { component: '<Medium width="24px" height="24p" />', href: '/' },
//   { component: '<Discord width="24px" height="24p" />', href: '/' },
//   { component: '<Github width="24px" height="24p" />', href: '/' },
//   { component: '<Youtube width="24px" height="24p" />', href: '/' },
//   { component: '<Snapchat width="24px" height="24p" />', href: '/' },
// ];

const pages = [
  { label: 'Главная', href: '/' },
  { label: 'Статьи и ресурсы', href: '/resourses' },
  { label: 'О нас', href: '/about' },
  // { label: 'Privacy Policy', href: '/privacy-policy' },
];

// const services = [
//   { label: 'Frontend Development', href: '/frontend' },
//   { label: 'Backend Development', href: '/backend' },
//   { label: 'Shopify Plus', href: '/shopify' },
// ];

export const Footer = () => (
  <footer className={styles['footer']}>
    <div className={`${styles['footer-inner']} container`}>
      <div className={styles.top}>
        <Link href="/" className={styles.brand} title="Go to Homepage" aria-label="Avalon Innovations Logo">
          <Image src="/logo.jpg" alt="YOUWE Logo" width={90} height={85} loader={loader} unoptimized />
        </Link>
      </div>
      <div className={styles.center}>
        <p className={`paragraph1 ${styles['description']}`}>
          Мы с командой работаем над важным проектом — создаем сайт о ментальном здоровье, который сможет помочь людям
          справляться со стрессом, тревогой и эмоциональным выгоранием.
        </p>
        <div className={`paragraph1 ${styles.items} ${styles['email']}`}>
          <p className={`paragraph1 ${styles['item-label']}`}>Напиши нам:</p>
          <a className={`paragraph1 ${styles.item}`} href="mailto:youwe-mental@gmail.com">
            youwe-mental@gmail.com
          </a>
        </div>
        <div className={`paragraph1 ${styles.items} ${styles['pages']}`}>
          <p className={`paragraph1 ${styles['item-label']}`}>Ссылочки</p>
          {pages.map(({ label, href }, index) => (
            <Link href={href} key={index} className={`paragraph1 ${styles.item}`}>
              {label}
            </Link>
          ))}
        </div>
        <div className={`paragraph1 ${styles.items}  ${styles['services']}`}>
          {/* <p className={`paragraph1 ${styles['item-label']}`}>ServiЪ’ces</p> */}
          {/* {services.map(({ label, href }, index) => (
            <Link href={href} key={index} className={`paragraph1 ${styles.item}`}>
              {label}
            </Link>
          ))} */}
        </div>
        {/* temporarily hidden logos */}
        {/* <div className={styles.logos}>
          <div className={styles['logos-inner']}>
            {logos.map((logo, index) => (
              <a href={logo.href} key={index}>
                {logo.component}
              </a>
            ))}
          </div>
        </div> */}
      </div>
      <div className={styles.bottom}>
        <p className="paragraph2">Все права защищены. Но это не точно. 2025.</p>
        {/* temporarily hidden Privacy Policy and Cookie Policy */}
        {/* <div className={`paragraph2 ${styles['bottom-right']}`}>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/cookie-policy">Cookie Policy</Link>
        </div> */}
      </div>
    </div>
  </footer>
);
