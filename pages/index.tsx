import type { NextPage } from 'next';
import { useEffect, useRef } from 'react';
import { Box, LinearProgress, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import styles from '../styles/Home.module.css';
import { styles as classes } from '../styles/Home.styles';
import { useMovies, usePopularMovies } from '../hooks/movies.hooks';
import { useYoutubes, usePopularYoutubes } from '../hooks/youtubes.hooks';
import Link from 'next/link';
import { useSeries } from '../hooks/series.hooks';
import { usePeople } from '../hooks/people.hooks';
import TileSlider from '../components/TileSider/TileSlider';
import CustomHead from '../components/CustomHead/CustomHead';
import PersonTileSlider from '../components/PersonTileSlider/PersonTileSlider';
import MainSlider from '../components/MainSlider/MainSlider';
import MainBannerSlider from '../components/MainBannerSlider/MainBannerSlider';
import MidBannerSlider from '../components/MidBannerSlider/MidBannerSlider';
import NoticeList from '../components/NoticeList/NoticeList';
import BannerSlider from '../components/BannerSlider/BannerSlider';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import useSWR from 'swr';
import {
  GET_CHANNEL_LIST,
  GET_MOVIES_LIST,
  GET_MOVIES_BASIC,
  GET_MOVIES_GENRE,
  BANNERS_LIST,
  NOTICES_LIST,
} from './api/config';
import { YoutubeResult } from '../types/apiResponses';
import ChannelRoll from '../components/ChannelRoll/ChannelRoll';
import { fetcher } from '../utils/fetcher';
import { Button, Grid } from '@mui/material';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import {
  blurData,
  formatImgSrc,
  formatImgURL,
  toPercent,
  toUrlFriendly,
} from '../utils/utils';

const AnimatedNumbers = dynamic(() => import('react-animated-numbers'), {
  ssr: false,
});

type HomeProps = {};
const bull = (
  <Box
    component='span'
    sx={{ display: 'inline-block', transform: 'scale(0.7)' }}
  >
    JBall
  </Box>
);

const card = (
  <div>
    <CardContent>
      <Grid
        container
        sx={{
          flexDirection: { xs: 'row', md: 'row' },
          justifyContent: 'space-between',
        }}
      >
        <Typography variant='h6' color='white' gutterBottom>
          Total Funding Status
        </Typography>
        <Typography sx={{ fontSize: 14 }} color='white' gutterBottom>
          Update / 24h{' '}
        </Typography>
      </Grid>
      <Grid
        container
        sx={{
          flexDirection: { xs: 'row', md: 'row' },
          justifyContent: 'space-between',
        }}
      >
        <Typography variant='h4' component='div'>
          <AnimatedNumbers
            includeComma
            animateToNumber={339800000}
            fontStyle={{ fontSize: 32 }}
            configs={(number, index) => {
              return { mass: 1, tension: 230 * (index + 1), friction: 140 };
            }}
          />
        </Typography>
        <Typography variant='h4' component='div'>
          {bull}
        </Typography>
      </Grid>
      <br />
      <Grid
        container
        sx={{
          flexDirection: { xs: 'row', md: 'row' },
          justifyContent: 'space-between',
        }}
      >
        <Typography variant='h6' color='white'>
          등록프로젝트 145
        </Typography>
        <Typography variant='h6' color='white'>
          펀딩참여자 350
        </Typography>
      </Grid>
    </CardContent>
  </div>
);

const card2 = (
  <div>
    <CardContent>
      <Grid
        container
        sx={{
          flexDirection: { xs: 'row', md: 'row' },
          justifyContent: 'space-between',
        }}
      >
        <Typography variant='h6' color='white' gutterBottom>
          Swap Info.
        </Typography>
        <Typography sx={{ fontSize: 14 }} color='white' gutterBottom>
          전일 종가 평균 시세 기준 적용 <br />
          (2023.9.27. 종가 평균시세 기준)
        </Typography>
      </Grid>
      <Typography variant='h4' component='div' align='center'>
        1 JACK = 0.38 $
      </Typography>
      <br />
      <Grid
        container
        sx={{
          flexDirection: { xs: 'row', md: 'row' },
          justifyContent: 'space-between',
        }}
      >
        <Typography variant='body1' color='white' align='center'>
          1$ = 10,000 JBall = 2.6315789474 JACK
        </Typography>
      </Grid>
    </CardContent>
  </div>
);

const Home: NextPage<HomeProps> = () => {
  const { t } = useTranslation('home');
  const {
    data: movies1,
    isLoading: isMovieLoading1,
    error: isMovieError1,
  } = useSWR(`${GET_MOVIES_LIST}genre1=hot`);
  const {
    data: movies2,
    isLoading: isMovieLoading2,
    error: isMovieError2,
  } = useSWR(`${GET_MOVIES_LIST}genre1=new`);

  const {
    data: bannerMain,
    isLoading: isBannerMainLoading,
    error: isBannerMainError,
  } = useSWR(`${BANNERS_LIST}?type=main`);

  const {
    data: bannerMid,
    isLoading: isBannerMidLoading,
    error: isBannerMidError,
  } = useSWR(`${BANNERS_LIST}?type=mid`);

  const {
    data: notices,
    isLoading: isNoticeLoading,
    error: isNoticeError,
  } = useSWR(`${NOTICES_LIST}`);

  return (
    <>
      <CustomHead title='Jackpotcast - Home' media_type={'movie'} />

      <div className={styles.container}>
        {(isMovieLoading1 || isMovieLoading2) && <LinearProgress />}
        <Box>
          <MainBannerSlider bannerData={bannerMain?.results} />
        </Box>
        {!isMovieError1 ? (
          <TitleSection
            title={t('home:popular_youtube_series')}
            youtubeData={movies1?.results}
          />
        ) : (
          <Typography>{'데이터를 가져올수 없습니다.'}</Typography>
        )}
        <Box>
          <Grid
            container
            sx={{ flexDirection: { xs: 'column', md: 'row' } }}
            justifyContent='center'
          >
            <Card
              variant='outlined'
              sx={{
                background: '#000000',
                borderRadius: '20px',
                margin: '0 10px 10px 10px',
                minWidth: { xs: '300px', md: '500px' },
              }}
            >
              {card}
            </Card>
            <Card
              variant='outlined'
              sx={{
                background: '#000000',
                borderRadius: '20px',
                margin: '0 10px 10px 10px',
                minWidth: { xs: '300px', md: '500px' },
              }}
            >
              {card2}
            </Card>
          </Grid>
        </Box>
        <Box>
          <Grid container sx={{ flexDirection: { xs: 'column', md: 'row' } }}>
            <MidBannerSlider bannerData={bannerMid?.results} />
            <Box display='flex' justifyContent='center' alignItems='center'>
              <Grid
                container
                sx={{ flexDirection: { xs: 'column', md: 'row' } }}
                spacing={0}
                direction='column'
                alignItems='center'
                justifyContent='center'
              >
                <Image
                  src={formatImgURL('/assets/button1.png')}
                  sizes={formatImgURL('/assets/button1.png')}
                  width={200}
                  height={200}
                  alt={'titleConverted'}
                />
                <Image
                  src={formatImgURL('/assets/button2.png')}
                  sizes={formatImgURL('/assets/button2.png')}
                  width={200}
                  height={200}
                  alt={'titleConverted'}
                />
                <Image
                  src={formatImgURL('/assets/button3.png')}
                  sizes={formatImgURL('/assets/button3.png')}
                  width={200}
                  height={200}
                  alt={'titleConverted'}
                />
              </Grid>
            </Box>
          </Grid>
        </Box>
        {!isMovieError2 ? (
          <TitleSection
            title={t('home:latest_youtube_series')}
            youtubeData={movies2?.results}
          />
        ) : (
          <Typography>{'데이터를 가져올수 없습니다.'}</Typography>
        )}
        <Box sx={{ ...classes.sliderContainer, m: '20px 0 60px 0' }}>
          <Box sx={{ textAlign: 'start' }}>
            <Typography variant='h4' sx={classes.headTxt}>
              Notice
            </Typography>
            <NoticeList noticeData={notices?.results} />
          </Box>
        </Box>
      </div>
    </>
  );
};

interface TitleSectionProps {
  title: string;
  subtitle?: string;
  youtubeData?: YoutubeResult[];
}

const TitleSection = ({ title, subtitle, youtubeData }: TitleSectionProps) => {
  return (
    <Box sx={{ ...classes.sliderContainer, m: '20px 0 60px 0' }}>
      <Box sx={{ textAlign: 'start' }}>
        <Typography variant='h4' sx={classes.headTxt}>
          {title}
        </Typography>
        <Typography variant='body1' sx={classes.subTxt}>
          {subtitle}
        </Typography>
      </Box>
      <TileSlider youtubeData={youtubeData} />
    </Box>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { locale } = context;
  const [movies1, movies2, movies5, channelList] = await Promise.all([
    fetcher(`${GET_MOVIES_LIST}country=한국`),
    fetcher(`${GET_MOVIES_LIST}genre1=웹예능`),
    fetcher(`${GET_MOVIES_LIST}rating=0`),
    fetcher(`${GET_CHANNEL_LIST}`),
  ]);

  return {
    props: {
      fallback: {
        [`${GET_MOVIES_LIST}country=한국`]: movies1,
        [`${GET_MOVIES_LIST}genre1=웹예능`]: movies2,
        [`${GET_MOVIES_LIST}rating=0`]: movies5,
        [`${GET_CHANNEL_LIST}`]: channelList,
      },
      ...(await serverSideTranslations(locale ?? 'en')),
    },
  };
};
