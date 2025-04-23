import Head from 'next/head';

import { Clients } from '@/components/Clients/Clients';
import { Contact } from '@/components/Contact/Contact';
import { HeroBlock } from '@/components/HeroBlock/HeroBlock';
import { Jobs } from '@/components/Jobs/Jobs';
import { OurStory } from '@/components/OurStory/OurStory';
import { Solutions } from '@/components/Solutions/Solutions';
import { WorkProcess } from '@/components/WorkProcess/WorkProcess';
import { about } from '@/config/about';
import { client } from '@/lib/client';
import { IClient } from '@/types';

const { clients: clientsData, solutions, workProcess } = about;

interface IProps {
  clients: IClient[];
}

const About = ({ clients }: IProps) => (
  <>
    <Head>
      <title>About Us // Avalon Innovations</title>
    </Head>

    <HeroBlock
      title="Your favourite digital partner"
      text="You can rely on us to transform your creative vision into thoughtfully engineered web experience."
      animation="about"
    />

    <Clients title={clientsData.title} clients={clients} />
    <OurStory />
    <Solutions solutions={solutions.cards} title={solutions.title} subtitle={solutions.subtitle} />
    <WorkProcess slides={workProcess.slides} />
    <Jobs />
    <Contact />
  </>
);

export default About;

export const getStaticProps = async () => {
  const query = `{
    "clients": *[_type == "client"] | order(publishedAt desc)  {_id, logo, logoIcon, name},
  }`;
  const { clients } = await client.fetch(query);

  return { props: { clients } };
};
