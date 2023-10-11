import React from 'react';
import Image from 'next/image';
import { Box, Grid, Typography } from '@mui/material';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { styles as classes } from './highlightRoll.styles';
import { EpisodeResults } from '../../types/apiResponses';
import { blurData } from '../../utils/utils';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import YoutubePlayer from '../YoutubePlayer/YoutubePlayer';
type HighlightRollProps = {
  episodeList: EpisodeResults[];
};

const EpisodeRoll = ({ episodeList }: HighlightRollProps) => {
  if (!episodeList?.length) return null;
  // episodeList = episodeList.sort(() => Math.random() - 0.5);

  const settings = {
    arrows: true,
    dots: false,
    infinite: true,
    layzload: 'anticipated',
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 3,
    // slidesToShow: 2,
    autoplay: false,
    // autoplaySpeed: 5000,
    // variableWidth: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          centerMode: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
    // centerPadding: "20px",
  };

  return (
    <Slider {...settings}>
      {episodeList.map(
        (episode, idx) =>
          episode.highlights && (
            <Box key={idx} sx={classes.clipItem}>
              <YoutubePlayer
                isLight={true}
                width={'100%'}
                height={'100%'}
                link={episode.link}
                start={(episode.highlights?.start / 1000) | 0}
                end={(episode.highlights?.end / 1000) | 0}
              />
            </Box>
          )
      )}
    </Slider>
  );
};
export default EpisodeRoll;
