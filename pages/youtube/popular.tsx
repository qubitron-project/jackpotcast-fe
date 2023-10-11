import React, { useState } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';

import Poster from '../../components/Poster/Poster';
import { styles as classes } from '../../styles/styles';
import Loader from '../../components/Loader/Loader';
// import { usePopularMovies } from '../../hooks/movies.hooks';
import { usePopularYoutubes } from '../../hooks/youtubes.hooks';
import CustomHead from '../../components/CustomHead/CustomHead';
import { IConutry } from '../../utils/filterUtils';
import Filter from '../../components/Filter/Filter';
import { useTranslation } from 'next-i18next';
import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

function Popular() {
  const [country, setCountry] = useState<IConutry | undefined>();
  const [releaseYear, setReleaseYear] = useState<number | ''>('');
  const { t } = useTranslation('common');

  const {
    data: popularYoutubes,
    isLoading,
    fetchNextPage,
    isFetching,
    hasNextPage,
  } = usePopularYoutubes(releaseYear, country);
  // console.log("popularMovies: ", popularMovies);

  // if (isLoading) return <Loader />;

  return (
    <>
      <CustomHead title='Popular movies to watch.' media_type={'movie'} />

      <Box sx={classes.pageContainer}>
        <Typography variant='h4' sx={classes.headTxt}>
          Popular movies
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
//     // fetching popular movies detail
//     await queryClient.prefetchInfiniteQuery(
//       [MovieQueryKey.PopularMovies],
//       ({ pageParam = 1 }) => getPopularMovies(pageParam),
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

export default Popular;

export const getServerSideProps: GetServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en')),
  },
});
