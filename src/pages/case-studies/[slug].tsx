import Image from 'next/image';
import { Keyboard, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { ReactComponent as GreaterThan } from '@/assets/svg/greater-than.svg';
import { ReactComponent as LessThan } from '@/assets/svg/less-than.svg';
import { CaseStudies } from '@/components/CaseStudies/CaseStudies';
import { Contact } from '@/components/Contact/Contact';
import { FullImage } from '@/components/FullImage/FullImage';
import { ImageText } from '@/components/ImageText/ImageText';
import { Portfolio } from '@/components/Portfolio/Portfolio';
import { Quote } from '@/components/Quote/Quote';
import { ImageWithText } from '@/components/Text/Text';
import { VideoWithText } from '@/components/VideoWithText/VideoWithText';
import { urlFor } from '@/lib/client';
import { client } from '@/lib/client';
import type {
  ICase,
  IImageOnly,
  IImageText,
  IQuote,
  ISlider,
  ISliderProps,
  ITextOnly,
  IVideoContent,
  SectionComponentProps,
  SectionType,
} from '@/types/sanity';

import styles from './CaseStudiesSlider.module.scss';

interface IProps {
  caseItem: ICase;
}

const Case = ({ caseItem }: IProps) => {
  const sectionComponents: Record<SectionType, React.FC<SectionComponentProps>> = {
    slider: (section: Partial<ISliderProps>) => (
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
            el: '.swiper-case-studies-pagination',
            clickable: true,
          }}
          loop
          modules={[Pagination, Keyboard, Navigation]}
          keyboard={{
            enabled: true,
          }}
        >
          {section?.slider?.map((slideItem: ISlider, index: number) => {
            const { image, name } = slideItem;

            return (
              <SwiperSlide key={index}>
                <div className={styles.slide}>
                  <Image
                    key={index}
                    src={urlFor(image).url()}
                    alt={name}
                    fill
                    unoptimized
                    sizes="100vw"
                    style={{
                      objectFit: 'cover',
                    }}
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className={styles['swiper-controls']}>
          <button className="swiper-button-prev" title="Previous slide">
            <LessThan height="12px" width="14px" />
          </button>

          <div className="swiper-case-studies-pagination"></div>

          <button className="swiper-button-next" title="Next slide">
            <GreaterThan height="12px" width="14px" />
          </button>
        </div>
      </div>
    ),
    videoWithText: (section: Partial<IVideoContent>, index: number) => (
      <VideoWithText videoContent={section} key={index} />
    ),
    imageText: (section: Partial<IImageText>, index: number) => <ImageText imageText={section} key={index} />,
    textOnly: (section: Partial<ITextOnly>, index: number) => <ImageWithText textOnly={section} key={index} />,
    imageOnly: (section: Partial<IImageOnly>, index: number) => <FullImage imageOnly={section} key={index} />,
    quote: (section: Partial<IQuote>, index: number) => <Quote quote={section} key={index} />,
  };

  return (
    <>
      <CaseStudies caseItem={caseItem} />

      {caseItem.pageBuilder.map((section: SectionComponentProps, index: number) => {
        const SectionComponent = sectionComponents[section._type as keyof typeof sectionComponents];
        return <SectionComponent key={index} {...section} />;
      })}
      <Portfolio title="Recent Projects" />
      <Contact />
    </>
  );
};

export const getStaticPaths = async () => {
  const query = `*[_type == "caseStudies"] { slug { current } }`;

  const cases = await client.fetch(query);
  const paths = cases.map((caseItem: ICase) => ({
    params: { slug: caseItem.slug.current },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params: { slug } }: { params: { slug: string } }) => {
  const query = `*[_type == "caseStudies" && slug.current == '${slug}'][0]{_id, publishedAt, title, slug, "tags": tags[]->tag, text, "client": client->{name, url}, "sector":sector[]->sector, "scope":scope[]->scope, "logos":logo[]->{stackLogo, stackName}, pageBuilder
}`;

  const caseItem = await client.fetch(query);

  return {
    props: { caseItem },
  };
};

export default Case;
