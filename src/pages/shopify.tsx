import Head from 'next/head';

import { Advantages } from '@/components/Advantages/Advantages';
import Benefits from '@/components/Benefits/Benefits';
import { Contact } from '@/components/Contact/Contact';
import { FAQ } from '@/components/FAQ/FAQ';
import { HeroBlock } from '@/components/HeroBlock/HeroBlock';
import { Solutions } from '@/components/Solutions/Solutions';
import { TechStack } from '@/components/TechStack/TechStack';
import { shopify } from '@/config/services';

const { hero, solutions, techStack, FAQcontent, benefits } = shopify;

const Shopify = () => (
  <>
    <Head>
      <title>Shopify Integration // Avalon Innovations</title>
    </Head>

    <HeroBlock title={hero.title} text={hero.description} animation="shopify" />
    <Benefits heading={benefits.title} benefits={benefits.items} />
    <Solutions solutions={solutions.cards} title={solutions.title} subtitle={solutions.subtitle} />
    <TechStack
      introText={techStack.introText}
      logos={techStack.icons}
      heading={techStack.heading}
      subheading={techStack.subheading}
    />
    <Advantages />
    <FAQ content={FAQcontent} />
    <Contact />
  </>
);

export default Shopify;
