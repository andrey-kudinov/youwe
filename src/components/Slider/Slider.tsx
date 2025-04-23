import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

interface IProps {
  children: JSX.Element[];
  onChange?: (currentPage: number, totalNumberOfPages: number) => void | undefined;
}

export const Slider = ({ children, onChange }: IProps) => (
  <Swiper
    slidesPerView={1}
    breakpoints={{
      768: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
    }}
    spaceBetween={80}
    watchSlidesProgress={true}
    navigation={{
      prevEl: `.swiper-button-prev`,
      nextEl: `.swiper-button-next`,
    }}
    pagination={{
      type: 'custom',
      renderCustom: (...params) => {
        const [, current, total] = params;

        if (onChange) {
          onChange(current, total);
        }
      },
    }}
    rewind
    modules={[Pagination, Navigation]}
  >
    {children.map((child, index) => (
      <SwiperSlide key={index}>{child}</SwiperSlide>
    ))}
  </Swiper>
);
