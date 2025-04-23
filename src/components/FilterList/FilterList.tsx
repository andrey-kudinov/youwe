import cn from 'classnames';

import styles from './FilterList.module.scss';

export interface Filter {
  name: string;
  numberOfAvailableItems: number;
}

interface Props {
  className?: string;
  filters: Filter[];
  currentFilterName: string;
  onFilterChange: (filterName: string) => void;
}

export const FilterList = (props: Props) => {
  const { className, filters, currentFilterName, onFilterChange } = props;

  return (
    <ul className={cn(styles.list, className)}>
      {filters.map((filter, index) => {
        const { name, numberOfAvailableItems } = filter;

        const handleButtonClick = () => {
          onFilterChange(name);
        };

        return (
          <li key={index} className={styles.item}>
            <button
              className={cn('headline4', styles.filter, name === currentFilterName && styles.current)}
              onClick={handleButtonClick}
            >
              <span className={styles.name}>{name}</span>
              <span className={cn('paragraph2', styles.number)}>{numberOfAvailableItems}</span>
            </button>
          </li>
        );
      })}
    </ul>
  );
};
