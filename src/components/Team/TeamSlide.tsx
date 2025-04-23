import classNames from 'classnames';
import Image from 'next/image';

import styles from '@/components/Team/Team.module.scss';

export interface ITeamSlide {
  image: string;
  name: string;
  position: string;
}

interface IProps {
  slide: ITeamSlide;
}

export const TeamSlide = (props: IProps) => {
  const { image, name, position } = props.slide;

  return (
    <div className={classNames(styles.slide)}>
      <div className={styles.image}>
        <Image
          src={image}
          alt={name}
          width={310}
          height={365}
          style={{
            maxWidth: '100%',
            height: 'auto',
          }}
        />
      </div>
      <h4 className={classNames(styles.name, 'headline4')}>{name}</h4>
      <p className={classNames(styles.position, 'paragraph1')}>{position}</p>
    </div>
  );
};
