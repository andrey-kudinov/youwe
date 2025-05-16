import cn from 'classnames';
import { useState } from 'react';

import { IPost } from '@/pages/blog/[slug]';

import styles from './BlogTabs.module.scss';
import { Content } from './Content';
import { HeadingItem } from './HeadingItem';

interface IBlogTabs {
  posts: IPost[];
}

const mergeArrays = (...arrays: string[][]): string[] => {
  const mergedArray = [...arrays.reduce((acc, cur) => (cur?.length ? [...acc, ...cur] : [...acc]), [])];

  return [...new Set(mergedArray)];
};

export const BlogTabs = ({ posts }: IBlogTabs) => {
  const [activeTab, setActiveTab] = useState('все');
  const [items, setItems] = useState(posts);
  const LOAD_MORE_STEP = 2;
  const INIT_LOADED = 2;
  const [visibleItems, setVisibleItems] = useState(INIT_LOADED);

  const loadMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + LOAD_MORE_STEP);
  };

  const categories = mergeArrays(...posts.map((post) => post.categories));

  const handleSelectTab = (tab: string) => {
    setActiveTab(tab);
    setVisibleItems(INIT_LOADED);
    setItems(posts.filter((item) => item.categories?.includes(tab)));
  };

  const showAll = () => {
    setActiveTab('все');
    setVisibleItems(INIT_LOADED);
    setItems(posts);
  };

  return (
    <div className={styles.tabs}>
      <div className={cn(styles['tab-list'], 'container')}>
        <div className={styles['tab-list-inner']}>
          <HeadingItem category={'все'} activeTab={activeTab} onClickTab={showAll} count={posts.length} />
          {categories?.map((category, index) => (
            <HeadingItem
              key={index}
              category={category}
              activeTab={activeTab}
              count={posts.filter((post) => post.categories?.includes(category)).length}
              onClickTab={handleSelectTab}
            />
          ))}
        </div>
      </div>

      <Content items={items} visibleItems={visibleItems} loadMore={loadMore} />
    </div>
  );
};
