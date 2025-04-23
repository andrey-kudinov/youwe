import Head from 'next/head';

import { Advantages } from '@/components/Advantages/Advantages';
import { Clients } from '@/components/Clients/Clients';
import { ClientsList } from '@/components/ClientsList/ClientsList';
import { Contact } from '@/components/Contact/Contact';
import { FilteredPortfolio } from '@/components/FilteredPortfolio/FilteredPortfolio';
import { HeroBlock } from '@/components/HeroBlock/HeroBlock';
import { client } from '@/lib/client';
import { IClient } from '@/types';

interface IProps {
  clients: IClient[];
}

const Work = ({ clients }: IProps) => (
  <>
    <Head>
      <title>Portfolio // Avalon Innovations</title>
    </Head>

    <HeroBlock
      title="Our clients come first"
      text="They are the anchor that grounds us and the lighthouse that gives us direction. We love them and they love us."
      animation="work"
    />

    <Clients title="Trusted by the best" clients={clients} />

    <FilteredPortfolio />
    <ClientsList />
    <Advantages />
    <Contact />
  </>
);

export default Work;

export const getStaticProps = async () => {
  const query = `{
    "clients": *[_type == "client"] | order(publishedAt desc)  {_id, logo, logoIcon, name},
  }`;
  const { clients } = await client.fetch(query);

  return { props: { clients } };
};
