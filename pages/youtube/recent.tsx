import React, { useState } from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import { Box, Typography, Grid } from '@mui/material';

import Poster from '../../components/Poster/Poster';
import { styles as classes } from '../../styles/styles';
import Loader from '../../components/Loader/Loader';
import { useRecentMovies } from '../../hooks/movies.hooks';
import { useRecentYoutubes } from '../../hooks/youtubes.hooks';
import CustomHead from '../../components/CustomHead/CustomHead';
import { IConutry } from '../../utils/filterUtils';
import Filter from '../../components/Filter/Filter';
import { useTranslation } from 'next-i18next';
import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

function Recent() {
  const [country, setCountry] = useState<IConutry | undefined>();
  const [releaseYear, setReleaseYear] = useState<number | ''>('');
  const { t } = useTranslation('common');

  const {
    data: recentYoutubes,
    isLoading,
    fetchNextPage,
    isFetching,
    hasNextPage,
  } = useRecentYoutubes(releaseYear, country);
  // console.log('RecentMovies: ', recentMovies)

  // if (isLoading) return <Loader />;

  return (
    <>
      <CustomHead title='Most recent movies to watch.' media_type={'movie'} />
      <Box sx={classes.pageContainer}>
        <Typography variant='h4' sx={classes.headTxt}>
          Recent movies
        </Typography>

        <Filter
          country={country}
          setCountry={setCountry}
          releaseYear={releaseYear}
          setReleaseYear={setReleaseYear}
        />

        {isLoading ? (
          <Loader />
        ) : (
          <>
            {hasNextPage && (
              <Grid container justifyContent='center'>
                <LoadingButton
                  onClick={() => fetchNextPage()}
                  loading={isFetching || isLoading}
                  loadingIndicator='Loading…'
                  color='secondary'
                  variant='contained'
                  size='large'
                  sx={classes.loadBtn}
                >
                  {t('show_more')}
                </LoadingButton>
              </Grid>
            )}
          </>
        )}
      </Box>
    </>
  );
}

// Commented to Remove SSR
// export const getServerSideProps = withCSR(async () => {
//   const queryClient = new QueryClient();

//   try {
//     // fetching recent movies detail
//     await queryClient.prefetchInfiniteQuery(
//       [MovieQueryKey.RecentMovies],
//       ({ pageParam = 1 }) => getRecentMovies(pageParam),
//       {
//         getNextPageParam: (lastPage) => {
//           return lastPage.page < lastPage.total_pages
//             ? lastPage.page + 1
//             : undefined;
//         },
//       }
//     );

//     return {
//       props: {
//         dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
//       },
//     };
//   } catch (error) {
//     console.log(error);
//     return {
//       notFound: true,
//     };
//   }
// });

export default Recent;

export const getServerSideProps: GetServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en')),
  },
});
