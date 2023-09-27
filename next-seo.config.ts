import { DefaultSeoProps } from 'next-seo';

const config: DefaultSeoProps = {
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://chart.wantu.io/',
    title: 'Wantu Chart',
    siteName: 'Wantu',
    images: [
      {
        url: 'https://chart.wantu.io/assets/wantu_logo.png',
        width: 285,
        height: 167,
        alt: 'Wantu Chart',
      },
    ],
  },
  twitter: {
    handle: '@wantu',
    site: '@site',
    cardType: 'summary_large_image',
  },
};

export default config;
