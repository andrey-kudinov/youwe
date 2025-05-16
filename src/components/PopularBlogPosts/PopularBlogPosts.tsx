import cn from 'classnames';
import Link from 'next/link';
import { useMemo, useState } from 'react';

import { BlogPostAuthor } from '@/components/BlogPostAuthor/BlogPostAuthor';
import { Slider } from '@/components/Slider/Slider';
import { SliderControl } from '@/components/SliderControl/SliderControl';
import { IPost } from '@/pages/blog/[slug]';

import styles from './PopularBlogPosts.module.scss';

interface IProps {
  posts: IPost[];
}

export const PopularBlogPosts = ({ posts }: IProps) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [total, setTotal] = useState(0);

  const cards = useMemo(
    () =>
      posts.map((post, index) => (
        <Link key={post._id} href={`/blog/${post.slug.current}`}>
          <article className={styles.article}>
            <h1 className={cn(styles.title)}>
              {Number(index + 1).toLocaleString('en-US', { minimumIntegerDigits: 2 })}/ {post.title}
            </h1>
            <p className={cn(styles.paragraph)}>{post.description}</p>
            <BlogPostAuthor post={post} className={styles.author} />
          </article>
        </Link>
      )),
    [posts],
  );

  return (
    <section className={cn(styles.section)}>
      <div className="container">
        <header className={styles.header}>
          <h2 className={cn(styles.heading, 'color-subtitle')}>ТОПОВЫЕ СТАТЬИ</h2>

          <div className={styles.tablet}>
            <SliderControl current={currentPage} total={total} theme="bright" />
          </div>
        </header>

        <div className={styles.mobile}>{cards}</div>

        <div className={styles.tablet}>
          <Slider
            onChange={(current, total) => {
              setCurrentPage(current);
              setTotal(total);
            }}
          >
            {cards}
          </Slider>
        </div>
      </div>
    </section>
  );
};
