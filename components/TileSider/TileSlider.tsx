import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Box, Container, Typography } from '@mui/material';

import Poster from '../Poster/Poster';
import { YoutubeResult } from '../../types/apiResponses';
import { styles as classes } from './tileSlider.styles';

type TileSliderProps = {
  youtubeData?: YoutubeResult[];
};

const TileSlider = ({ youtubeData }: TileSliderProps) => {
  if (!youtubeData?.length) return null;

  const settings = {
    arrows: true,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    // slidesToShow: 2,
    autoplay: false,
    autoplaySpeed: 4800,
    // variableWidth: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
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
          dots: false,
          arrows: false,
          infinite: true,
          centerMode: true,
          centerPadding: '10px',
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 10000,
        },
      },
    ],
    // centerPadding: "20px",
  };

  return (
    <Slider {...settings}>
      {youtubeData?.map((singleYoutubeData, index) => (
        <div key={index}>
          <Poster singleYoutubeData={singleYoutubeData} />
        </div>
      ))}
    </Slider>
  );
};

export default TileSlider;
