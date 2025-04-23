import cn from 'classnames';

import { JOBS } from '@/components/Jobs/data';
import { Header } from '@/components/Jobs/Header/Header';
import styles from '@/components/Jobs/Jobs.module.scss';
import { List } from '@/components/Jobs/List/List';

export const Jobs = () => (
  <section className={cn('container', styles.jobs)}>
    <Header />
    <List jobs={JOBS} />
  </section>
);
