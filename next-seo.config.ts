import { DefaultSeoProps } from 'next-seo';

const config: DefaultSeoProps = {
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://Jackpotcast.com',
    title: 'Jackpotcast',
    siteName: 'Jackpotcast',
    images: [
      {
        url: 'http://jackpotcast.com/assets/logo.png',
        width: 285,
        height: 167,
        alt: 'Jackpotcast',
      },
    ],
  },
  twitter: {
    handle: '@jackpotcast',
    site: '@site',
    cardType: 'summary_large_image',
  },
};

export default config;
