import React, { useState } from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import { Box, Typography, Grid } from "@mui/material";

import { styles as classes } from "../../styles/styles";
import Poster from "../../components/Poster/Poster";
import Loader from "../../components/Loader/Loader";
import { useTopMovies } from "../../hooks/movies.hooks";
import { useTopYoutubes } from "../../hooks/youtubes.hooks";
import CustomHead from "../../components/CustomHead/CustomHead";
import { IConutry } from "../../utils/filterUtils";
import Filter from "../../components/Filter/Filter";

function TopRated() {
  const [country, setCountry] = useState<IConutry | undefined>();
  const [releaseYear, setReleaseYear] = useState<number | "">("");

  const {
    data: topYoutubes,
    isLoading,
    fetchNextPage,
    isFetching,
    hasNextPage,
  } = useTopYoutubes(releaseYear, country);
  // console.log('topMovies: ', topMovies)

  // if (isLoading) return <Loader />;

  return (
    <>
      <CustomHead title="Top rated Youtube to watch." media_type={"youtube"} />
      <Box sx={classes.pageContainer}>
        <Typography variant="h4" sx={classes.headTxt}>
          Top rated Youtubes
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
            <Grid container sx={classes.moviesContainer}>
              {topYoutubes?.pages.map((page) =>
                page.results.map((youtube) => (
                  <Grid item key={youtube.id}>
                    <Poster singleYoutubeData={youtube} />
                  </Grid>
                ))
              )}
            </Grid>
            {hasNextPage && (
              <Grid container justifyContent="center">
                <LoadingButton
                  onClick={() => fetchNextPage()}
                  loading={isFetching || isLoading}
                  loadingIndicator="Loading…"
                  color="secondary"
                  variant="contained"
                  size="large"
                  sx={classes.loadBtn}
                >
                  더보기
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
//     // fetching top rated movies detail
//     await queryClient.prefetchInfiniteQuery(
//       [MovieQueryKey.TopMovies],
//       ({ pageParam = 1 }) => getTopMovies(pageParam),
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

export default TopRated;
