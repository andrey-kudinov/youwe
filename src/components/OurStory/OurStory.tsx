import cn from 'classnames';

import styles from './OurStory.module.scss';

export const OurStory = () => (
  <section className={cn('container', styles['our-story'])}>
    <h2 className={cn('headline1', styles.heading)}>We build unique web experiences</h2>

    <div className={styles.description}>
      <p className={cn('paragraph1', styles.paragraph)}>
        Experience is our point of difference, the experience we hold and the experiences we create. We bring together
        the brightest minds in digital to craft experiences that are intuitive, engaging, impactful and enlightening.
      </p>

      <p className={cn('paragraph1', styles.paragraph)}>
        Our established distributed agile model allows us to harness the power of global teams to deliver software
        excellence at scale.
      </p>

      <p className={cn('paragraph1', styles.paragraph)}>
        What does this mean? It means making the websites we build perform quickly and flawlessly. It means helping our
        clients navigate stakeholder sign-offs so they can win at their jobs and go home happy. It means giving our team
        the freedom to work in a way that works for them.
      </p>
    </div>
  </section>
);
