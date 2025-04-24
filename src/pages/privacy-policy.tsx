import Head from 'next/head';

import { Contact } from '@/components/Contact/Contact';
import PrivacyPolicy from '@/components/PrivacyPolicy/PrivacyPolicy';

const Privacy = () => (
  <>
    <Head>
      <title>Privacy Policy // Avalon Innovations</title>
    </Head>

    <PrivacyPolicy />

    <Contact />
  </>
);

export default Privacy;
