import cn from 'classnames';

import { IQuote } from '@/types/sanity';

import styles from './Quote.module.scss';

interface IProps {
  quote: Partial<IQuote>;
}

export const Quote = ({ quote }: IProps) => {
  const { authorName, text } = quote;

  return (
    <div className={styles.wrapper}>
      <div className={styles['wrapper-inner']}>
        <div className={cn('container', styles.content)}>
          <p>{text}</p>
          <h5>{authorName}</h5>
        </div>
      </div>
    </div>
  );
};
