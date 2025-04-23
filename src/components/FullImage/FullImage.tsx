import cn from 'classnames';
import Image from 'next/image';

import { urlFor } from '@/lib/client';
import { IImageOnly } from '@/types/sanity';

import styles from './FullImage.module.scss';

interface IProps {
  imageOnly: Partial<IImageOnly>;
}

export const FullImage = ({ imageOnly }: IProps) => {
  const { image, imageName } = imageOnly;

  if (!image) return null;

  return (
    <div className={styles.wrapper}>
      <div className={cn('container', styles.image)}>
        <Image
          src={urlFor(image).url()}
          alt={imageName ?? ''}
          unoptimized
          width="1124"
          height="610"
          style={{
            objectFit: 'cover',
            width: '100%',
          }}
        />
      </div>
    </div>
  );
};
