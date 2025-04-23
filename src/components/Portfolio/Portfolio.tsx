import classNames from 'classnames';
import { Keyboard, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { ReactComponent as GreaterThan } from '@/assets/svg/greater-than.svg';
import { ReactComponent as LessThan } from '@/assets/svg/less-than.svg';
import { Button } from '@/components/base/Button/Button';
import styles from '@/components/Portfolio/Portfolio.module.scss';
import { PortfolioSlide } from '@/components/Portfolio/PortfolioSlide';
import type { IClient } from '@/config/clients';
import { clients } from '@/config/clients';

interface IProps {
  title: string;
}

export const Portfolio = ({ title }: IProps) => (
  <section className={styles.wrapper}>
    <div className={styles.portfolio}>
      <h3 className="color-subtitle subheadline3">Cross-functional teams at the core</h3>
      <h2 className={classNames(styles.title, 'headline1')}>{title}</h2>
      <div className={styles.slider}>
        <Swiper
          slidesPerView={'auto'}
          centeredSlides={true}
          spaceBetween={30}
          watchSlidesProgress={true}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          pagination={{
            el: '.swiper-pagination-container',
            clickable: true,
          }}
          loop
          modules={[Pagination, Keyboard, Navigation]}
          keyboard={{
            enabled: true,
          }}
        >
          {clients
            .filter((client) => client.portfolio && !client.hide)
            .map((slide: IClient, index) => (
              <SwiperSlide key={index}>
                {({ isActive, isVisible }) => (
                  <PortfolioSlide isActive={isActive && isVisible} slide={slide} key={index} />
                )}
              </SwiperSlide>
            ))}
        </Swiper>

        <div className={styles.swiperControls}>
          <button className="swiper-button-prev" title="Previous slide">
            <LessThan height="12px" width="14px" />
          </button>

          <div className="swiper-pagination-container"></div>

          <button className="swiper-button-next" title="Next slide">
            <GreaterThan height="12px" width="14px" />
          </button>
        </div>
      </div>
      <div className={styles.linksContainer}>
        <Button iconName="arrow-right" title="Go to Portfolio" href="/work" />
      </div>
    </div>
  </section>
);
