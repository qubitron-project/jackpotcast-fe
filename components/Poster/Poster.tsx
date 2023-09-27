import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Box, CircularProgress, Typography } from '@mui/material';

import { styles as classes } from './poster.styles';
import { YoutubeResult } from '../../types/apiResponses';
import {
  blurData,
  formatImgSrc,
  formatImgURL,
  toPercent,
  toUrlFriendly,
} from '../../utils/utils';
import StarIcon from '@mui/icons-material/Star';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import formatNumber from '../../utils/utils';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
dayjs.extend(duration);

// {"country_name": ["\ud55c\uad6d"],
// "movie_name": "\uc6b0\ub9c8\uac8c\uc784",
//  "movie_id": 2,
//  "released_date": "2023-07-31",
//  "average_rating": "4.8",
//  "poster_image": "https://img.youtube.com/vi/G5M5xDdmF7M/mqdefault.jpg"

type PosterProps = {
  singleYoutubeData: YoutubeResult;
};

const Poster = ({ singleYoutubeData }: PosterProps) => {
  // console.log("singleMovieData:", singleMovieData);
  const {
    movie_id,
    movie_name,
    released_date,
    country_name,
    average_rating,
    poster_image,
    running_time,
    total_views,
    total_likes,
    total_comments,
    total_episodes,
  } = singleYoutubeData;
  const titleConverted = toUrlFriendly(movie_name);

  return (
    <Box sx={classes.poster}>
      <Link
        shallow
        href={`/youtube/${movie_id}/${titleConverted}`}
        style={{ WebkitTapHighlightColor: 'transparent' }}
      >
        <Box sx={classes.posterUp}>
          <Image
            fill
            placeholder='blur'
            className='poster-img'
            blurDataURL={blurData}
            src={formatImgURL(poster_image)}
            sizes={formatImgURL(poster_image)}
            style={{ objectFit: 'cover', objectPosition: 'top' }}
            alt={titleConverted}
          />
        </Box>
        {/* <Box sx={classes.posterDown}>
          <Typography variant='h4' sx={classes.posterTitle} title={movie_name}>
            {movie_name}
          </Typography>
          <Box sx={classes.posterYearMain}>
            <Typography variant='subtitle2' sx={classes.posterYear}>
              <VisibilityIcon fontSize='small' />
              &nbsp;&nbsp;
              {formatNumber(total_views, 1) ?? '0'}&nbsp;&nbsp;
              <ThumbUpIcon fontSize='small' />
              &nbsp;&nbsp;
              {formatNumber(total_likes, 1) ?? '0'}&nbsp;&nbsp;
              <CommentIcon fontSize='small' />
              &nbsp;&nbsp;
              {formatNumber(total_comments, 0) ?? '0'}
            </Typography>
          </Box>
        </Box> */}
      </Link>
    </Box>
  );
};

export default Poster;
