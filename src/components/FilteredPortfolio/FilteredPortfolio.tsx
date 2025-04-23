import cn from 'classnames';
import Image from 'next/image';

import { clients as ClientsData } from '@/config/clients';
import { loader } from '@/helpers/helpers';

import styles from './FilteredPortfolio.module.scss';
import { TagList } from './TagList/TagList';
import { TechList } from './TechList/TechList';

const clients = ClientsData.filter((client) => client.icon && client.description && client.caseStudy);

export const FilteredPortfolio = () => (
  <section className={styles.wrapper}>
    <div className={cn(styles.portfolio, 'container')}>
      <header className={cn(styles.header)}>
        <h2 className={cn('headline1', styles.heading)}>Recent projects</h2>
        <p className={cn('color-subtitle', 'subheadline3')}>The future of the web</p>
      </header>

      <div className={styles.list}>
        {clients.map((card, index) => {
          const { image, label, title, tags, description, href, technologies } = card;

          return (
            <article
              key={index}
              className={cn(styles.card, {
                [styles.cardReverse]: index % 2 != 0,
              })}
            >
              <div className={cn(styles.client, styles[label])}>
                <Image src={label} alt={title} width="0" height="0" sizes="100vw" loader={loader} unoptimized />
              </div>

              <div className={styles.cardBody}>
                <div className={styles.coverImage}>
                  <Image
                    src={image}
                    alt={image}
                    fill
                    sizes="100vw"
                    style={{
                      objectFit: 'cover',
                    }}
                  />
                </div>

                <div className={styles.info}>
                  <h3 className={cn('headline3', styles.title)}>{title}</h3>

                  <TagList className={styles.categories} tags={tags} />
                  <TechList className={styles.techlist} technologies={technologies} />

                  <p className={cn('paragraph1', styles.description)}>{description}</p>

                  {href && (
                    <a className={cn(styles.link, 'subheadline2')} href={href} target="_blank" rel="noreferrer">
                      &#60; Visit Website &#47; &#62;
                    </a>
                  )}
                  {/* Temporary hide */}
                  {/* {caseStudyHref && (
                    <a
                      className={cn(styles.link, 'subheadline2')}
                      href={caseStudyHref}
                      target="_blank"
                      rel="noreferrer"
                    >
                      &#60; View Case Study &#47; &#62;
                    </a>
                  )} */}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  </section>
);
