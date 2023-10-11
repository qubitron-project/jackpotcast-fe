import React from 'react';
import Head from 'next/head';
import { useTranslation } from 'next-i18next';

type CustomHeadProps = {
  title: string;
  media_type: 'movie' | 'tv';
};

const CustomHead = ({ title, media_type }: CustomHeadProps) => {
  const { t } = useTranslation(['header', 'common']);

  const overview =
    '잭팟캐스트는 유튜브에서 인기있는 시리즈 콘텐츠를 모아 평가하고 추천 해주는 서비스입니다.';
  return (
    <Head>
      <title>{`${title}`}</title>
      <link rel='icon' href='/favicon-32x32.png' />
      <meta
        name='title'
        content={'잭팟캐스트 - 유튜브 시리즈 콘텐츠 추천 평가 서비스'}
      />
      <meta name='description' content={overview} />
      <meta
        name='keywords'
        content='youtube, Review, User Ratings, 유튜브, 대형콘텐츠, 콘텐츠, series, 시리즈'
      />

      <meta property='og:type' content='website' />
      <meta property='og:site_name' content='Wantu-Chart' />
      <meta
        property='og:title'
        content={'잭팟캐스트 - 유튜브 시리즈 콘텐츠 추천 평가 서비스'}
      />
      <meta property='og:description' content={overview} />
    </Head>
  );
};

export default CustomHead;
