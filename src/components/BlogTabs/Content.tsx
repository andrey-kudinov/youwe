import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/base/Button/Button';
import { loader } from '@/helpers/helpers';
import { urlFor } from '@/lib/client';
import { IPost } from '@/pages/blog/[slug]';

import { BlogPostAuthor } from '../BlogPostAuthor/BlogPostAuthor';
import styles from './BlogTabs.module.scss';

interface IContent {
  items: IPost[];
  visibleItems: number;
  loadMore: () => void;
}

export const Content = ({ items, visibleItems, loadMore }: IContent) => (
  <>
    <div className={cn(styles.cards, 'container')}>
      {items.slice(0, visibleItems).map((post: IPost, index: number) => (
        <div key={index} className={styles.card}>
          {post.showImageInCard && (
            <div className={styles['main-image']}>
              <Image
                src={urlFor(post.mainImage).url()}
                alt={post.authorImage.caption}
                loader={loader}
                fill
                sizes="100vw"
                unoptimized
              />
            </div>
          )}
          <div className={styles['card-inner']}>
            <div className={styles.categories}>
              {post.categories.map((category, index) => (
                <h5 className={cn('paragraph2', styles.category)} key={index}>
                  /{category}/
                </h5>
              ))}
            </div>
            <h4 className={cn(styles.title, 'headline2')}>{post.title}</h4>
            <div className={styles['sanity-content']}>
              <p>{post.description}</p>
            </div>

            <div className={styles.author}>
              <BlogPostAuthor post={post} theme="dark" />
            </div>
            <Link href={`/blog/${post.slug.current}`} className={styles.link}>
              <span>&#60; Read Article &#47; &#62;</span>
            </Link>
          </div>
        </div>
      ))}
    </div>
    {visibleItems < items.length && (
      <div className={styles['button-wrapper']}>
        <Button iconName="arrow-down" title="Show More" iconToEnd onClick={loadMore} />
      </div>
    )}
  </>
);
