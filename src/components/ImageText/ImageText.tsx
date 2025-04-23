import cn from 'classnames';
import Image from 'next/image';

import { urlFor } from '@/lib/client';
import { IImageText } from '@/types/sanity';

import styles from './ImageText.module.scss';

interface IProps {
  imageText: Partial<IImageText>;
}

export const ImageText = ({ imageText }: IProps) => {
  const { isImageOnRight, image, title, text } = imageText;

  return (
    <div className={styles.wrapper}>
      <div className={cn('container', isImageOnRight ? styles['image-on-right'] : '', styles['image-with-text'])}>
        <div className={styles.image}>
          {image && (
            <Image
              src={urlFor(image).url()}
              alt={title ?? ''}
              unoptimized
              width="524"
              height="376"
              style={{
                objectFit: 'cover',
                width: '100%',
              }}
            />
          )}
        </div>
        <div className={styles['text']}>
          <h2 className={cn('headline3', styles['title'])}>{title}</h2>
          <p className="paragraph1">{text}</p>
        </div>
      </div>
    </div>
  );
};
