import cn from 'classnames';

import styles from './BlogTabs.module.scss';

interface IHeadingItem {
  category: string;
  activeTab: string;
  count: number;
  onClickTab: (label: string) => void;
}

export const HeadingItem = ({ category, onClickTab, activeTab, count }: IHeadingItem) => (
  <button className={cn(activeTab === category && styles.active, styles.button)} onClick={() => onClickTab(category)}>
    {category === 'all' ? '<All/>' : category}
    <span className={styles.count}>{count}</span>
  </button>
);
