import React, { useEffect } from 'react';
import Image from 'next/image';
import { Box, Grid, Typography } from '@mui/material';
import { signIn, useSession } from 'next-auth/react';
import { LoadingButton } from '@mui/lab';

import { styles as classes } from '../../styles/styles';
import Loader from '../../components/Loader/Loader';
import CustomHead from '../../components/CustomHead/CustomHead';
import Poster from '../../components/Poster/Poster';
import { WatchlistMediaType } from '../../types/watchlist.apiResponses';
import {
  MovieResult,
  SeriesResult,
  YoutubeResult,
} from '../../types/apiResponses';
import { useWatchlist } from '../../hooks/watchlist.hooks';
import { useTranslation } from 'next-i18next';
import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import useSWR from 'swr';
import { USERS_LIST } from '../api/config';
// import { fetcher } from '../../utils/fetcher';

function Watchlist() {
  const { data: wishlist, error } = useSWR(`${USERS_LIST}/wishlist/1`);

  if (error) return 'An error has occurred.';
  if (!wishlist) return 'Loading...';

  return (
    <>
      {wishlist.movies?.map((page: any) => (
        <Grid item key={page._id}>
          <Box sx={classes.emptyList}>
            <Image
              width={128}
              height={128}
              src={page.poster_image}
              alt='empty'
            />
            <Typography variant='h4' sx={classes.headTxt}>
              {page.movie_name}
            </Typography>
            <Typography variant='h4' sx={classes.headTxt}>
              {page.average_rating}
            </Typography>
          </Box>
        </Grid>
      ))}
    </>
  );

  // const { status } = useSession();
  // const isNotLogged = status === 'unauthenticated';
  // const { t } = useTranslation('common');
  // const {
  //   data: wishlist,
  //   error: isWishlistError,
  //   isLoading: isWishlistLoading,
  // } = useSWR(`https://jsonplaceholder.typicode.com/todos/1`, fetcher, {
  //   onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
  //     // 상태코드가 404라면 더이상 시도하지 않습니다.
  //     if (error.status === 404) return;
  //     // 최대 10번까지만 시도합니다.
  //     if (retryCount >= 10) return;
  //     // 5초에 한 번 재검증합니다.
  //     setTimeout(() => revalidate({ retryCount }), 5000);
  //   },
  // });

  // useEffect(() => {
  //   if (isNotLogged) {
  //     signIn();
  //     return;
  //   }
  // }, [isNotLogged]);

  // const {
  //   data: watchlistData,
  //   isLoading,
  //   fetchNextPage,
  //   isFetching,
  //   hasNextPage,
  // } = useWatchlist();
  // // console.log("watchlistXXX: ", watchlistData);

  // if (isLoading) return <Loader />;
  // if (isWishlistError) return <div>failed to load</div>;
  // if (!wishlist) return <div>loading...</div>;
  // console.log(wishlist);

  // return (
  //   <>
  //     {wishlist?.map((page: any) => (
  //       <Grid item key={page._id}>
  //         <Typography variant='h4' sx={classes.headTxt}>
  //           {page.movie_name}
  //         </Typography>
  //       </Grid>
  //     ))}
  //   </>
  // );
  // return (
  //   <>
  //     <CustomHead title='Your watchlist.' media_type={'movie'} />

  //     <Box sx={classes.pageContainer}>
  //       {!wishlist ? (
  //         <Box sx={classes.emptyList}>
  //           <Image
  //             width={128}
  //             height={128}
  //             src='/assets/alone.png'
  //             alt='empty'
  //           />
  //           <Typography variant='h4' sx={classes.headTxt}>
  //             Nothing added to your watchlist yet.
  //           </Typography>
  //         </Box>
  //       ) : (
  //         <Typography variant='h4' sx={classes.headTxt}>
  //           Your watchlist
  //         </Typography>
  //       )}

  //       <Grid container sx={classes.moviesContainer}>
  //         {wishlist?.pages.map((page) =>
  //           page.results.map((media) => (
  //             <Grid item key={media._id}>
  //               {media.media_type === WatchlistMediaType.Movie ? (
  //                 <Poster
  //                   singleYoutubeData={
  //                     {
  //                       ...media,
  //                       id: media.tmdb_id,
  //                       title: media.media_name,
  //                     } as unknown as YoutubeResult
  //                   }
  //                 />
  //               ) : (
  //                 <TvPoster
  //                   singleShowData={
  //                     {
  //                       ...media,
  //                       id: media.tmdb_id,
  //                       name: media.media_name,
  //                       first_air_date: media.release_date,
  //                     } as unknown as SeriesResult
  //                   }
  //                 />
  //               )}
  //             </Grid>
  //           ))
  //         )}
  //       </Grid>
  //       {hasNextPage && (
  //         <Grid container justifyContent='center'>
  //           <LoadingButton
  //             onClick={() => fetchNextPage()}
  //             loading={isFetching || isLoading}
  //             loadingIndicator='Loading…'
  //             color='secondary'
  //             variant='contained'
  //             size='large'
  //             sx={classes.loadBtn}
  //           >
  //             {t('show_more')}
  //           </LoadingButton>
  //         </Grid>
  //       )}
  //     </Box>
  //   </>
  // );
}

export default Watchlist;

export const getServerSideProps: GetServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en')),
  },
});
