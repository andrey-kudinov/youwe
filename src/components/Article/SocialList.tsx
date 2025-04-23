import Link from 'next/link';

import { ReactComponent as FacebookIcon } from '@/assets/svg/facebook.svg';
import { ReactComponent as GithubIcon } from '@/assets/svg/github.svg';
import { ReactComponent as InstagramIcon } from '@/assets/svg/instagram.svg';
import { ReactComponent as LinkedInIcon } from '@/assets/svg/linkedin.svg';
import { ReactComponent as TwitterIcon } from '@/assets/svg/twitter.svg';

const socials = [
  {
    name: 'instagram',
    url: 'https://www.instagram.com/avalon.innovations/',
    icon: <InstagramIcon />,
  },
  {
    name: 'twitter',
    url: 'https://twitter.com/avalon_au',
    icon: <TwitterIcon />,
  },
  {
    name: 'linkedin',
    url: 'https://www.linkedin.com/company/avaloninnovations',
    icon: <LinkedInIcon />,
  },
  {
    name: 'facebook',
    url: 'https://www.facebook.com/avaloninnovations',
    icon: <FacebookIcon />,
  },
  {
    name: 'github',
    url: 'https://github.com/avaloninnovations',
    icon: <GithubIcon />,
  },
];

export const SocialList = () => (
  <ul>
    {socials.map((social, index) => {
      const { name, url, icon } = social;

      return (
        <li key={index}>
          <Link href={url} aria-label={name}>
            {icon}
          </Link>
        </li>
      );
    })}
  </ul>
);
