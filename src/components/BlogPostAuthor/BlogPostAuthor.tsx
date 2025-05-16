import cn from 'classnames';
import Image from 'next/image';

import { loader } from '@/helpers/helpers';
import { urlFor } from '@/lib/client';
import { IPost } from '@/pages/blog/[slug]';

import styles from './BlogPostAuthor.module.scss';

interface IProps {
  post: IPost;
  theme?: 'bright' | 'dark' | undefined;
  className?: string | undefined;
}

export const BlogPostAuthor = ({
  post: { name, authorImage, publishedAt, readTime },
  theme = 'bright',
  className,
}: IProps) => {
  const formattedDate = new Intl.DateTimeFormat('ru-RU', {
    month: 'long',
    day: 'numeric',
    // timeZone: 'Australia/Sydney',
  }).format(publishedAt ? new Date(publishedAt) : new Date());

  return (
    <section className={cn(styles.section, theme === 'dark' ? styles.dark : styles.bright, className)}>
      <h2 className="visually-hidden">Author</h2>

      <div className={styles.image}>
        <Image
          src={urlFor(authorImage)?.url()}
          alt={authorImage?.caption ?? ''}
          loader={loader}
          width="0"
          height="0"
          sizes="100vw"
          unoptimized
        />
      </div>

      <div className={styles.description}>
        <p className={cn(styles.name)}>{name}</p>

        <p className={styles['published-at']}>{formattedDate}</p>

        <p className={styles['read-time']}>{readTime}</p>
      </div>
    </section>
  );
};
