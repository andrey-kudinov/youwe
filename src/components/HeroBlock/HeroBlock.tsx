import { Button } from '@/components/base/Button/Button';
import styles from '@/components/HeroBlock/HeroBlock.module.scss';
import { Video } from '@/components/Video/Video';

interface IProps {
  title: string;
  text: string;
  animation?: string;
  selector?: string;
  videoLink?: string;
  label?: string;
}

export const HeroBlock = ({ title, text, animation, selector = '.contact-form', label, videoLink }: IProps) => {
  const handleContact = () => {
    document.querySelector(selector)?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <section className={`${styles['hero-block']} container`}>
      <div className={styles.content}>
        <h1 className="display1">{title}</h1>
        <p className="paragraph1">{text}</p>
        {/* <Button iconName="mail" title={label ?? 'Contact Us'} onClick={handleContact} /> */}
      </div>
      <div className={styles.animationContainer}>
        <Video className={styles.frontendAnimation} name={animation} width="100%" autoplay videoLink={videoLink} />
      </div>
    </section>
  );
};
