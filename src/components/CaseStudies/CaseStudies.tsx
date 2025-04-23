import { PortableText } from '@portabletext/react';
import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

import { ReactComponent as IconDown } from '@/assets/svg/icon-down.svg';
import { urlFor } from '@/lib/client';
import { ICase, ILogo } from '@/types/sanity';

import styles from './CaseStudies.module.scss';

export interface IProps {
  caseItem: ICase;
}

export const CaseStudies = ({ caseItem }: IProps) => {
  const { title, tags, text, client, sector, scope, logos } = caseItem;

  return (
    <div className={styles['case-studies']}>
      <div className={cn('container', styles.category)}>
        <Link className={styles['back-link']} href="/work">
          <span>
            <IconDown width="8px" height="6px" />
          </span>
          <span>Back to Portfolio</span>
        </Link>
        <h1 className={styles.title}>{title}</h1>

        <ul className={styles.tags}>
          {tags.map((tag: string, index: number) => (
            <li key={index} className={styles.tag}>
              <h5 className="paragraph2" key={index}>
                /{tag}/
              </h5>
            </li>
          ))}
        </ul>

        <div className={cn('paragraph1', styles['case-studies-text'])}>
          <PortableText value={text} />
        </div>
        <div className={styles['description-columns']}>
          <div className={styles['description-column']}>
            <div className={styles['column-title']}>Client</div>
            <ul className={styles['column-links']}>
              <li>
                <a href={client.url} target="blank">
                  {client.name}
                </a>
              </li>
            </ul>
          </div>
          <div className={styles['description-column']}>
            <div className={styles['column-title']}>Sector</div>
            <ul>
              {sector.map((sectorItem: string, index: number) => (
                <li key={index}>{sectorItem}</li>
              ))}
            </ul>
          </div>
          <div className={styles['description-column']}>
            <div className={styles['column-title']}>Scope</div>
            <ul>
              {scope.map((scopeItem: string, index: number) => (
                <li key={index}>{scopeItem}</li>
              ))}
            </ul>
          </div>
          <div className={styles['description-column']}>
            <div className={styles['column-title']}>Tech Stack</div>
            <ul className={styles['column-logos']}>
              {logos.map((logo: ILogo, index: number) => (
                <li key={index}>
                  <Image src={urlFor(logo.stackLogo).url()} alt={logo.stackName} unoptimized width="24" height="24" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
