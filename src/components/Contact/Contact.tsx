import classNames from 'classnames';

import { ReactComponent as Letters } from '@/assets/svg/letters.svg';
import styles from '@/components/Contact/Contact.module.scss';

import ContactForm from './components/ContactForm';

interface IProps {
  bg?: 'transparent' | 'grey';
}

export const Contact = ({ bg = 'grey' }: IProps) => (
  <section className={classNames(styles.wrapper, { [styles.transparent]: bg === 'transparent' })}>
    <div className={`${styles.contact} container contact-form`}>
      <div>
        <Letters width="80px" />
        <h2 className={`${styles.title} display2`}>Забота о психике - это реальность</h2>
        <p className={`subheadline2 ${styles.subtitle}`}>Мы доступны для вас:</p>
        <p className={`paragraph2 ${styles.time}`}>
          Ежедневно, <span>круглосуточно</span>
        </p>
      </div>

      <div className={styles.formContainer}>
        <ContactForm />
      </div>
    </div>
  </section>
);
