import React from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Box, Button, Typography } from '@mui/material';

import { styles as classes } from './bannerSlider.styles';
import { YoutubeResult } from '../../types/apiResponses';
import { blurData, formatImgURL, toUrlFriendly } from '../../utils/utils';
import Link from 'next/link';
import { useIsMobile } from '../../hooks/app.hooks';
import ReactPlayer from 'react-player';
import { useEffect, useState } from 'react';

type BannerSliderProps = {
  youtubeData?: YoutubeResult[];
};

const BannerSlider = ({ youtubeData }: BannerSliderProps) => {
  const isMobile = useIsMobile();
  const [isWindow, setIsWindow] = useState<boolean>(false);
  const [hideImage, setHideImage] = useState<boolean>(false);

  useEffect(() => {
    setIsWindow(true);
  }, []);

  if (!youtubeData?.length) return null;

  const config = {
    arrows: false,
    dots: false,
    centerMode: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: -1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 10000,
    cssEase: 'ease',
    centerPadding: isMobile ? '0px' : '0px',
  };

  return (
    <Box sx={classes.mediaSlide}>
      <div>
        <Slider {...config}>
          {youtubeData
            .slice(0, 5)
            ?.map(
              (
                {
                  movie_id,
                  movie_name,
                  released_date,
                  poster_image,
                  country_name,
                  average_rating,
                  trailer,
                  genres,
                },
                i
              ) => (
                <div key={movie_id}>
                  <Box sx={classes.mediaItemImg}>
                    {isWindow && (
                      <Image
                        fill
                        placeholder='blur'
                        className='poster-img'
                        blurDataURL={blurData}
                        src={formatImgURL(poster_image)}
                        sizes={formatImgURL(poster_image)}
                        style={{
                          maxWidth: '500px',
                          maxHeight: '300px',
                          objectFit: 'cover',
                          objectPosition: 'top',
                        }}
                        alt={movie_name}
                      />
                    )}
                  </Box>
                </div>
              )
            )}
        </Slider>
      </div>
    </Box>
  );
};

export default BannerSlider;
