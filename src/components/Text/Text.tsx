import cn from 'classnames';

import { ITextOnly } from '@/types/sanity';

import styles from './Text.module.scss';

interface IProps {
  textOnly?: Partial<ITextOnly>;
}

export const ImageWithText = ({ textOnly }: IProps) => {
  if (!textOnly) return null;
  const { title, text } = textOnly;

  return (
    <div className={styles.wrapper}>
      <div className={styles['wrapper-inner']}>
        <div className={cn('container', styles.content)}>
          <h2 className="headline3">{title}</h2>
          <p className="paragraph1">{text}</p>
        </div>
      </div>
    </div>
  );
};
