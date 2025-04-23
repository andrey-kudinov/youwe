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
        <h2 className={`${styles.title} display2`}>Let ideas become a reality</h2>
        <p className={`subheadline2 ${styles.subtitle}`}>Working hours:</p>
        <p className={`paragraph2 ${styles.time}`}>
          Mon-Fri <span>8am-8pm [GMT +10]</span>
        </p>
      </div>

      <div className={styles.formContainer}>
        <ContactForm />
      </div>
    </div>
  </section>
);
