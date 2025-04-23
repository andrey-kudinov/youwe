import { ReactComponent as GreaterThan } from '@/assets/svg/greater-than.svg';
import { ReactComponent as LessThan } from '@/assets/svg/less-than.svg';

import styles from './SliderControl.module.scss';

export interface ISlide {
  title: string;
  description: string;
  icon: string;
}

interface IProps {
  current: number;
  total: number;
  theme?: 'bright' | 'dark';
}

export const SliderControl = (props: IProps) => {
  const { current, total, theme = 'bright' } = props;

  const width = `${(current / total) * 100}%`;

  return (
    <div className={`${styles.section} ${styles[theme]}`}>
      <p className={styles.progress}>
        <span>{current}</span>
        <span className={styles.bar}>
          <span style={{ width }}></span>
        </span>
        <span>{total}</span>
      </p>

      <p className={styles.buttons}>
        <button className="swiper-button-prev">
          <span className="visually-hidden">Previous</span>
          <LessThan height="12px" width="14px" />
        </button>
        <button className="swiper-button-next">
          <span className="visually-hidden">Next</span>
          <GreaterThan height="12px" width="14px" />
        </button>
      </p>
    </div>
  );
};
