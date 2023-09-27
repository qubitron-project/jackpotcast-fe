import React from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Box, Button, Typography } from '@mui/material';

import { styles as classes } from './mainSlider.styles';
import { YoutubeResult } from '../../types/apiResponses';
import { blurData, formatImgURL, toUrlFriendly } from '../../utils/utils';
import Link from 'next/link';
import { useIsMobile } from '../../hooks/app.hooks';
import ReactPlayer from 'react-player';
import { useEffect, useState } from 'react';

type MainSliderProps = {
  youtubeData?: YoutubeResult[];
};

const MainSlider = ({ youtubeData }: MainSliderProps) => {
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
    centerMode: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: -1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 10000,
    cssEase: 'ease',
    centerPadding: isMobile ? '20px' : '50px',
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
                  <Box sx={classes.mediaItem}>
                    <Box sx={classes.mediaItemBanner}>
                      <Box sx={classes.mediaItemImg}>
                        {isWindow && (
                          <Box sx={classes.playerWrapper}>
                            <ReactPlayer
                              style={{
                                objectFit: 'cover',
                                objectPosition: 'top',
                              }}
                              url={`https://www.youtube.com/watch?v=${trailer}`}
                              muted
                              playing={true}
                              loop={true}
                              controls={false}
                              width='100%'
                              height='100%'
                              onReady={() => setHideImage(true)}
                            />
                          </Box>
                        )}
                        {!hideImage && (
                          <Image
                            fill
                            placeholder='blur'
                            style={{
                              objectFit: 'cover',
                              objectPosition: 'top',
                            }}
                            blurDataURL={blurData}
                            src={formatImgURL(
                              `https://img.youtube.com/vi/${trailer}/maxresdefault.jpg`
                            )}
                            sizes={formatImgURL(
                              `https://img.youtube.com/vi/${trailer}/maxresdefault.jpg`
                            )}
                            alt={movie_name}
                          />
                        )}
                      </Box>
                    </Box>

                    <Box
                      className='media-item-content'
                      sx={classes.mediaItemContent}
                    >
                      <Box sx={classes.miContent}>
                        <Typography
                          variant='h6'
                          color='secondary'
                          sx={classes.rating}
                        >
                          인기 순위 #{i + 1}
                        </Typography>
                        <Typography variant='h4' sx={classes.title}>
                          {movie_name}
                        </Typography>
                      </Box>
                      <Box sx={classes.miContent}>
                        <Typography variant='body1' sx={classes.overview}>
                          {movie_name}
                        </Typography>
                      </Box>
                      <Box sx={classes.miBtns}>
                        <Link
                          href={`/youtube/${movie_id}/${toUrlFriendly(
                            movie_name
                          )}/watch?video=${trailer}`}
                          style={{ WebkitTapHighlightColor: 'transparent' }}
                        >
                          <Button
                            variant='contained'
                            color='secondary'
                            sx={classes.watchBtn}
                          >
                            Watch now
                          </Button>
                        </Link>
                        <Link
                          href={`/youtube/${movie_id}/${toUrlFriendly(
                            movie_name
                          )}`}
                          style={{ WebkitTapHighlightColor: 'transparent' }}
                        >
                          <Button
                            variant='contained'
                            color='primary'
                            sx={classes.detailBtn}
                          >
                            Details
                          </Button>
                        </Link>
                      </Box>
                    </Box>
                  </Box>
                </div>
              )
            )}
        </Slider>
      </div>
    </Box>
  );
};

export default MainSlider;
