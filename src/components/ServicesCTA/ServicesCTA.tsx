import { ReactComponent as Screens } from '@/assets/svg/screens.svg';
import { Button } from '@/components/base/Button/Button';
import styles from '@/components/ServicesCTA/ServicesCTA.module.scss';

export const ServicesCTA = () => {
  const handleContact = () => {
    const selector = '.contact-form';
    document.querySelector(selector)?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <section className={`${styles['hero-block']} container`}>
      <Screens />

      <div className={styles.main}>
        <h3 className="display2">Our core services are extremely focused on what we do best</h3>

        <p className={`${styles.description} paragraph1`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est aliquam molestie mauris natoque aliquet donec
          turpis quis sit. Volutpat nunc lacus, vel massa metus consectetur.
        </p>

        <Button variant="primary" iconName="mail" title="Contact Us" onClick={handleContact} />
      </div>
    </section>
  );
};
