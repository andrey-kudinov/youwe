/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import classNames from 'classnames/bind';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';

import { ReactComponent as Arrows } from '@/assets/svg/arrows.svg';
import { ReactComponent as IconDown } from '@/assets/svg/icon-down.svg';
import { Button } from '@/components/base/Button/Button';
import styles from '@/components/base/Header/Header.module.scss';
import { loader } from '@/helpers/helpers';
import useComponentVisible from '@/hooks/useComponentVisible';
import { useScrollBlock } from '@/hooks/useScrollBlock';

import { Dropdown } from './Dropdown/Dropdown';

const desktopLinks = [
  { label: 'Главная', href: '/' },
  // { label: 'Services', href: null },
  { label: 'Статьи и ресурсы', href: '/blog' },
  { label: 'О проекте', href: '/about' },
  // { label: 'Blog', href: '/blog' }, temporarily hide blog
];

const mobileLinks = [
  { label: 'Главная', href: '/' },
  // { label: 'Front-End Development', href: '/frontend' },
  // { label: 'Back-End Development', href: '/backend' },
  // { label: 'Shopify Plus Integration', href: '/shopify' },
  { label: 'Статьи и ресурсы', href: '/blog' },
  { label: 'О проекте', href: '/about' },
  // { label: 'Blog', href: '/blog' }, temporarily hide blog
];

export const Header = () => {
  const [open, setOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isDropdown, setIsDropdown] = useState(false);
  const [isContentLoaded, setContentLoaded] = useState(false);

  const [blockScroll, allowScroll] = useScrollBlock();
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);

  const logoRef = useRef<HTMLAnchorElement | null>(null);

  const router = useRouter();
  useEffect(() => (open ? blockScroll() : allowScroll()), [allowScroll, blockScroll, open]);

  const closeMenu = () => {
    setOpen(false);
    setIsClosing(true);
    setTimeout(() => setIsClosing(false), 1000);
  };

  const openMenu = () => {
    setOpen(true);
  };

  const handleMenu = () => {
    open ? closeMenu() : openMenu();
  };

  const handleContact = () => {
    const selector = '.contact-form';
    closeMenu();

    // Set timeout to allow menu to close correctly before scrolling
    setTimeout(() => {
      document.querySelector(selector)?.scrollIntoView({
        behavior: 'smooth',
      });
    });
  };

  const handleDropdownClick = () => {
    setIsDropdown(!isDropdown);
    setIsComponentVisible(!isComponentVisible);
  };

  const handleDropdownLinkClick = () => {
    setIsComponentVisible(false);
    setIsDropdown(false);
    (logoRef.current as HTMLAnchorElement).focus();
  };

  useEffect(() => {
    if (!isComponentVisible) {
      setIsDropdown(false);
      (document.activeElement as HTMLElement).blur();
    }
  }, [isComponentVisible]);

  useEffect(() => {
    setContentLoaded(true);
  }, []);

  return (
    <header
      className={classNames(styles.header, {
        [styles.active]: open,
        [styles.closing]: isClosing,
      })}
    >
      <div className={`${styles['header-inner']} container`}>
        <Link href="/" className={styles.logo} ref={logoRef} title="Go to Homepage" aria-label="YOUWE Logo">
          <Image src="/logo.jpg" alt="YOUWE Logo" width={70} height={65} loader={loader} unoptimized />
          <Image src="/logo.jpg" alt="YOUWE Logo" width={60} height={55} loader={loader} unoptimized />
        </Link>

        <nav className={styles.nav}>
          <ul className={`${styles['nav-inner']} paragraph2`}>
            {desktopLinks.map(({ label, href }, index) => (
              <li
                className={classNames(styles.item, {
                  [styles['current-link']]:
                    (href && href.length > 1 && router.pathname.includes(href)) ||
                    (router.pathname === href && !isDropdown) ||
                    (href === null && router.pathname === '/frontend') ||
                    (href === null && router.pathname === '/backend') ||
                    (href === null && router.pathname === '/shopify'),
                  [styles['has-dropdown']]: isComponentVisible && isDropdown,
                  [styles['has--current-dropdown-link']]:
                    (href === null && router.pathname === '/frontend') ||
                    (href === null && router.pathname === '/backend') ||
                    (href === null && router.pathname === '/shopify'),
                })}
                key={index}
              >
                {href ? (
                  <Link href={href} className={styles.link}>
                    <span>{label}</span>
                  </Link>
                ) : (
                  <button onClick={handleDropdownClick} className={styles['dropdown-link']}>
                    <span>{label}</span>
                    <i className={styles['dropdown-icon']}>
                      <IconDown width="8px" height="6px" />
                    </i>
                  </button>
                )}
              </li>
            ))}
          </ul>

          <div ref={ref} style={{ visibility: isComponentVisible && isDropdown ? 'visible' : 'hidden' }}>
            <Dropdown active={isComponentVisible && isDropdown} onLinkClick={handleDropdownLinkClick} />
          </div>

          {isContentLoaded && (
            <ul className={styles['mobile-nav-inner']}>
              {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
              <>
                {mobileLinks.map(({ label, href }, index) => (
                  <li className={styles.item} key={index}>
                    <Link
                      href={href}
                      className={classNames('subheadline1', {
                        [styles['current-mobile-link']]:
                          router.pathname === href || (href && href.length > 1 && router.pathname.includes(href)),
                      })}
                      onClick={handleMenu}
                    >
                      <Arrows width="22px" height="22px" />
                      {label}
                    </Link>
                  </li>
                ))}

                {/* <li className={styles.contact}>
                  <Button title="Напиши нам" variant="outlined" iconName="mail" onClick={handleContact} />
                </li> */}
              </>
            </ul>
          )}

          {/* <div className={styles.cta} onClick={handleContact}>
            <Button title="Напиши нам" variant="outlined" />
          </div> */}

          <button
            className={styles.toggle}
            aria-expanded={open ? 'false' : 'true'}
            aria-label={open ? 'close menu' : 'menu'}
            type="button"
            onClick={handleMenu}
          >
            <div className={styles.burger}>
              <div className={styles['top-bar']}></div>
              <div className={styles['bottom-bar']}></div>
            </div>
          </button>
        </nav>
      </div>
    </header>
  );
};
