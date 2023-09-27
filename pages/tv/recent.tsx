import React from 'react';
import { LoadingButton } from '@mui/lab';
import { Box, Typography, Grid } from '@mui/material';

import Loader from '../../components/Loader/Loader';
import TvPoster from '../../components/TvPoster/TvPoster';
import { styles as classes } from '../../styles/styles';
import { useRecentSeries } from '../../hooks/series.hooks';
import CustomHead from '../../components/CustomHead/CustomHead';
import { useTranslation } from 'next-i18next';
import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

function Recent() {
  const {
    data: recentSeries,
    isLoading,
    fetchNextPage,
    isFetching,
    hasNextPage,
  } = useRecentSeries();
  // console.log('recentSeries: ', recentSeries)
  const { t } = useTranslation('common');
  if (isLoading) return <Loader />;

  return (
    <>
      <CustomHead title='Most recent TV shows to watch.' media_type='tv' />
      <Box sx={classes.pageContainer}>
        <Typography variant='h4' sx={classes.headTxt}>
          Most recent TV Shows
        </Typography>
        <Grid container sx={classes.moviesContainer}>
          {recentSeries?.pages.map((page) =>
            page.results.map((show) => (
              <Grid item key={show.id}>
                <TvPoster singleShowData={show} />
              </Grid>
            ))
          )}
        </Grid>
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
      </Box>
    </>
  );
}

// Commented to Remove SSR
// export const getServerSideProps = withCSR(async () => {
//   const queryClient = new QueryClient();

//   try {
//     // fetching recent series detail
//     await queryClient.prefetchInfiniteQuery(
//       [SeriesQueryKey.RecentSeries],
//       ({ pageParam = 1 }) => getRecentSeries(pageParam),
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
