import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useInfiniteQuery } from '@tanstack/react-query';
import { LoadingButton } from '@mui/lab';
import { Box, Typography, Grid } from '@mui/material';

import CustomHead from '../../components/CustomHead/CustomHead';
import { MovieQueryKey } from '../../hooks/movies.hooks';
import { getSearchQuery } from '../../apis/search.api';
import Poster from '../../components/Poster/Poster';
import { styles as classes } from '../../styles/styles';
import { MediaType } from '../../types/apiResponses';
import { useTranslation } from 'next-i18next';
import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import useSWR from 'swr';
import {
  GET_MOVIES_LIST,
  GET_MOVIES_BASIC,
  GET_MOVIES_GENRE,
} from '../api/config';

function SearchPage() {
  const router = useRouter();
  const { t } = useTranslation('common');
  const { q } = router.query;

  const {
    data: searchResults,
    isLoading: isMovieLoading,
    error: isMovieError,
  } = useSWR(`${GET_MOVIES_LIST}search=${q}`);

  // const {
  //   data: searchResults,
  //   isLoading,
  //   fetchNextPage,
  //   isFetching,
  //   hasNextPage,
  //   refetch,
  // } = useSearchPageQuery(q);
  // console.log('searchResults: ', searchResults);

  // useEffect(() => {
  //   refetch();
  // }, [q]);

  return (
    <>
      <CustomHead
        title={t('common:search_title', { q })}
        media_type={'movie'}
      />

      <Box sx={classes.pageContainer}>
        <Typography variant='h4' sx={classes.headTxt}>
          {t('common:search_title', { q })}
        </Typography>

        {/* <Grid container sx={classes.moviesContainer}>
          {searchResults?.pages.map((page) =>
            page.results.map((media) => (
              <Grid item key={media.id}>
                {media.media_type === MediaType.Youtube ? (
                  <Poster singleYoutubeData={media} />
                ) : media.media_type === MediaType.Tv ? (
                  <TvPoster singleShowData={media} />
                ) : (
                  <PersonPoster singlePersonData={media} />
                )}
              </Grid>
            ))
          )}
        </Grid> */}

        {/* {hasNextPage && (
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
        )} */}
      </Box>
    </>
  );
}

export const useSearchPageQuery = (searchQuery?: string | string[]) => {
  return useInfiniteQuery(
    [MovieQueryKey.SearchPageQuery],
    ({ pageParam = 1 }) => getSearchQuery(pageParam, searchQuery),
    {
      getNextPageParam: ({ page, total_pages }) => {
        return page < total_pages ? page + 1 : undefined;
      },
      select: (data) => {
        return data;
      },
      enabled: !!searchQuery,
    }
  );
};

export default SearchPage;

export const getServerSideProps: GetServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en')),
  },
});
