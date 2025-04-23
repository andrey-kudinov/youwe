import styles from './HowWeWorkBlock.module.scss';

interface ICards {
  title: string;
  description: string;
}

interface IProps {
  title: string;
  cards: ICards[];
}

export const HowWeWorkBlock = ({ title, cards }: IProps) => (
  <section className={styles.wrapper}>
    <div className={`${styles.block} container`}>
      <p className="subheadline3 color-subtitle">Why choose us</p>
      <h2 className="headline1">{title}</h2>

      <ul className={styles.list}>
        {cards.map((card) => (
          <li key={card.title} className={styles.item}>
            <h4 className="subheadline1">{card.title}</h4>
            <p className="paragraph1">{card.description}</p>
          </li>
        ))}
      </ul>
    </div>
  </section>
);
