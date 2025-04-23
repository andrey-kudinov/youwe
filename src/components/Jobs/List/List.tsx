import cn from 'classnames';
import { useMemo } from 'react';

import { ReactComponent as Arrows } from '@/assets/svg/arrows.svg';
import { ReactComponent as Current } from '@/assets/svg/current.svg';

import styles from './List.module.scss';

export interface Job {
  title: string;
  tags: string[];
  department: string;
}

interface Props {
  jobs: Job[];
}

const extractUniqueDepartments = (jobs: Job[]) => {
  const uniqueDepartments: string[] = [];

  jobs
    .map((job) => job.department)
    .forEach((department) => {
      if (!uniqueDepartments.includes(department)) {
        uniqueDepartments.push(department);
      }
    });

  return uniqueDepartments;
};

export const List = (props: Props) => {
  const { jobs } = props;

  const uniqueDepartments = useMemo(() => extractUniqueDepartments(jobs), [jobs]);

  const handleContact = () => {
    const selector = '.contact-form';

    // Set timeout to allow menu to close correctly before scrolling
    setTimeout(() => {
      document.querySelector(selector)?.scrollIntoView({
        behavior: 'smooth',
      });
    });
  };

  return (
    <ul className={styles.departments}>
      {uniqueDepartments.map((departmentName, index) => (
        <li key={index} className={styles.department}>
          <h3 className={cn('label', styles.label)}>{departmentName}</h3>

          <ul className={styles.positions}>
            {jobs
              .filter((job) => job.department === departmentName)
              .map((position, index) => {
                const { title, tags } = position;

                return (
                  <li key={index}>
                    <button className={styles.position} onClick={handleContact}>
                      <span className={styles.title}>{title}</span>

                      <span className={cn(styles.tags)}>
                        {tags.map((tag, index) => (
                          <span key={index}>/{tag}/</span>
                        ))}
                      </span>

                      <span className={styles.cta}>
                        <span className={styles['cta-content']}>
                          <span className={styles.icon}>
                            <Current className={styles.current} width="12px" height="14px" />
                            <Arrows className={styles.arrows} width="18px" height="19px" />
                          </span>
                          <span className={styles['cta-text']}>Email Us</span>
                        </span>
                      </span>
                    </button>
                  </li>
                );
              })}
          </ul>
        </li>
      ))}
    </ul>
  );
};
