import classNames from 'classnames';
import Slider from 'react-slick';

import { ReactComponent as GreaterThan } from '@/assets/svg/greater-than.svg';
import { ReactComponent as LessThan } from '@/assets/svg/less-than.svg';
import styles from '@/components/Team/Team.module.scss';
import { TeamSlide } from '@/components/Team/TeamSlide';
import { ITeamSlide } from '@/components/Team/TeamSlide';

const slides: ITeamSlide[] = [
  {
    image: 'Avatar1',
    name: 'Full Namee',
    position: 'Technical Manager',
  },
  {
    image: 'Avatar2',
    name: 'Full Name',
    position: 'Technical Manager',
  },
  {
    image: 'Avatar3',
    name: 'Full Name',
    position: 'Technical Manager',
  },
  {
    image: 'Avatar4',
    name: 'Full Name',
    position: 'Technical Manager',
  },
  {
    image: 'Avatar3',
    name: 'Full Name',
    position: 'Technical Manager',
  },
];

interface IArrow {
  currentSlide: number;
  slideCount: number;
}

const SlickArrowLeft = ({ ...props }: IArrow) => (
  <button {...props} className={classNames('slick-prev', 'slick-arrow', styles['custom-slick-prev'])} type="button">
    <LessThan height="12px" width="14px" />
  </button>
);

const SlickArrowRight = ({ ...props }: IArrow) => (
  <button {...props} className={classNames('slick-next', 'slick-arrow', styles['custom-slick-next'])} type="button">
    <GreaterThan height="12px" width="14px" />
  </button>
);

export const Team = () => {
  const settings = {
    arrow: true,
    className: classNames(styles.slider, 'slick-slider'),
    dotsClass: classNames(styles['slider-bar'], 'slick-dots'),
    infinite: true,
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 4,
    speed: 1000,
    prevArrow: <SlickArrowLeft currentSlide={0} slideCount={0} />,
    nextArrow: <SlickArrowRight currentSlide={0} slideCount={0} />,
    responsive: [
      {
        breakpoint: 1140,
        settings: {
          slidesToShow: 2,
          centerMode: true,
          centerPadding: '210px',
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          centerMode: true,
          centerPadding: '110px',
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          centerMode: true,
          centerPadding: '40px',
        },
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: '50px',
        },
      },
      {
        breakpoint: 376,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: '24px',
        },
      },
    ],
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const CustomSlider = Slider as unknown as React.FC<any>;

  return (
    <section className={styles.team}>
      <h3 className="color-subtitle subheadline3">meet our team</h3>
      <h1 className={classNames(styles.title, 'headline1')}>The people behind Avalon</h1>
      <div className={styles.slider}>
        <CustomSlider {...settings}>
          {slides.map((slide, index) => (
            <TeamSlide slide={slide} key={index} />
          ))}
        </CustomSlider>
      </div>
    </section>
  );
};
