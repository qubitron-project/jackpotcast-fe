import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  Button,
  ButtonGroup,
  Grid,
  LinearProgress,
  Typography,
} from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

import TileSlider from '../../../../components/TileSider/TileSlider';
import { styles as classes } from '../../../../styles/watchMovie.styles';
import { EpisodeResults } from '../../../../types/apiResponses';
import { useMovieById } from '../../../../hooks/movies.hooks';
import CustomHead from '../../../../components/CustomHead/CustomHead';
import { convertToNumber } from '../../../../utils/utils';
import useSWR from 'swr';
import {
  GET_MOVIES_LIST,
  GET_MOVIES_BASIC,
  GET_MOVIES_GENRE,
} from '../../../api/config';

function Watch() {
  const router = useRouter();
  const { id, name, video } = router.query;
  const [player, setPlayer] = useState<1 | 2 | 3>(1);
  const { data: singleMovieData, isLoading } = useMovieById(id);
  const {
    data: episodeData,
    isLoading: isEpisodeLoading,
    error: isEpisodeError,
  } = useSWR(`${GET_MOVIES_BASIC}${router.query.id}/episodes`);

  useEffect(() => {}, [isLoading]);

  if (isLoading) return <LinearProgress />;

  const { name: episodeName, link } = episodeData as EpisodeResults;

  return (
    <>
      <CustomHead title={'Watching ' + name} media_type={'movie'} />
      <Grid container>
        <Grid item sx={classes.watchHead}>
          <Link href={`/youtube/${id}/${name}`} className='backToInfo'>
            <Button
              variant='outlined'
              color='secondary'
              startIcon={<ArrowBackIosNewIcon sx={classes.backIco} />}
              size='small'
            >
              Back to {name}
            </Button>
          </Link>
        </Grid>

        <Grid item sx={classes.moviePlayer}>
          <iframe
            allowFullScreen
            id='watch-iframe'
            src={`https://www.youtube.com/embed/${video}`}
          ></iframe>
        </Grid>

        {/* {[
          { movieData: recommendations?.results, title: 'Recommended for you' },
          { movieData: similar?.results, title: 'Related movies' },
        ].map(({ movieData, title }) => (
          <Grid item sx={classes.mustWatch} key={title}>
            <TileSlider title={title} movieData={movieData} />
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

export default Watch;
