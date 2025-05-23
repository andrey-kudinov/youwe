import '@/styles/index.scss';
import 'swiper/css';
import 'swiper/css/pagination';

import { AppProps } from 'next/app';
import localFont from 'next/font/local';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Script from 'next/script';

import { Page } from '@/components/base/Page';

const openSans = localFont({
  src: [
    {
      path: '../assets/fonts/OpenSans-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/OpenSans-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../assets/fonts/OpenSans-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../assets/fonts/OpenSans-ExtraBold.woff2',
      weight: '800',
      style: 'normal',
    },
  ],
  variable: '--open-sans',
});

const galano = localFont({
  src: [
    {
      path: '../assets/fonts/Galano_Grotesque-Medium.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Galano_Grotesque-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Galano_Grotesque-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Galano_Grotesque-Black.woff2',
      weight: '800',
      style: 'normal',
    },
  ],
  variable: '--galano',
});

// TODO: Move tags to google tag manager
export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const canonicalUrl = (
    `https://${process.env.NEXT_PUBLIC_CANONICAL_DOMAIN || 'youwe-mental.ru'}` +
    (router.asPath === '/' ? '' : router.asPath)
  ).split('?')[0];

  return (
    <>
      {/* <Script id="google-tag-manager" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_CONTAINER}');
        `}
      </Script> */}
      <Head>
        <meta content="website" property="og:type" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta content="/logo.jpg" property="og:image" />
        <meta content="Психическое здоровье - логотип проекта" property="og:image:alt" />
        <meta name="google-site-verification" content={`${process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION}`} />
        <meta property="og:title" content="YOUWE // Поддержка психического здоровья" />
        <meta
          property="og:description"
          content="Профессиональная помощь при стрессе, тревоге и эмоциональном выгорании. Научно обоснованные методики и безопасное пространство для заботы о психическом здоровье."
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="627" />
        <meta content="YOUWE" property="og:site_name"></meta>
        <meta
          content="Онлайн-ресурс для поддержки психического здоровья. Практики самопомощи, профессиональные консультации и сообщество поддержки при стрессе, тревоге и выгорании."
          name="description"
        />
        <meta content="#0798b3" name="msapplication-TileColor" />
        <meta content="#0798b3" name="theme-color" />
        <title>YOUWE // Поддержка психического здоровья</title>
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <style jsx global>{`
        html {
          --open-sans: ${openSans.style.fontFamily};
          --galano: ${galano.style.fontFamily};
        }
      `}</style>
      <Page>
        <Component {...pageProps} />
      </Page>
    </>
  );
}
