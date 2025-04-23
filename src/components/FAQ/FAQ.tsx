import cn from 'classnames';
import Image from 'next/image';

import { loader } from '@/helpers/helpers';

import styles from './FAQ.module.scss';
import { FAQItem } from './FAQItem/FAQItem';

export interface FAQ {
  question: string;
  answer: string;
}

interface IProps {
  content: FAQ[];
}

export const FAQ = ({ content }: IProps) => (
  <section className={cn(styles.portfolio, 'container')}>
    <header className={cn(styles.header)}>
      <Image src="/faq.svg" width={145} height={118} alt="faq" loader={loader} unoptimized />
      <h2 className={cn('display2', styles.heading)}>Frequent Questions</h2>
    </header>

    <div className={styles.main}>
      <ul className={styles.list}>
        {content.map((faq, index) => (
          <li key={index}>
            <FAQItem faq={faq} />
          </li>
        ))}
      </ul>
    </div>
  </section>
);
