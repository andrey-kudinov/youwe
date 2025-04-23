import { useEffect, useState } from 'react';

import { ReactComponent as Square } from '@/assets/svg/square.svg';
import styles from '@/components/Industries/Industries.module.scss';
import { shuffle } from '@/helpers/helpers';

interface IProps {
  title: string;
  industries: string[];
}

export const Industries = ({ title, industries }: IProps) => {
  const [firstLine, setFirstLine] = useState<string[]>([]);
  const [secondLine, setSecondLine] = useState<string[]>([]);
  const [thirdLine, setThirdLine] = useState<string[]>([]);

  // Need a few times for a long line
  useEffect(() => {
    const first = shuffle(industries);
    const second = shuffle(industries);
    const third = shuffle(industries);
    setFirstLine([...first, ...first, ...first]);
    setSecondLine([...second, ...second, ...second]);
    setThirdLine([...third, ...third, ...third]);
  }, [industries]);

  return (
    <section className={styles.wrapper}>
      <div className={`${styles.industries} container`}>
        <h2 className="subheadline1">{title}</h2>
        <ul className={styles.list}>
          {industries.map((industry, index) => (
            <li key={index} className="paragraph1">
              <Square width="8px" height="8px" /> {industry} <Square width="8px" height="8px" />
            </li>
          ))}
        </ul>

        <div className={styles.mobile}>
          <ul className={styles['first-line']}>
            {firstLine.map((industry, index) => (
              <li key={index} className="paragraph1">
                {industry} <Square width="8px" height="8px" />
              </li>
            ))}
          </ul>
          <ul className={styles['second-line']}>
            {secondLine.map((industry, index) => (
              <li key={index} className="paragraph1">
                {industry} <Square width="8px" height="8px" />
              </li>
            ))}
          </ul>
          <ul className={styles['third-line']}>
            {thirdLine.map((industry, index) => (
              <li key={index} className="paragraph1">
                {industry} <Square width="8px" height="8px" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
