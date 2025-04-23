import cn from 'classnames';

import styles from './Header.module.scss';

export const Header = () => (
  <header className={styles.header}>
    <h2 className={styles.heading}>Build your future with our team</h2>

    <p className={cn('subheadline3', 'color-subtitle', styles.eyebrow)}>We are hiring</p>
    <p className={cn('paragraph1', styles.paragraph)}>
      We share a people-first philosophy, as we firmly believe that the success of our company depends on professionals
      who work with us.
    </p>
  </header>
);
