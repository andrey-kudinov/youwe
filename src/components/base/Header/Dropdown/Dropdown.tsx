/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import cn from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { ReactComponent as ChevronRightBlue } from '@/assets/svg/chevron-right-blue.svg';
import { ReactComponent as ChevronRightGreen } from '@/assets/svg/chevron-right-green.svg';

import styles from './Dropdown.module.scss';

interface Card {
  href: string;
  title: string;
  description: string;
}

const CARDS: Card[] = [
  {
    href: '/frontend',
    title: 'Front-End Development',
    description: 'Build modern user experiences, blazing fast.',
  },
  {
    href: '/backend',
    title: 'Back-End Development',
    description: 'Data workflows and APIs of any complexity.',
  },
  {
    href: '/shopify',
    title: 'Shopify Plus',
    description: 'Stunning customer journeys optimized for conversions.',
  },
];

interface Props {
  className?: string | undefined;
  active: boolean;
  onLinkClick: () => void;
}

export const Dropdown = (props: Props) => {
  const { active, className, onLinkClick } = props;
  const router = useRouter();

  return (
    <div className={cn(styles.dropdown, className, active && styles.active)}>
      <div className={cn('container', styles.container)}>
        <p className={styles.heading}>Choose technologies that will work even years from now</p>

        <ul className={styles.list}>
          {CARDS.map((card, index) => {
            const { href, title, description } = card;

            return (
              <li key={index} className={styles.item}>
                <Link
                  href={href}
                  className={cn(styles.link, router.pathname === href && styles.active)}
                  onClick={onLinkClick}
                >
                  <span className={styles.title}>
                    <span className={styles.icon}>
                      <ChevronRightBlue width="14px" height="16px" />
                      <ChevronRightGreen width="14px" height="16px" />
                    </span>
                    {title}
                  </span>
                  <span className={styles.description}>{description}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
