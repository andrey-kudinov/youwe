import { ReactComponent as BgCta } from '@/assets/svg/bg-cta.svg';
import { ReactComponent as BgCtaMobile } from '@/assets/svg/bg-cta-mobile.svg';
import { ReactComponent as BgCtaTablet } from '@/assets/svg/bg-cta-tablet.svg';
import { Button } from '@/components/base/Button/Button';
import styles from '@/components/FocusCTA/FocusCTA.module.scss';
interface IProps {
  description: string;
}

export const FocusCTA = ({ description }: IProps) => {
  const handleContact = () => {
    const selector = '.contact-form';
    document.querySelector(selector)?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <section className={styles.wrapper}>
      <div className={`${styles.block} container`}>
        <h2 className="display2">We focus on what we do best</h2>
        <p className="paragraph1">{description}</p>
        <Button title="Contact Us" iconName="mail" onClick={handleContact} />
        <BgCta className={styles.bg} />
        <BgCtaTablet className={styles['bg-tablet']} />
        <BgCtaMobile width="170px" height="174px" className={styles['bg-mobile']} />
      </div>
    </section>
  );
};
