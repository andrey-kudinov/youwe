import cn from 'classnames';

import styles from './TeamValues.module.scss';

const TEAM_VALUES: string[] = [
  'No fluff',
  'Extreme responsibility',
  'Work by deadlines',
  'Being user centered',
  'Planning ahead',
  'No bureaucracy',
  'Keeping it real',
  'Open communication',
];

export const TeamValues = () => (
  <section className={styles['team-values']}>
    <div className={cn('container', styles.container)}>
      <header className={styles.header}>
        <h2 className={cn('subheadline1', styles.title)}>Our guiding principles</h2>
      </header>

      <div className={styles.main}>
        <ul className={styles.list}>
          {TEAM_VALUES.map((value, index) => (
            <li key={index} className={styles.item}>
              <span className={cn('paragraph2', styles.value)}>{value}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);
