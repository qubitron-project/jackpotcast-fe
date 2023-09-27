import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { Box, Button, Grid, LinearProgress, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';

import ImgRoll from '../../../../components/ImgRoll/ImgRoll';
import CastRoll from '../../../../components/CastRoll/CastRoll';
import ClipRoll from '../../../../components/ClipRoll/ClipRoll';
import EpisodeRoll from '../../../../components/EpisodeRoll/EpisodeRoll';
import HighlightRoll from '../../../../components/HighlightRoll/HighlightRoll';
import CommentRoll from '../../../../components/CommentRoll/CommentRoll';
import InfoAct from '../../../../components/InfoAct/InfoAct';
import TileSlider from '../../../../components/TileSider/TileSlider';
import { styles as classes } from '../../../../styles/movieInfo.styles';
import { MovieResult, YoutubeDetail } from '../../../../types/apiResponses';
import { useMovieById } from '../../../../hooks/movies.hooks';
import {
  blurData,
  formatImgSrc,
  formatImgURL,
  formatMinutes,
  formatToUSD,
  toUrlFriendly,
} from '../../../../utils/utils';
import CustomHead from '../../../../components/CustomHead/CustomHead';
import { scrollToTop } from '../../../../hooks/app.hooks';
import { signIn, useSession } from 'next-auth/react';
import {
  useWatchlistById,
  useAddToWatchlist,
  useRemoveFromWatchlist,
} from '../../../../hooks/watchlist.hooks';
import { setNotify } from '../../../../redux/notifySlice';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';

import useSWR from 'swr';
import {
  GET_MOVIES_LIST,
  GET_MOVIES_BASIC,
  GET_MOVIES_GENRE,
} from '../../../api/config';
import { Rating } from 'react-simple-star-rating';
import Divider from '@mui/material/Divider';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
dayjs.extend(duration);

import { getCookie, getCookies, hasCookie } from 'cookies-next';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

// TODO: refactor this component page
function MovieInfo() {
  const { data: sessionData, status: loginStatus } = useSession();
  const isNotLogged = loginStatus === 'unauthenticated';
  const dispatch = useDispatch();
  const router = useRouter();
  const [value, setValue] = useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const [watchlistExists, setWatchlistExists] = useState(false);
  const [totalDuration, setTotalDuration] = useState(0);
  // const { data: singleMovieData, isLoading } = useMovieById(router.query.id);

  const { mutateAsync: addWatchlist, isLoading: isLoadingPost } =
    useAddToWatchlist();
  const { mutateAsync: removeWatchlist, isLoading: isLoadingRemove } =
    useRemoveFromWatchlist();

  const {
    data: singleYoutubeData,
    isLoading,
    error: singleYoutubeError,
  } = useSWR(`${GET_MOVIES_BASIC}${router.query.id}`);

  const {
    data: episodeData,
    isLoading: isEpisodeLoading,
    error: isEpisodeError,
  } = useSWR(`${GET_MOVIES_BASIC}${router.query.id}/episodes`);

  const {
    data: commentData,
    isLoading: isCommentLoading,
    error: isCommentError,
  } = useSWR(`${GET_MOVIES_BASIC}${router.query.id}/comments`);
  const [rating, setRating] = useState(0);

  // Catch Rating value
  const handleRating = async (rate: number) => {
    setRating(rate);
    console.log(hasCookie('token'));
    console.log('GET COOKIE ', getCookie('token'));
    fetch(`${GET_MOVIES_BASIC}${router.query.id}/user-rate`, {
      method: 'POST',
      headers: {
        authorization: getCookie('token') ?? '', // 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MjJ9.mXKzpLEKc5mJTCU6dPE60LQiaz0ZLo7pAyQ4zI25fgw',
      },
      body: JSON.stringify({ rate: rate }),
    }).then((response) => response.json());
    // other logic
  };
  // Optinal callback functions
  const onPointerEnter = () => console.log('Enter');
  const onPointerLeave = () => console.log('Leave');
  const onPointerMove = (value: number, index: number) =>
    console.log(value, index);

  const tooltipArray = [
    '🤮최악',
    '👎싫어',
    '🐶노잼',
    '😴노잼',
    '😩별로',
    '🤐보통',
    '😃볼만함',
    '😁재밌어',
    '😍수작',
    '😎명작',
  ];
  const fillColorArray = [
    '#f17a45',
    '#f17a45',
    '#f19745',
    '#f19745',
    '#f1a545',
    '#f1a545',
    '#f1b345',
    '#f1b345',
    '#f1d045',
    '#f1d045',
  ];
  useEffect(() => {
    if (!router.isReady) return;
    console.log(router.query, '🙆‍♀️!');
  }, [router.isReady]);

  useEffect(() => {
    var duration = 0;
    console.log('Duration Data', duration);
    episodeData?.episodes.map((episode: any) => {
      console.log(duration);
      duration += dayjs.duration(episode.duration).asMilliseconds();
    });
    setTotalDuration(duration);
  }, [episodeData]);

  // const {
  //   data: watchlistData,
  //   isLoading: isWatchlistLoad,
  //   isFetching,
  //   error,
  // } = useWatchlistById(singleMovieData?.id);

  // useEffect(() => {
  //   setWatchlistExists(false);
  //   if (watchlistData?.media) setWatchlistExists(true);
  //   if (error) setWatchlistExists(false);
  // }, [singleMovieData?.id, isWatchlistLoad, isFetching, error]);

  if (isLoading) return <LinearProgress />;

  const {
    released_date,
    country_name,
    genres,
    participants,
    average_rating,
    poster_image,
    title,
    trailer,
    description,
    rating_users,
  } = singleYoutubeData?.movie_info as YoutubeDetail;

  const handleAddToWatchlist = async () => {
    try {
      if (isNotLogged) {
        dispatch(
          setNotify({
            isOpen: true,
            message: 'Login to add to your watchlist.',
            type: 'warning',
          })
        );
        return signIn();
      }

      // const data = await addWatchlist({
      //   token: sessionData?.user?.email ?? '',
      //   tmdb_id: id,
      //   media_type: 'movie',
      //   media_name: title,
      //   release_date: release_date,
      //   poster_path: poster_path,
      // });

      setWatchlistExists(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleRemoveWatchlist = async () => {
    try {
      const data = await removeWatchlist({
        token: sessionData?.user?.email ?? '',
        tmdbId: 0,
      });

      setWatchlistExists(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <CustomHead title={title} media_type={'movie'} />
      <Grid sx={classes.main}>
        <Grid item sx={classes.top}>
          <Box
            sx={classes.backgroundCover}
            style={{
              backgroundImage: `url(${poster_image}`,
            }}
          ></Box>
          <Box sx={classes.imageBox}>
            <Image
              fill
              className='poster-img'
              placeholder='blur'
              style={
                poster_image
                  ? { objectFit: 'cover', objectPosition: 'top' }
                  : { objectFit: 'contain', objectPosition: 'center' }
              }
              blurDataURL={blurData}
              src={formatImgURL(`${poster_image}`)}
              sizes={formatImgURL(`${poster_image}`)}
              alt={title}
            />
          </Box>
          <Box sx={classes.detailMid}>
            <Box>
              <Typography variant='h4' sx={classes.mediaTitle}>
                {title} [{episodeData?.episodes.length}Ep] (
                {dayjs.duration(totalDuration).asMinutes().toFixed(0)}
                분)
              </Typography>
              <Grid sx={classes.belowTitle}>
                <Grid item>{new Date(released_date ?? '').getFullYear()}</Grid>
                <Grid item>
                  {genres?.map((genre, index) => (
                    <React.Fragment key={index}>{genre}</React.Fragment>
                  ))}
                </Grid>
                <Grid item>
                  {country_name?.map((country, index) => (
                    <React.Fragment key={index}>{country}</React.Fragment>
                  ))}
                </Grid>

                {/* <Grid item>{formatMinutes(runtime)}</Grid> */}
              </Grid>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
              <Typography variant='h4' sx={classes.mediaTitle}>
                {average_rating}({rating_users}개 투자)
              </Typography>
            </Box>
            <Box sx={classes.mediaBtns}>
              <Link
                href={`/youtube/${router.query.id}/${toUrlFriendly(
                  title
                )}/watch?video=${trailer}`}
                style={{ WebkitTapHighlightColor: 'transparent' }}
              >
                <Button
                  variant='contained'
                  color='secondary'
                  sx={classes.watchBtn}
                >
                  투자하기
                </Button>
              </Link>

              {watchlistExists ? (
                <LoadingButton
                  loading={isLoadingRemove}
                  variant='outlined'
                  color='error'
                  sx={classes.watchlistBtn}
                  onClick={handleRemoveWatchlist}
                >
                  찜취소
                </LoadingButton>
              ) : (
                <LoadingButton
                  loading={isLoadingPost}
                  variant='outlined'
                  color='secondary'
                  sx={classes.watchlistBtn}
                  onClick={handleAddToWatchlist}
                >
                  찜하기
                </LoadingButton>
              )}
            </Box>
            <Box>
              <Typography variant='body1' sx={classes.overview}>
                {description}
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Divider variant='middle' sx={{ bgcolor: 'secondary.light' }} />
        <Box sx={{ height: 25 }}></Box>
        <Grid item>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList
                onChange={handleChange}
                textColor='inherit'
                indicatorColor='secondary'
                aria-label='Episode Tabs'
              >
                <Tab
                  label={
                    <Typography variant='h5' sx={classes.mediaTitle}>
                      프로젝트 내용
                    </Typography>
                  }
                  value='1'
                />
                <Tab
                  label={
                    <Typography variant='h5' sx={classes.mediaTitle}>
                      댓글
                    </Typography>
                  }
                  value='2'
                />
              </TabList>
            </Box>
            <TabPanel value='1'>
              <EpisodeRoll episodeList={episodeData?.episodes} />
            </TabPanel>
            <TabPanel value='2'>
              <CommentRoll reviewList={commentData?.result} />
            </TabPanel>
          </TabContext>
        </Grid>
        {/* <Box sx={{ height: 25 }}></Box>
        <Divider variant='middle' sx={{ bgcolor: 'secondary.light' }} />
        <Box sx={{ height: 25 }}></Box>
        <Grid item>
        </Grid>
        <Box sx={{ height: 25 }}></Box>
        <Divider variant='middle' sx={{ bgcolor: 'secondary.light' }} />
        <Box sx={{ height: 25 }}></Box>
        <Grid item>
          <HighlightRoll episodeList={episodeData?.episodes} />
        </Grid> */}
        <Box sx={{ height: 25 }}></Box>

        {/* <Grid item>
          <CastRoll castList={cast} />
        </Grid> */}
        {/* {[
          { movieData: recommendations?.results, title: 'Our recommendations' },
          { movieData: similar?.results, title: 'Something similar' },
        ].map(({ youtubeData, title }) => (
          <Grid
            item
            key={title}
            sx={{ p: '20px 0' }}
            onClick={() => scrollToTop()}
          >
            <TileSlider youtubeData={youtubeData} />
          </Grid>
        ))} */}
      </Grid>
    </>
  );
}

// Commented to Remove SSR
// export async function getServerSideProps(ctx: GetServerSidePropsContext) {
//   const queryClient = new QueryClient();
//   const { id } = ctx.query;

//   try {
//     // fetching single movie details
//     await queryClient.fetchQuery([MovieQueryKey.SingleMovieData, id], () =>
//       getMovieById(id)
//     );

//     return {
//       props: {
//         dehydratedState: dehydrate(queryClient),
//       },
//     };
//   } catch (error) {
//     console.log(error);
//     return {
//       notFound: true,
//     };
//   }
// }

export default MovieInfo;

export const getServerSideProps: GetServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en')),
  },
});
