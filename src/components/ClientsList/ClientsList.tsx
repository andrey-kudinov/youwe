import cn from 'classnames';

import { ReactComponent as Arrows } from '@/assets/svg/arrows.svg';
import { ReactComponent as Current } from '@/assets/svg/current.svg';
import styles from '@/components/ClientsList/ClientsList.module.scss';
import type { IClient } from '@/config/clients';
import { clients } from '@/config/clients';

export const ClientsList = () => (
  <section className={`container ${styles.clientList}`}>
    <header className={styles.header}>
      <p className={cn('color-subtitle', 'subheadline3')}>World&apos;s leading retailers</p>
      <h2 className={cn('headline1', styles.heading)}>Our clients</h2>
    </header>

    <ul className={styles.list}>
      {clients
        .filter((client) => !client.caseStudy)
        .map(({ shortTitle, tags, href }: IClient, index) => (
          <li key={index}>
            <a className={styles.link} href={href} target="_blank" rel="noreferrer">
              <h3 className="headline2">{shortTitle}</h3>
              <p className="paragraph2">/{tags[0]}/</p>
              <div className={styles.cta}>
                <div className={styles.icon}>
                  <Current width="12px" height="14px" />
                  <Arrows width="18px" height="19px" />
                </div>
                <span className="subheadline1">Visit Website</span>
              </div>
            </a>
          </li>
        ))}
    </ul>
  </section>
);
