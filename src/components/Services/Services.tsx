import classNames from 'classnames';
import { SetStateAction, useState } from 'react';
import Slider from 'react-slick';

import { ReactComponent as GreaterThan } from '@/assets/svg/greater-than.svg';
import { ReactComponent as LessThan } from '@/assets/svg/less-than.svg';
import styles from '@/components/Services/Services.module.scss';
import type { ISlide } from '@/components/Services/ServicesSlide';
import { ServicesSlide } from '@/components/Services/ServicesSlide';

interface IProps {
  slides: ISlide[];
  bg?: 'grey' | 'transparent';
}

interface IArrow {
  currentSlide: number;
  slideCount: number;
}

const SlickArrowLeft = ({ currentSlide, ...props }: IArrow) => (
  <button
    {...props}
    className={classNames(
      currentSlide === 0 ? styles['custom-slick-extreme'] : '',
      'slick-prev',
      'slick-arrow',
      styles['custom-slick-prev'],
    )}
    aria-disabled={currentSlide === 0 ? true : false}
    type="button"
  >
    <LessThan height="12px" width="14px" />
  </button>
);

const SlickArrowRight = ({ currentSlide, slideCount, ...props }: IArrow) => (
  <button
    {...props}
    className={classNames(
      currentSlide === slideCount - 1 ? styles['custom-slick-extreme'] : '',
      'slick-next',
      'slick-arrow',
      styles['custom-slick-next'],
    )}
    aria-disabled={currentSlide === slideCount - 1 ? true : false}
    type="button"
  >
    <GreaterThan height="12px" width="14px" />
  </button>
);

export const Services = ({ slides, bg = 'grey' }: IProps) => {
  const [imgIndex, setImgIndex] = useState(0);

  const settings = {
    dots: true,
    arrow: true,
    className: classNames(styles.slider, 'slick-slider'),
    dotsClass: classNames(styles['slider-bar'], 'slick-dots'),
    infinite: false,
    slidesToShow: 1,
    speed: 1000,
    beforeChange: (current: number, next: SetStateAction<number>) => setImgIndex(next),
    prevArrow: <SlickArrowLeft currentSlide={0} slideCount={0} />,
    nextArrow: <SlickArrowRight currentSlide={0} slideCount={0} />,
    customPaging: (dot: number) => (
      <span className={classNames(styles['slick-dot'], imgIndex === dot && styles['slick-active'])} />
    ),
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const CustomSlider = Slider as unknown as React.FC<any>;

  return (
    <section
      className={classNames(styles.services, {
        [styles.transparent]: bg === 'transparent',
      })}
    >
      <div className="container">
        <h4 className="subheadline1">Our other services</h4>
        <CustomSlider {...settings}>
          {slides.map((slide, index) => (
            <ServicesSlide slide={slide} key={index} />
          ))}
        </CustomSlider>
      </div>
    </section>
  );
};
