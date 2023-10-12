import React from 'react';
import Head from 'next/head';
import { useTranslation } from 'next-i18next';

type CustomHeadProps = {
  title: string;
  media_type: 'movie' | 'tv';
};

const CustomHead = ({ title, media_type }: CustomHeadProps) => {
  const { t } = useTranslation(['header', 'common']);

  const overview = '잭팟캐스트 당신의 유튜버를 캐스팅 하세요.';
  return (
    <Head>
      <title>{`${title}`}</title>
      <link rel='icon' href='/favicon-32x32.png' />
      <meta
        name='title'
        content={'잭팟캐스트 - 당신의 유튜버를 캐스팅 하세요 '}
      />
      <meta name='description' content={overview} />
      <meta name='keywords' content='youtube,jackpotcast' />

      <meta property='og:type' content='website' />
      <meta property='og:site_name' content='잭팟캐스트' />
      <meta
        property='og:title'
        content={'잭팟캐스트 - 당신의 유튜버를 캐스팅 하세요'}
      />
      <meta property='og:description' content={overview} />
    </Head>
  );
};

export default CustomHead;
