import { Button } from '@/components/base/Button/Button';
import styles from '@/components/Contact/components/Success.module.scss';
import { Video } from '@/components/Video/Video';

export const Success = ({ onBack }: { onBack: () => void }) => (
  <div className={styles.successContainer}>
    <div className={styles.success}>
      <Video name="success" loop={false} width="145px" height="125px" className={styles.animation} />
      <h4 className="headline4">Thank you</h4>
      <p className="paragraph1">Your message is sent! We will get back to you soon.</p>
    </div>
    <Button title="Back" iconName="arrow-left" onClick={onBack} />
  </div>
);
