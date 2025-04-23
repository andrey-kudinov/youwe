import cn from 'classnames';

import { BlogPostAuthor } from '@/components/BlogPostAuthor/BlogPostAuthor';
import { IPost } from '@/pages/blog/[slug]';

import styles from './Article.module.scss';
import { Code, ICode } from './Code';
import { Contents, IContents } from './Contents';
import { Gallery, IGallery } from './Gallery';
import { Hero } from './Hero';
import { IRichtext, Richtext } from './Richtext';
import { SocialList } from './SocialList';
import { ITable, Table } from './Table';

interface IProps {
  post: IPost;
}

type SectionType =
  | 'contentsBlogSection'
  | 'richTextPostSection'
  | 'galleryPostSection'
  | 'tableBlogSection'
  | 'codeBlogSection'
  | 'quotePostSection';

export type SectionComponentProps =
  | Partial<IContents & IRichtext & IGallery & ITable & ICode> & {
      _type: SectionType;
    };

export const Article = (props: IProps) => {
  const { post } = props;
  const { title, categories } = props.post;

  const sectionComponents: Record<SectionType, React.FC<SectionComponentProps>> = {
    contentsBlogSection: Contents,
    richTextPostSection: Richtext,
    galleryPostSection: Gallery,
    // TODO: add quote section
    quotePostSection: () => null,
    tableBlogSection: Table,
    codeBlogSection: Code,
  };

  return (
    <div className={styles.article}>
      <Hero title={title} categories={categories} />

      <div className={cn('container', styles.author)}>
        <BlogPostAuthor post={post} theme="dark" />
      </div>

      <div className={cn('container', styles.main)}>
        {post.pageBuilder?.map((section: SectionComponentProps, index: number) => {
          const SectionComponent = sectionComponents[section._type];
          return SectionComponent ? <SectionComponent {...section} key={index} /> : null;
        })}
      </div>

      <div className={cn('container', styles.social)}>
        <SocialList />
      </div>
    </div>
  );
};
