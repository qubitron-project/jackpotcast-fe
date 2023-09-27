import React from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Box, Button, Typography } from '@mui/material';

import { styles as classes } from './mainBannerSlider.styles';
import { BannerResult } from '../../types/apiResponses';
import { blurData, formatImgURL, toUrlFriendly } from '../../utils/utils';
import Link from 'next/link';
import { useIsMobile } from '../../hooks/app.hooks';
import { useEffect, useState } from 'react';

type MainBannerSliderProps = {
  bannerData?: BannerResult[];
};

const MainBannerSlider = ({ bannerData }: MainBannerSliderProps) => {
  const isMobile = useIsMobile();
  const [isWindow, setIsWindow] = useState<boolean>(false);
  const [hideImage, setHideImage] = useState<boolean>(false);
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  useEffect(() => {
    setIsWindow(true);
  }, []);

  if (!bannerData?.length) return null;

  const config = {
    arrows: false,
    dots: false,
    centerMode: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 10000,
    cssEase: 'ease',
    centerPadding: isMobile ? '0px' : '50px',
  };

  return (
    <Box sx={classes.mediaSlide}>
      <div>
        <Slider {...config}>
          {bannerData
            .slice(0, 3)
            ?.map(
              (
                {
                  id,
                  title,
                  subtitle,
                  link,
                  image_url,
                  m_image_url,
                  order,
                  type,
                  created_at,
                  updated_at,
                },
                i
              ) => (
                <div key={id}>
                  <Box sx={classes.mediaItem}>
                    <Box sx={classes.mediaItemBanner}>
                      <Box sx={classes.mediaItemImg}>
                        {isWindow && (
                          <Box sx={classes.playerWrapper}>
                            <Image
                              fill
                              style={{
                                objectFit: 'cover',
                                objectPosition: 'top',
                              }}
                              src={
                                width > 400
                                  ? formatImgURL(image_url)
                                  : formatImgURL(m_image_url)
                              }
                              sizes={
                                width > 400
                                  ? formatImgURL(image_url)
                                  : formatImgURL(m_image_url)
                              }
                              alt={title}
                            />
                          </Box>
                        )}
                      </Box>
                    </Box>

                    <Box
                      className='media-item-content'
                      sx={classes.mediaItemContent}
                    ></Box>
                  </Box>
                </div>
              )
            )}
        </Slider>
      </div>
    </Box>
  );
};

export default MainBannerSlider;
