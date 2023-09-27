import { QueryFunctionContext } from '@tanstack/react-query';
import { YoutubeData, YoutubeResult } from '../types/apiResponses';
import { IConutry } from '../utils/filterUtils';
import { YoutubeQueryKey } from '../hooks/youtubes.hooks';

// &with_original_language=hi
// &region=ae
// &include_adult=false&include_video=false
// &primary_release_date.gte=2020-01-01&primary_release_date.lte=2020-12-31

type Props = QueryFunctionContext<
  (number | '' | IConutry | YoutubeQueryKey | undefined)[]
>;

export const getYoutubes = async (): Promise<YoutubeResult[]> => {
  try {
    const youtubeRes = await fetch(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}`
    );
    const youtubeData: YoutubeData = await youtubeRes.json();

    if (youtubeData.hasOwnProperty('success'))
      throw new Error('Api call failed, check console.');

    return youtubeData.results;
  } catch (error) {
    console.log(error);
    throw new Error('Api call failed, check console.');
  }
};

export const getYoutubeById = async (
  youtubeId?: string | string[]
): Promise<YoutubeResult> => {
  try {
    const youtubeRes = await fetch(
      `https://api.themoviedb.org/3/movie/${youtubeId}?api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}&append_to_response=images,videos,credits,recommendations,similar`
    );
    const youtubeData: YoutubeResult = await youtubeRes.json();

    // failure if 'success' property exists
    if (youtubeData.hasOwnProperty('success'))
      throw new Error('Api call failed');

    return youtubeData;
  } catch (error) {
    console.log(error);
    throw new Error('Api call failed');
  }
};

// TODO: remove if not used
const getYoutubeStreamable = async (
  youtubeId: string | string[] | undefined
): Promise<boolean> => {
  if (youtubeId === undefined || Array.isArray(youtubeId)) {
    return false;
  }

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_Player_URL_VS}/${youtubeId}`,
      {
        method: 'HEAD',
      }
    );
    return response.ok;
  } catch (error) {
    console.error('Error youtube not available to stream:', error);
    return false;
  }
};

export const getPopularYoutubes = async (
  props: Props
): Promise<YoutubeData> => {
  const pageNum = props.pageParam || 1;
  const country = props.queryKey[1] as IConutry;
  const releaseYear = props.queryKey[2];

  const countryQuery = country
    ? `&with_original_language=${country.langCode}&region=${country.code}`
    : '';

  const releaseYearQuery = releaseYear
    ? `&primary_release_date.gte=${releaseYear}-01-01&primary_release_date.lte=${releaseYear}-12-31`
    : '';

  try {
    const youtubeRes = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}&page=${pageNum}${countryQuery}${releaseYearQuery}&include_adult=false&include_video=false`
    );
    const youtubeData: YoutubeData = await youtubeRes.json();

    if (youtubeData.hasOwnProperty('success'))
      throw new Error('Api call failed, check console.');

    // console.log(youtubeData);
    return youtubeData;
  } catch (error) {
    console.log(error);
    throw new Error('Api call failed, check console.');
  }
};

export const getRecentYoutubes = async (props: Props): Promise<YoutubeData> => {
  // console.log("RR", props);

  const pageNum = props.pageParam || 1;
  const country = props.queryKey[1] as IConutry;
  const releaseYear = props.queryKey[2];

  const countryQuery = country
    ? `&with_original_language=${country.langCode}&region=${country.code}`
    : '';

  const releaseYearQuery = releaseYear
    ? `&primary_release_date.gte=${releaseYear}-01-01&primary_release_date.lte=${releaseYear}-12-31`
    : '';

  try {
    const youtubeRes = await fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}&page=${pageNum}${countryQuery}${releaseYearQuery}&include_adult=false&include_video=false`
    );
    const youtubeData: YoutubeData = await youtubeRes.json();

    if (youtubeData.hasOwnProperty('success'))
      throw new Error('Api call failed, check console.');

    return youtubeData;
  } catch (error) {
    console.log(error);
    throw new Error('Api call failed, check console.');
  }
};

export const getTopYoutubes = async (props: Props): Promise<YoutubeData> => {
  // console.log("RR", props);

  const pageNum = props.pageParam || 1;
  const country = props.queryKey[1] as IConutry;
  const releaseYear = props.queryKey[2];

  const countryQuery = country
    ? `&with_original_language=${country.langCode}&region=${country.code}`
    : '';

  const releaseYearQuery = releaseYear
    ? `&primary_release_date.gte=${releaseYear}-01-01&primary_release_date.lte=${releaseYear}-12-31`
    : '';

  try {
    const youtubeRes = await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}&page=${pageNum}${countryQuery}${releaseYearQuery}&include_adult=false&include_video=false`
    );
    const youtubeData: YoutubeData = await youtubeRes.json();

    if (youtubeData.hasOwnProperty('success'))
      throw new Error('Api call failed, check console.');

    return youtubeData;
  } catch (error) {
    console.log(error);
    throw new Error('Api call failed, check console.');
  }
};

// TODO: remove if not used
const getExploreYoutubes = async (
  props: QueryFunctionContext<(IConutry | YoutubeQueryKey | undefined)[]>
): Promise<YoutubeData> => {
  console.log('PP', props);
  // &with_original_language=hi
  // &region=ae
  // &include_adult=false
  // &primary_release_date.gte=2020-01-01&primary_release_date.lte=2020-12-31

  const pageNum = props.pageParam || 1;
  const country = props.queryKey[1] as IConutry;

  const countryQuery = country
    ? `&with_original_language=${country.langCode}&region=${country.code}`
    : '';

  try {
    const youtubeRes = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}&page=${pageNum}${countryQuery}`
    );
    const youtubeData: YoutubeData = await youtubeRes.json();

    if (youtubeData.hasOwnProperty('success'))
      throw new Error('Api call failed, check console.');

    return youtubeData;
  } catch (error) {
    console.log(error);
    throw new Error('Api call failed, check console.');
  }
};
