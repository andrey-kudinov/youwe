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
  { label: 'Home', href: '/' },
  { label: 'Work', href: '/work' },
  { label: 'About us', href: '/about' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
];

const services = [
  { label: 'Frontend Development', href: '/frontend' },
  { label: 'Backend Development', href: '/backend' },
  { label: 'Shopify Plus', href: '/shopify' },
];

export const Footer = () => (
  <footer className={styles['footer']}>
    <div className={`${styles['footer-inner']} container`}>
      <div className={styles.top}>
        <Link href="/" className={styles.brand} title="Go to Homepage" aria-label="Avalon Innovations Logo">
          <Image
            src="/logo-light.svg"
            alt="Avalon Innovations Logo"
            width={345}
            height={48}
            loader={loader}
            unoptimized
          />
        </Link>
      </div>
      <div className={styles.center}>
        <p className={`paragraph1 ${styles['description']}`}>
          We build unique web experiences and custom e-commerce solutions for your business.
          <br />
        </p>
        <div className={`paragraph1 ${styles.items} ${styles['email']}`}>
          <p className={`paragraph1 ${styles['item-label']}`}>Email at:</p>
          <a className={`paragraph1 ${styles.item}`} href="mailto:contact@avalon.au">
            contact@avalon.au
          </a>
        </div>
        <div className={`paragraph1 ${styles.items} ${styles['pages']}`}>
          <p className={`paragraph1 ${styles['item-label']}`}>Links</p>
          {pages.map(({ label, href }, index) => (
            <Link href={href} key={index} className={`paragraph1 ${styles.item}`}>
              {label}
            </Link>
          ))}
        </div>
        <div className={`paragraph1 ${styles.items}  ${styles['services']}`}>
          <p className={`paragraph1 ${styles['item-label']}`}>Services</p>
          {services.map(({ label, href }, index) => (
            <Link href={href} key={index} className={`paragraph1 ${styles.item}`}>
              {label}
            </Link>
          ))}
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
        <p className="paragraph2">All rights reserved. 2023.</p>
        {/* temporarily hidden Privacy Policy and Cookie Policy */}
        {/* <div className={`paragraph2 ${styles['bottom-right']}`}>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/cookie-policy">Cookie Policy</Link>
        </div> */}
      </div>
    </div>
  </footer>
);
