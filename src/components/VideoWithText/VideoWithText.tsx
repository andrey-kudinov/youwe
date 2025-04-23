import cn from 'classnames';

import { IVideoContent } from '@/types/sanity';

import styles from './VideoWithText.module.scss';

interface IProps {
  videoContent: Partial<IVideoContent>;
}

export const VideoWithText = ({ videoContent }: IProps) => {
  const { videoUrl, videoText } = videoContent;

  return (
    <div className={styles.wrapper}>
      <div className={styles['video-with-text']}>
        <video
          className={styles.video}
          src={videoUrl}
          autoPlay
          playsInline
          loop
          style={{ width: '100%', height: '100%' }}
          muted
        >
          <track kind="captions" />
        </video>
        <p className={cn('paragraph1', styles.text)}>{videoText}</p>
      </div>
    </div>
  );
};
