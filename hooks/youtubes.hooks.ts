import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import {
  getYoutubes,
  getYoutubeById,
  getPopularYoutubes,
  getRecentYoutubes,
  getTopYoutubes,
} from "../apis/youtubes.api";
import { IConutry } from "../utils/filterUtils";

export enum YoutubeQueryKey {
  YoutubeData = "YoutubeData",
  YoutubeStreamable = "YoutubeStreamable",
  SingleYoutubeData = "SingleYoutubeData",
  PopularYoutubes = "PopularYoutubes",
  RecentYoutubes = "RecentYoutubes",
  TopYoutubes = "TopYoutubes",
  SearchQuery = "SearchQuery",
  SearchPageQuery = "SearchPageQuery",
}

export const useYoutubes = () => {
  return useQuery([YoutubeQueryKey.YoutubeData], getYoutubes);
};

export const useYoutubeById = (youtubeId?: string | string[]) => {
  return useQuery([YoutubeQueryKey.SingleYoutubeData, youtubeId], () =>
    getYoutubeById(youtubeId)
  );
};

export const usePopularYoutubes = (
  releaseYear?: number | "",
  conutry?: IConutry
) => {
  return useInfiniteQuery(
    [YoutubeQueryKey.PopularYoutubes, conutry, releaseYear],
    (props) => getPopularYoutubes(props),
    {
      getNextPageParam: ({ page, total_pages }) => {
        return page < total_pages ? page + 1 : undefined;
      },
      select: (data) => {
        return data;
      },
    }
  );
};

export const useRecentYoutubes = (
  releaseYear?: number | "",
  conutry?: IConutry
) => {
  return useInfiniteQuery(
    [YoutubeQueryKey.RecentYoutubes, conutry, releaseYear],
    (props) => getRecentYoutubes(props),
    {
      getNextPageParam: ({ page, total_pages }) => {
        return page < total_pages ? page + 1 : undefined;
      },
      select: (data) => {
        return data;
      },
    }
  );
};

export const useTopYoutubes = (
  releaseYear?: number | "",
  conutry?: IConutry
) => {
  return useInfiniteQuery(
    [YoutubeQueryKey.TopYoutubes, conutry, releaseYear],
    (prop) => getTopYoutubes(prop),
    {
      getNextPageParam: ({ page, total_pages }) => {
        return page < total_pages ? page + 1 : undefined;
      },
      select: (data) => {
        return data;
      },
    }
  );
};
