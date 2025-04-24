import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import styles from '@/components/Clients/Clients.module.scss';
import { loader, shuffle } from '@/helpers/helpers';
import { urlFor } from '@/lib/client';
import { IClient } from '@/types';

interface IProps {
  title?: string;
  clients: IClient[];
}

export const Clients = (props: IProps) => {
  const { title, clients } = props;

  const [line, setLine] = useState<IClient[]>([]);

  // Need a few times for a long line
  useEffect(() => {
    const line = shuffle(clients.filter(({ logo }) => logo));
    setLine([...line, ...line, ...line, ...line]);
  }, [clients]);

  return (
    <section className={styles.wrapper}>
      <div className={styles.clients}>
        <h2 className="subheadline1">{title}</h2>
        <div className={styles.lines}>
          <div className={styles['first-line']}>
            {line
              .filter(({ logoIcon }) => logoIcon)
              .map(({ logoIcon, name }, index) => (
                <Link
                  href="/resourses"
                  key={index}
                  tabIndex={-1}
                  className={styles['client-logo']}
                  title="Посмотрите наши статьи"
                  aria-label={name}
                >
                  <Image
                    src={urlFor(logoIcon).url()}
                    alt={name}
                    width="0"
                    height={60}
                    sizes="100vw"
                    loader={loader}
                    unoptimized
                    // Looks weird with lazy loading
                    // So need priority=true for beautiful animation
                    priority
                  />
                </Link>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};
