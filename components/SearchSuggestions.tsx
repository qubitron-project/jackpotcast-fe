import Link from 'next/link';
import { useRouter } from 'next/router';
import { useFetch } from 'usehooks-ts';
import { YoutubeResult } from '../types/apiResponses';
import { toUrlFriendly } from '../utils/utils';
import Poster from '../components/Poster/Poster';
import useSWR from 'swr';
import { GET_MOVIES_LIST } from '../pages/api/config';

// Step 0 : Define the types
// API Response
type SearchResponse = {
  youtubeData?: YoutubeResult[];
};

type SearchSuggestion = {
  movie_name: string;
  movie_id: string;
  poster_image: string;
  average_rating: string;
  url: string;
};

const SearchSuggestions = () => {
  const router = useRouter();
  // Step 1: Parse the router path

  const query =
    router.asPath
      .split('/')
      .filter((q) => !!q)
      .pop() ?? ''; // transforms: "/products/iphone" into "iphone"
  console.log(query);
  const {
    data: movies,
    isLoading: isMovieLoading,
    error: isMovieError,
  } = useSWR(`${GET_MOVIES_LIST}search=${query}`);
  console.log(`${GET_MOVIES_LIST}search=${query}`);

  // Step 2: Create the URL
  // We're using dummyjson as an example
  // Most likely you have your own search api or If you're using algolia, that's even better.
  const url = new URL(`${process.env.NEXT_PUBLIC_BE_ROUTE}/movies`);
  console.log(decodeURI(query));
  url.searchParams.set('search', decodeURI(query));
  url.searchParams.set('limit', '10');

  // Step 3: Call the search API using useFetch. This can be improved If you have your search API
  // const { youtubeData = { results: [] }, error } = useFetch<SearchResponse>(
  //   url.toString()
  // );

  console.log(movies);

  // Step 4: Map the results to our list of suggestions to show the user
  // const suggestions = data?.map<SearchSuggestion>((p) => {
  //   return {
  //     movie_name: p.movie_name,
  //     movie_id: p.movie_id,
  //     poster_image: p.poster_image,
  //     average_rating: p.average_rating,
  //     // using home page route since the api doesn't return some kind of URL.
  //     url: '/',
  //   };
  // });

  if (!movies || isMovieError) return null;

  // Step 5: render the alternative suggestions
  return (
    <ul className='grid grid-cols-2 my-2'>
      {movies.results?.map((singleYoutubeData: YoutubeResult, index: any) => (
        <div key={index}>
          <Poster singleYoutubeData={singleYoutubeData} />
        </div>
        // <li key={index}>
        //   <Link
        //     href={`/youtube/${singleYoutubeData.movie_id}/${toUrlFriendly(
        //       singleYoutubeData.movie_name
        //     )}`}
        //     className='hover:underline hover:text-indigo-400 text-indigo-500 '
        //   >
        //     {singleYoutubeData.movie_name}
        //   </Link>
        // </li>
      ))}
    </ul>
  );
};

export default SearchSuggestions;
