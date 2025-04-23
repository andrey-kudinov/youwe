import cn from 'classnames';
import Image from 'next/image';

import { loader } from '@/helpers/helpers';
import { urlFor } from '@/lib/client';

import styles from './Article.module.scss';

export interface IGallery {
  images: {
    alt: string;
  }[];
  caption: string;
}

export const Gallery = (props: Partial<IGallery>) => {
  const { images = [], caption } = props;

  return (
    <section className={styles.gallery}>
      <figure className={cn(styles.gallery, images.length > 1 && styles.multiple)}>
        <ol>
          {images.map((image, index) => (
            <li key={index}>
              <Image
                src={urlFor(image).url()}
                alt={image.alt ?? ''}
                loader={loader}
                width={780}
                height={300}
                unoptimized
              />
            </li>
          ))}
        </ol>
        {caption && <figcaption>{caption}</figcaption>}
      </figure>
    </section>
  );
};
