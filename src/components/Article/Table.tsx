import { Fragment } from 'react';

import styles from './Article.module.scss';

export interface ITable {
  title: string;
  table: {
    rows: {
      cells: string[];
    }[];
  };
}

export const Table = (props: Partial<ITable>) => {
  const { title, table: { rows } = { rows: [] } } = props;

  if (rows.length < 2 && rows[0].cells.length < 2) {
    // eslint-disable-next-line no-console
    console.error('Current table structure is forbidden. Minimal number of rows and columns should start from 2');

    return null;
  }

  return (
    <section className={styles.table}>
      {title && <h2>{title}</h2>}

      <div>
        <table>
          <tbody>
            {rows.map((row, index) => (
              <Fragment key={index}>
                <tr>
                  {row.cells.map((cell, index) => (
                    <td key={index}>{cell}</td>
                  ))}
                </tr>
              </Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};
