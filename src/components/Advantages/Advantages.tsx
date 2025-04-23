import styles from './Advantages.module.scss';

interface IItems {
  title: string;
  description: string;
}

const items: IItems[] = [
  {
    title: 'Reliable',
    description:
      "We care about your clients' online experience the same as you do, and we take responsibility for the quality of our work.",
  },
  {
    title: 'Real',
    description:
      "We're authentic and down-to-earth, true to ourselves and honest to our clients. We say what we'll do, and we do what we say.",
  },
  {
    title: 'Bright',
    description:
      'We aim to be the brightest minds in digital – intelligent, insightful and enlightening. We’re always looking for new ways to make a difference.',
  },
  {
    title: 'Solid',
    description:
      'We have been in the business for 10 years. Everything we say and do is backed by solid experience and proven results.',
  },
  {
    title: 'Human',
    description:
      'We put people first every time – in our business and our work. Creating stunning and genuine human experiences is what drives us.',
  },
  {
    title: 'Detailed',
    description:
      "We're meticulous and pay attention to the smallest details. We're passionate about what we do and we're proud of our work.",
  },
];

export const Advantages = () => (
  <section className={styles.advantages}>
    <div className={`container ${styles['advantages-inner']}`}>
      <header className={styles.header}>
        <p className={`${styles.eyebrow} subheadline3 color-subtitle`}>Exceptional digital experiences</p>
        <h2 className={`${styles.heading} headline1`}>What do our clients love about Avalon?</h2>
        <p className={`${styles.paragraph} paragraph1`}>
          Avalon has produced over 100 successful projects in a decade in the industry. Here are the things our clients
          highlight about working with us.
        </p>

        <h3 className={`subheadline1 ${styles.subtitle}`}>What do our clients love about Avalon?</h3>
      </header>

      <ul className={styles.list}>
        {items.map((item) => (
          <li key={item.title} className={styles.item}>
            <h3 className={`headline4 ${styles['item-title']}`}>{item.title}</h3>
            <p className={`paragraph1 ${styles['item-description']}`}>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  </section>
);
