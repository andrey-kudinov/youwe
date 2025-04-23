import classNames from 'classnames';
import { useState } from 'react';

import { SliderControl } from '@/components/SliderControl/SliderControl';
import { Video } from '@/components/Video/Video';
import styles from '@/components/WorkProcess/WorkProcess.module.scss';

import { Slider } from '../Slider/Slider';

export interface ISlide {
  title: string;
  description: string;
  icon: string;
}

interface IWorkProcess {
  slides: ISlide[];
}

export const WorkProcess = ({ slides }: IWorkProcess) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [total, setTotal] = useState(0);

  return (
    <section className={styles['work-process']}>
      <div className="container">
        <header className={styles.header}>
          <h2 className="subheadline1">Our process</h2>

          <div className={styles.tablet}>
            <SliderControl current={currentPage} total={total} />
          </div>
        </header>

        <Slider
          onChange={(current, total) => {
            setCurrentPage(current);
            setTotal(total);
          }}
        >
          {slides.map((slide, index) => {
            const { title, description } = slide;
            const animation = `process-step-${index + 1}`;

            const slideNumber = Number(index + 1).toLocaleString('en-US', {
              minimumIntegerDigits: 2,
              useGrouping: false,
            });

            return (
              <div className={styles.slide} key={index} style={{ width: '24rem' }}>
                <div className={styles.icon}>
                  <Video name={animation} loop={false} height="125px" />
                </div>
                <h3 className={classNames(styles.title, 'headline4')}>
                  {slideNumber}&#47;&nbsp;{title}
                </h3>
                <p className={classNames(styles.text, 'paragraph1')}>{description}</p>
              </div>
            );
          })}
        </Slider>

        <div className={styles.mobile}>
          <SliderControl current={currentPage} total={total} />
        </div>
      </div>
    </section>
  );
};
