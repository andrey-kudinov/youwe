import { PortableText } from '@portabletext/react';
import type { TypedObject } from '@portabletext/types';

import { ReactComponent as DashedLine } from '@/assets/svg/line-dashed.svg';

import styles from './Article.module.scss';

export interface IContents {
  contents: TypedObject[];
}

export const Contents = ({ contents: blocks }: Partial<IContents>) => {
  if (!blocks) return null;

  return (
    <section className={styles.contents}>
      <DashedLine />
      {blocks.map((block, index) => (
        <PortableText key={index} value={block} />
      ))}
      <DashedLine />
    </section>
  );
};
