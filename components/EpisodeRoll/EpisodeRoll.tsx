import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import { Box, Grid, Typography } from '@mui/material';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { styles as classes } from './episodeRoll.styles';
import { EpisodeResults } from '../../types/apiResponses';
import { blurData } from '../../utils/utils';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import YoutubePlayer from '../YoutubePlayer/YoutubePlayer';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import formatNumber, { toUrlFriendly } from '../../utils/utils';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
dayjs.extend(duration);

type EpisodeRollProps = {
  episodeList: EpisodeResults[];
};

const EpisodeRoll = ({ episodeList }: EpisodeRollProps) => {
  if (!episodeList?.length) return null;
  const router = useRouter();
  // const [order, setOrder] = useState('release_date');
  // const sortedItems = episodeList.sort((a, b) => b[order] - a[order]);

  episodeList = episodeList.sort((a, b) => {
    return (
      new Date(a.release_date).getTime() - new Date(b.release_date).getTime()
    );
  });

  return (
    <Box>
      <Grid container spacing={3}>
        {episodeList.map((episode, idx) => (
          <Link
            href={`/youtube/${router.query.id}/${toUrlFriendly(
              episode.name
            )}/watch?video=${episode.link}`}
            style={{ WebkitTapHighlightColor: 'transparent' }}
          >
            <Grid item xs>
              <Card
                sx={{
                  height: 250,
                  maxWidth: 700,
                  display: 'flex',
                  bgcolor: 'background.default',
                }}
              >
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <Box
                    sx={{
                      minWidth: 700,
                      display: 'flex',
                      flexDirection: 'row',
                    }}
                  >
                    <CardMedia
                      sx={{
                        minWidth: 400,
                        height: 220,
                        bgcolor: 'background.default',
                      }}
                      image={
                        'https://i.ytimg.com/vi/' +
                        episode.link +
                        '/hqdefault.jpg'
                      }
                      title={episode.name ?? 'Episode'}
                    />
                    <CardContent sx={{ bgcolor: 'background.default' }}>
                      <Typography gutterBottom variant='h6' component='div'>
                        [{idx + 1}화] {episode.name ?? 'Episode'}
                      </Typography>
                      <Typography gutterBottom variant='body2' component='div'>
                        {dayjs
                          .duration(episode.duration)
                          .asMinutes()
                          .toFixed(0)}
                        분&nbsp;
                        {dayjs(episode.release_date).format('YYYY-MM-DD')}
                      </Typography>
                      <Typography gutterBottom variant='body2' component='div'>
                        W
                        {(
                          (100 *
                            (episode.likeCount * 40 +
                              episode.commentCount * 100)) /
                          episode.viewCount
                        ).toFixed()}
                        점
                        <VisibilityIcon fontSize='small' />
                        &nbsp;
                        {formatNumber(episode.viewCount, 1) ?? '0'}&nbsp;
                        <ThumbUpIcon fontSize='small' />
                        &nbsp;
                        {formatNumber(episode.likeCount, 1) ?? '0'}&nbsp;
                        <CommentIcon fontSize='small' />
                        &nbsp;
                        {formatNumber(episode.commentCount, 0) ?? '0'}
                      </Typography>
                    </CardContent>
                  </Box>
                </Box>
              </Card>
            </Grid>
          </Link>
        ))}
      </Grid>
    </Box>
  );
};

export default EpisodeRoll;
