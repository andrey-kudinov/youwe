import Link from 'next/link';

import { ReactComponent as ArrowLeft } from '@/assets/svg/arrow-left.svg';

import styles from './Article.module.scss';

interface IProps {
  title: string;
  categories: string[];
}

export const Hero = (props: IProps) => {
  const { title, categories } = props;

  return (
    <section className={styles.hero}>
      <div className="container">
        <Link href="/blog">
          <>
            <i>
              <ArrowLeft width="14px" height="14px" />
            </i>
            <span>Back to Blog</span>
          </>
        </Link>

        <h1>{title}</h1>

        <ul>
          {categories.map((category, index) => (
            <li key={index}>/{category}/</li>
          ))}
        </ul>
      </div>
    </section>
  );
};
