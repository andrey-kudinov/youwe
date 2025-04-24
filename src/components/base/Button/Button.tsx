import cn from 'classnames';
import Link from 'next/link';

import { ReactComponent as ArrowDown } from '@/assets/svg/arrow-down.svg';
import { ReactComponent as ArrowLeft } from '@/assets/svg/arrow-left.svg';
import { ReactComponent as ArrowRight } from '@/assets/svg/arrow-right.svg';
import { ReactComponent as ArrowTop } from '@/assets/svg/arrow-top.svg';
import { ReactComponent as Mail } from '@/assets/svg/mail.svg';
import { ReactComponent as Send } from '@/assets/svg/send.svg';
import styles from '@/components/base/Button/Button.module.scss';
import { Video } from '@/components/Video/Video';

interface IProps {
  title: string;
  iconName?: string;
  iconToEnd?: boolean;
  variant?: 'primary' | 'secondary' | 'outlined';
  submit?: boolean;
  loading?: boolean;
  href?: string;
  onClick?: () => void;
}

type ButtonIcon = 'send' | 'mail' | 'arrow-left' | 'arrow-right' | 'arrow-top' | 'arrow-down';

export const Button = ({ title, iconToEnd, variant = 'primary', iconName, onClick, submit, loading, href }: IProps) => {
  const icons = {
    send: <Send width="24px" height="24px" />,
    mail: <Mail width="24px" height="16px" />,
    'arrow-left': <ArrowLeft width="14px" height="14px" />,
    'arrow-right': <ArrowRight width="20px" height="20px" />,
    'arrow-top': <ArrowTop width="21px" height="20px" />,
    'arrow-down': <ArrowDown width="21px" height="20px" />,
  };

  const classNames = cn(
    styles.button,
    styles[variant],
    { [styles.reverse]: iconToEnd },
    { [styles.disabled]: loading },
    'subheadline2',
  );

  const content = loading ? (
    <Video name="loading" width="167px" height="58px" autoplay />
  ) : (
    <>
      {iconName && icons[iconName as ButtonIcon]}
      <span>{title}</span>
      {iconName && ' '}
    </>
  );

  return href ? (
    <Link href={href} className={classNames}>
      {content}
    </Link>
  ) : (
    <button type={submit ? 'submit' : 'button'} className={classNames} disabled={loading} onClick={onClick}>
      {content}
    </button>
  );
};
