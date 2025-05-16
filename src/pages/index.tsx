import Head from 'next/head';

import { Clients } from '@/components/Clients/Clients';
import { Contact } from '@/components/Contact/Contact';
import { HeroBlock } from '@/components/HeroBlock/HeroBlock';
import { Portfolio } from '@/components/Portfolio/Portfolio';
import { ServiceCards } from '@/components/ServiceCards/ServiceCards';
import { TechStack } from '@/components/TechStack/TechStack';
import { home } from '@/config/home';
import { client } from '@/lib/client';
import { IClient, ISiteContent } from '@/types';

const { clients: clientsData, portfolio } = home;

interface IHeroBlock {
  title: string;
  text: string;
  label: string;
  selector: string;
  videoLink: string;
}

interface IProps {
  clients: IClient[];
  heroBlock: IHeroBlock;
}

const Home = ({ clients, heroBlock }: IProps) => {
  const { title, text, label, selector, videoLink } = heroBlock;

  return (
    <>
      <Head>
        <title>YOUWE // Поддержка психического здоровья</title>
      </Head>
      {/* <HeroBlock
        animation="frontend"
        title={title}
        text={text}
        label={label}
        videoLink={videoLink}
        selector={selector}
      /> */}
      <ServiceCards />
      <Clients title={clientsData.title} clients={clients} />
      <Portfolio title={portfolio.title} />
      <TechStack />
      {/* <Contact /> */}
    </>
  );
};

export default Home;

export const getStaticProps = async () => {
  const clientsQuery = `{
    "clients": *[_type == "client"] | order(publishedAt desc) {_id, logo, logoIcon, name},
    "siteContent": *[_type == "siteContent"] {homePageHeroBlockTitle, homePageHeroBlockText, homePageHeroBlockLabel, homePageHeroBlockSelector, homePageHeroBlockVideoLink},
  }`;
  const { clients, siteContent } = await client.fetch(clientsQuery);

  const heroBlock = siteContent.reduce((result: IHeroBlock, item: ISiteContent) => {
    const {
      homePageHeroBlockSelector: selector,
      homePageHeroBlockVideoLink: videoLink,
      homePageHeroBlockTitle: title,
      homePageHeroBlockText: text,
      homePageHeroBlockLabel: label,
    } = item;
    result = {
      title,
      text,
      label,
      selector,
      videoLink,
    };
    return result;
  }, {});

  return { props: { clients, heroBlock } };
};
