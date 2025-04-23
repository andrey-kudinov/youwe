import { Button } from '@/components/base/Button/Button';
import styles from '@/components/Contact/components/Error.module.scss';
import { Video } from '@/components/Video/Video';

export const Error = ({ onBack }: { onBack: () => void }) => (
  <div className={styles.errorContainer}>
    <div className={styles.error}>
      <Video name="error" loop={false} width="145px" height="125px" className={styles.animation} />
      <h4 className="headline4">Ooops!</h4>
      <p className="paragraph1">Something went wrong. We could not send the form. Please try again.</p>
    </div>
    <Button title="Back" iconName="arrow-left" onClick={onBack} />
  </div>
);
