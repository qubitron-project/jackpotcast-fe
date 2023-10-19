import type { NextPage } from 'next';
import { useState, useEffect, useRef } from 'react';
import { Box, LinearProgress, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import ReactPlayer from 'react-player';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

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
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { styled } from '@mui/material/styles';

const AnimatedNumbers = dynamic(() => import('react-animated-numbers'), {
  ssr: false,
});

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

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
  <CardContent
    sx={{
      background: 'linear-gradient(45deg, #FF3366 30%, #FF9933 90%)',
      height: { md: '20vh' },
    }}
  >
    <Grid
      container
      sx={{
        flexDirection: { xs: 'row', md: 'row' },
        justifyContent: 'space-between',
        alignContent: 'space-between',
      }}
    >
      <Typography
        variant='h6'
        color='white'
        gutterBottom
        sx={{ fontSize: { xs: '1.5rem', md: '2.0rem', lg: '1.0rem' } }}
      >
        Total Funding Status
      </Typography>
      <Typography
        sx={{ fontSize: { xs: '1.5rem', md: '2.0rem', lg: '1.0rem' } }}
        color='white'
        gutterBottom
      >
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
          fontStyle={{ fontSize: '2.8rem' }}
          configs={(number, index) => {
            return { mass: 1, tension: 230 * (index + 1), friction: 140 };
          }}
        />
      </Typography>
      <Typography variant='h4' sx={{ fontSize: '2.8rem' }} component='div'>
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
      <Typography
        variant='h6'
        color='white'
        sx={{ fontSize: { xs: '1.5rem', md: '2.0rem', lg: '1.0rem' } }}
      >
        등록프로젝트 145
      </Typography>
      <Typography
        variant='h6'
        color='white'
        sx={{ fontSize: { xs: '1.5rem', md: '2.0rem', lg: '1.0rem' } }}
      >
        펀딩참여자 350
      </Typography>
    </Grid>
  </CardContent>
);

const card2 = (
  <CardContent
    sx={{
      background: 'linear-gradient(45deg, #FF9933 30%,#FF3366 90%)',
      height: { md: '20vh' },
    }}
  >
    <Grid
      container
      sx={{
        flexDirection: { xs: 'row', md: 'row' },
        justifyContent: 'space-between',
      }}
    >
      <Typography
        variant='h6'
        color='white'
        gutterBottom
        sx={{ fontSize: { xs: '1.5rem', md: '2.0rem', lg: '1.0rem' } }}
      >
        Swap Info.
      </Typography>
      <Typography sx={{ fontSize: '1.2rem' }} color='white' gutterBottom>
        전일 종가 평균 시세 기준 적용 <br />
        (2023.9.27. 종가 평균시세 기준)
      </Typography>
    </Grid>
    <Typography
      variant='h4'
      sx={{ fontSize: { md: '2.8rem', lg: '2.0rem' } }}
      component='div'
      align='center'
    >
      1 JACK = 0.38 $
    </Typography>
    <br />
    <Grid
      sx={{
        flexDirection: { xs: 'row', md: 'row' },
        justifyContent: 'space-between',
      }}
    >
      <Typography
        variant='body1'
        color='white'
        sx={{ fontSize: { xs: '1.1rem', md: '1.5rem', lg: '1.0rem' } }}
      >
        1$ = 10,000 JBall = 2.6315789474 JACK
      </Typography>
    </Grid>
  </CardContent>
);

const Home: NextPage<HomeProps> = () => {
  const [isWindow, setIsWindow] = useState<boolean>(false);
  const [width, setWidth] = useState<number>(0);
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
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    handleClickOpen();
  }, []);
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  useEffect(() => {
    setIsWindow(true);
  }, []);

  return (
    <>
      <CustomHead title='Jackpotcast - Home' media_type={'movie'} />
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby='customized-dialog-title'
        open={open}
      >
        {/* <DialogTitle sx={{ m: 0, p: 2 }} id='customized-dialog-title'>
          Modal title
        </DialogTitle> */}
        <IconButton
          aria-label='close'
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Image
            src={formatImgURL('/assets/homepage_update.png')}
            sizes={formatImgURL('/assets/homepage_update.png')}
            width={width > 500 ? 500 : 300}
            height={width > 500 ? 500 : 300}
            alt={'titleConverted'}
          />
        </DialogContent>
      </BootstrapDialog>

      <div className={styles.container}>
        {(isMovieLoading1 || isMovieLoading2) && <LinearProgress />}
        <Box sx={{ marginTop: '50px' }}>
          <MainBannerSlider bannerData={bannerMain?.results} />
        </Box>
        {!isMovieError1 ? (
          <DoubleSection
            title={t('home:popular_youtube_series')}
            youtubeData={movies1?.results}
          />
        ) : (
          <Typography>{'데이터를 가져올수 없습니다.'}</Typography>
        )}
        <Box sx={{ ...classes.sliderContainer }}>
          <Grid
            container
            spacing={0}
            direction='row'
            alignItems='center'
            justifyContent='center'
          >
            <Card
              variant='outlined'
              sx={{
                background: '#000000',
                borderRadius: '20px',
                margin: '10px auto',
                width: { xs: '100vw', md: '30vw' },
              }}
            >
              {card}
            </Card>
            <Card
              variant='outlined'
              sx={{
                background: '#000000',
                borderRadius: '20px',
                margin: '10px auto',
                width: { xs: '100vw', md: '30vw' },
              }}
            >
              {card2}
            </Card>
          </Grid>
        </Box>
        <Box>
          <Grid
            container
            sx={{
              flexDirection: { xs: 'column', md: 'row' },
              marginTop: '30px',
            }}
          >
            {!isMovieLoading1 && (
              <Box sx={{ ...classes.sliderContainer, marginTop: '50px' }}>
                <ReactPlayer
                  url='https://www.youtube.com/watch?v=fqRg7baUoNI'
                  width='80vw'
                  height='70vh'
                  controls={true}
                  playing={true}
                  muted={true}
                  loop={true}
                  style={{ margin: '10px 10px 10px 10px' }}
                />
              </Box>
            )}
            {/* <MidBannerSlider bannerData={bannerMid?.results} />
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
            </Box> */}
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
        <Box sx={{ ...classes.sliderContainer }}>
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

const DoubleSection = ({ title, subtitle, youtubeData }: TitleSectionProps) => {
  return (
    <Box
      sx={{ ...classes.sliderContainer, marginBottom: '5%', marginTop: '5%' }}
    >
      <Box sx={{ textAlign: 'start' }}>
        <Typography variant='h4' sx={classes.headTxt}>
          {title}
        </Typography>
      </Box>
      <TileSlider youtubeData={youtubeData?.slice(0, 8)} />
      <Box sx={{ height: '5vh' }}></Box>
      <TileSlider youtubeData={youtubeData?.slice(9, 16)} />
    </Box>
  );
};

const TitleSection = ({ title, subtitle, youtubeData }: TitleSectionProps) => {
  return (
    <Box
      sx={{ ...classes.sliderContainer, marginBottom: '5%', marginTop: '5%' }}
    >
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
  // const [movies1, movies2] = await Promise.all([
  // fetcher(`${GET_MOVIES_LIST}genre1=hot`),
  // fetcher(`${GET_MOVIES_LIST}genre1=new`),
  // ]);

  return {
    props: {
      fallback: {
        // [`${GET_MOVIES_LIST}genre1=hot`]: movies1,
        // [`${GET_MOVIES_LIST}genre1=new`]: movies2,
      },
      ...(await serverSideTranslations(locale ?? 'en')),
    },
  };
};
