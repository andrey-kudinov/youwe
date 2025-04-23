import cn from 'classnames';
import { useCallback, useEffect, useRef, useState } from 'react';

import styles from '@/components/Video/Video.module.scss';

interface Props {
  name?: string;
  width?: string;
  height?: string;
  className?: string;
  hover?: boolean;
  autoplay?: boolean;
  loop?: boolean;
  videoLink?: string;
}

export const Video = ({ name, width, height, className, hover = true, autoplay, loop = true, videoLink }: Props) => {
  const ref = useRef(null);
  const [windowWidth, setWindowWidth] = useState<number | null>(null);

  if (windowWidth && windowWidth < 768) {
    autoplay = true;
    hover = true;
    loop = true;
  }

  const play = () => {
    if (ref?.current) {
      try {
        (ref.current as HTMLVideoElement).play();
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
      }
    }
  };

  const pause = () => {
    if (ref?.current) {
      (ref.current as HTMLVideoElement).pause();
    }
  };

  useEffect(() => {
    hover ? play() : pause();
  }, [hover]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting && window) {
        setWindowWidth(window.innerWidth);
      }
    });
    const refCurrent = ref.current;
    if (refCurrent) {
      observer.observe(refCurrent);
    }

    return () => {
      if (refCurrent) {
        observer.unobserve(refCurrent);
      }
    };
  }, [ref]);

  const cb: IntersectionObserverCallback = useCallback((entries) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      play();
    }
  }, []);

  useEffect(() => {
    if (!loop) {
      const observer = new IntersectionObserver(cb, { root: null, threshold: 0.5 });
      const animation = ref.current;
      if (animation) {
        observer.observe(animation);
      }

      return () => {
        if (animation) observer.unobserve(animation);
      };
    }
  }, [cb, ref, loop]);

  return (
    <video
      ref={ref}
      src={videoLink ? videoLink : `/animations/${name}.mp4`}
      autoPlay={autoplay}
      playsInline
      className={cn(styles.video, className)}
      loop={loop}
      style={{ width, height }}
      muted
      aria-hidden="true"
      tabIndex={-1}
    >
      <track kind="captions" />
    </video>
  );
};
