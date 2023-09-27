import React from 'react';
import Image from 'next/image';
import { Box, Grid, Typography } from '@mui/material';
import { styles as classes } from './channelRoll.styles';
import { ChannelResults } from '../../types/apiResponses';
import { blurData, formatImgSrc, toUrlFriendly } from '../../utils/utils';
import Link from 'next/link';

type ChannelRollProps = {
  channelList: ChannelResults[];
};

const ChannelRoll = ({ channelList }: ChannelRollProps) => {
  if (!channelList?.length) return null;

  // console.log("castList: ", castList);

  return (
    <Box sx={{ m: '20px 0 60px 0' }}>
      <Typography variant='h4' sx={classes.headTxt}>
        캐스팅 대기중인 채널
      </Typography>
      <Grid container sx={classes.castRoll}>
        {channelList.map((cast) => (
          <Link
            key={cast.channel_id}
            shallow
            style={{ display: 'flex', WebkitTapHighlightColor: 'transparent' }}
            href={`/person/${cast.channel_id}/${toUrlFriendly(cast.title)}`}
          >
            <Grid item sx={classes.castItem}>
              <Grid sx={classes.castImg}>
                <Image
                  fill
                  placeholder='blur'
                  blurDataURL={blurData}
                  src={cast.thumbnail}
                  sizes={formatImgSrc(
                    'https://image.tmdb.org/t/p/w138_and_h175_face/',
                    cast.thumbnail
                  )}
                  style={{ objectFit: 'cover' }}
                  alt='backdrops'
                />
              </Grid>
              <Grid sx={classes.castNames}>
                <Typography sx={classes.realName}>{cast.title}</Typography>
              </Grid>
            </Grid>
          </Link>
        ))}
      </Grid>
    </Box>
  );
};

export default ChannelRoll;
