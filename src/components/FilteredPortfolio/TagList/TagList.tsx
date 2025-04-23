import cn from 'classnames';

import styles from './TagList.module.scss';

interface Props {
  className?: string;
  tags: string[];
}

export const TagList = (props: Props) => {
  const { className, tags } = props;

  return (
    <ul className={cn(styles.list, className)}>
      {tags.map((tag, index) => (
        <li key={index} className={cn(styles.item, 'paragraph2')}>
          /{tag}/
        </li>
      ))}
    </ul>
  );
};
