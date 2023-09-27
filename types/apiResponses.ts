export interface SearchData {
  page: number;
  results: MovieResult[] | SeriesResult[] | PeopleResult[];
  total_pages: number;
  total_results: number;
}

export interface MovieData {
  page: number;
  results: MovieResult[];
  total_pages: number;
  total_results: number;
}

export interface MovieResult {
  adult: boolean;
  backdrop_path: string;
  id: number;
  title: string;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  media_type: MediaType.Movie;
  genre_ids: number[];
  popularity: number;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  runtime: number;
  homepage: string;
  genres: { name: string; id: number }[];
  spoken_languages: { english_name: string; name: string }[];
  images: { backdrops: { file_path: string }[] };
  credits: {
    cast: Cast[];
  };
  videos: {
    results: ClipResults[];
  };
  recommendations: { results: MovieResult[] };
  similar: { results: MovieResult[] };
  status: string;
  revenue: number;
  budget: number;
  imdb_id: string;
}

export type Cast = {
  character: string;
  name: string;
  profile_path: string;
  id: string;
};

export type ClipResults = {
  key: string;
  site: string;
  name: string;
};

export enum MediaType {
  Movie = 'movie',
  Tv = 'tv',
  Person = 'person',
  Youtube = 'youtube',
}

export interface SeriesData {
  page: number;
  results: SeriesResult[];
  total_pages: number;
  total_results: number;
}

export interface SeriesResult {
  adult: boolean;
  backdrop_path: string;
  id: number;
  name: string;
  original_language: string;
  original_name: string;
  overview: string;
  poster_path: string;
  media_type: MediaType.Tv;
  genre_ids: number[];
  popularity: number;
  first_air_date: string;
  vote_average: number;
  vote_count: number;
  number_of_seasons: number;
  number_of_episodes: number;
  origin_country: string[];
  episode_run_time: number[];
  homepage: string;
  genres: { name: string; id: number }[];
  status: string;
  spoken_languages: { english_name: string; name: string }[];
  images: { backdrops: { file_path: string }[] };
  credits: {
    cast: Cast[];
  };
  videos: {
    results: ClipResults[];
  };
  recommendations: { results: SeriesResult[] };
  similar: { results: SeriesResult[] };
  seasons: ShowSeason[];
}

export interface ShowSeason {
  air_date: string;
  episode_count: number;
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  season_number: number;
  episodes?: ShowEpisode[];
}

export interface ShowEpisode {
  air_date: Date;
  episode_number: number;
  id: number;
  name: string;
  overview: string;
  production_code: string;
  runtime: number;
  season_number: number;
  show_id: number;
  still_path: string;
  vote_average: number;
  vote_count: number;
}

export interface PeopleData {
  page: number;
  results: PeopleResult[];
  total_pages: number;
  total_results: number;
}

export enum Gender {
  Female = 1,
  Male = 2,
}
export interface PeopleResult {
  adult: boolean;
  id: number;
  name: string;
  original_name: string;
  media_type: MediaType.Person;
  popularity: number;
  gender: Gender;
  also_known_as: string[];
  known_for_department: KnownForDepartment;
  profile_path: string;
  biography: string;
  imdb_id: string;
  deathday: string | null;
  birthday: string;
  place_of_birth: string;
  homepage: string | null;
  known_for: KnownFor[];
  images: { profiles: { file_path: string }[] };
  movie_credits: { cast: MovieResult[] };
  tv_credits: { cast: SeriesResult[] };
}

export interface KnownFor {
  adult: boolean;
  backdrop_path: null | string;
  id: number;
  name?: string;
  original_language: OriginalLanguage;
  original_name?: string;
  overview: string;
  poster_path: string;
  media_type: KnownForMediaType;
  genre_ids: number[];
  popularity: number;
  first_air_date?: Date;
  vote_average: number;
  vote_count: number;
  origin_country?: string[];
  title?: string;
  original_title?: string;
  release_date?: Date;
  video?: boolean;
}

export enum KnownForMediaType {
  Movie = 'movie',
  Tv = 'tv',
}

export enum OriginalLanguage {
  En = 'en',
  Ja = 'ja',
  Kn = 'kn',
  Ta = 'ta',
  Te = 'te',
}

export enum KnownForDepartment {
  Acting = 'Acting',
  Directing = 'Directing',
}

export interface YoutubeData {
  page: number;
  results: YoutubeResult[];
  total_pages: number;
  total_results: number;
}

export interface YoutubeResult {
  movie_id: string;
  released_date?: Date | null | undefined;
  country_name?: string[] | null | undefined;
  average_rating: number;
  poster_image: string;
  movie_name: string;
  trailer: string;
  genres: string[] | null | undefined;
  total_views: number;
  total_likes: number;
  total_comments: number;
  running_time: number;
  total_episodes: number;
}

//  {"movie_info": {"title": "\uba38\ub2c8\uac8c\uc784",
// "release_date": "2021-04-15",
// "genre": ["\uc6f9\uc608\ub2a5"],
// "country": ["\ud55c\uad6d"],
// "poster_image": "https://img.youtube.com/vi/L0qbcGt4uWk/mqdefault.jpg",
//"trailer": "AFpbtPkuGD8",
// "image_url": [],
// "participants": [{"name": "\ub2c8\uac38\ub974", "role": "8\ubc88 \ucc38\uac00\uc790", "image": "https://i.namu.wiki/i/0B2gGCFycfi12d4TX4lzo7QzdcJMsnCe7sQqaB10uU-VkkmvjAPCrbEUlId0TpDhZkoLtjCmmlP82qpRWaPHZNSqkBBNlN7482iFD_pkWOeejYxRxnFnFU11GLVVk6ZudQqsU22vGPXDjp9kBitidg.webp"}],
// "description": "\uc720\ud29c\ubc84 \uc9c4\uc6a9\uc9c4\uc774 \uae30\ud68d\ud55c \ub300\ud55c\ubbfc\uad6d\uc758 \uc6f9\uc608\ub2a5.\r\n\r\n\ub124\uc774\ubc84 \uc6f9\ud230 \u300a\uba38\ub2c8\uac8c\uc784\u300b\uc744 \uc2e4\uc0ac\ud654\ud55c \ucf58\ud150\uce20\uba70, \ubc00\ud3d0\ub41c \uacf5\uac04\uacfc \uc57d 4\uc5b5 8\ucc9c\ub9cc \uc6d0\uc758 \ub3c8 \uc55e\uc5d0\uc11c \ub098\ud0c0\ub098\ub294 \uc228\uaca8\uc9c4 \uc778\uac04\uc131\uc744 \uc54c\uc544\ubcf4\uace0\uc790 \ud558\ub294 \ucf58\ud150\uce20\ub2e4.",
// "rating_users": 2, "average_rating": "4.0"}}
export interface YoutubeDetail {
  movie_id: string;
  released_date?: Date | null | undefined;
  country_name?: string[] | null | undefined;
  genres: string[] | null | undefined;
  participants: { name: string; role: string; image: string }[];
  average_rating: number;
  poster_image: string;
  title: string;
  trailer: string;
  description: string;
  rating_users: number;
}

export type EpisodeResults = {
  [index: string]: string | number | Date | any;
  episode_id: string;
  name: string;
  release_date: Date;
  description: string;
  link: string;
  viewCount: number;
  likeCount: number;
  commentCount: number;
  duration: number;
  highlights: any;
  topComments: any;
};

export type ReviewResults = {
  user_id: string;
  user_name: string;
  user_image: string;
  comment: string;
  user_rating: number;
  spoiler: boolean;
};

export type ChannelResults = {
  channel_id: string;
  handle: string;
  title: string;
  description: string;
  thumbnail: string;
  video_count: number;
};

// id": 1, "title": "test", "subtitle": "1", "link": "https://jackpotcast.com", "image_url": "https://i.namu.wiki/i/0B2gGCFycfi12d4TX4lzo7QzdcJMsnCe7sQqaB10uU-VkkmvjAPCrbEUlId0TpDhZkoLtjCmmlP82qpRWaPHZNSqkBBNlN7482iFD_pkWOeejYxRxnFnFU11GLVVk6ZudQqsU22vGPXDjp9kBitidg.webp", "order": 1, "type": "main", "created_at": "2023-09-25T04:10:26.257Z", "updated_at": "2023-09-25T04:10:26.257Z"}
export interface BannerResult {
  id: string;
  title: string;
  subtitle: string;
  link: string;
  image_url: string;
  m_image_url: string;
  order: number;
  type: string;
  created_at: Date;
  updated_at: Date;
}

export interface NoticeResult {
  id: string;
  title: string;
  content: string;
  type: string;
  created_at: Date;
  updated_at: Date;
}
