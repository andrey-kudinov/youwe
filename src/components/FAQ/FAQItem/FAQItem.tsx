import cn from 'classnames';
import { useRef, useState } from 'react';

import { ReactComponent as DashedLine } from '@/assets/svg/line-dashed.svg';
import { ReactComponent as Plus } from '@/assets/svg/plus.svg';

import { FAQ as IFAQ } from '../FAQ';
import styles from './FAQItem.module.scss';

interface Props {
  faq: IFAQ;
}

export const FAQItem = (props: Props) => {
  const {
    faq: { question, answer },
  } = props;

  const [active, setActive] = useState<boolean>(false);

  const ref = useRef<HTMLParagraphElement>(null);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div className={styles.faq}>
      <button className={cn(styles.question, active && styles.active)} onClick={handleClick}>
        <span className={cn('headline4', styles.text)}>{question}</span>
        <span className={cn(styles.icon)} style={{ transform: active ? 'rotate(-45deg)' : 'rotate(0deg)' }}>
          <Plus width="16px" />
        </span>
      </button>

      <div
        className={cn('paragraph1', styles.answer)}
        style={{ maxHeight: active ? (ref.current as HTMLParagraphElement).scrollHeight : 0 }}
        ref={ref}
      >
        <p className={styles.text}>{answer}</p>
      </div>
      <DashedLine />
    </div>
  );
};
