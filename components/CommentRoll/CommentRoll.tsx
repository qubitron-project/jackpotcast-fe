import React from 'react';
import Image from 'next/image';
import { Box, Grid, Typography } from '@mui/material';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { styles as classes } from './commentRoll.styles';
import { ReviewResults } from '../../types/apiResponses';
import { blurData } from '../../utils/utils';
import ReactPlayer from 'react-player';
import Link from 'next/link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { Rating } from 'react-simple-star-rating';

type CommentRollProps = {
  reviewList: ReviewResults[];
};

const CommentRoll = ({ reviewList }: CommentRollProps) => {
  if (!reviewList?.length)
    return (
      <Box>
        <Typography variant='h5' sx={classes.headTxt}>
          아직 댓글이 없습니다.
        </Typography>
      </Box>
    );
  const fillColorArray = [
    '#f17a45',
    '#f17a45',
    '#f19745',
    '#f19745',
    '#f1a545',
    '#f1a545',
    '#f1b345',
    '#f1b345',
    '#f1d045',
    '#f1d045',
  ];

  return (
    <Box>
      <List sx={{ width: '100%', maxWidth: 360 }}>
        {reviewList?.length &&
          reviewList.map((review: any, idx: any) => (
            <ListItem alignItems='flex-start' key={idx}>
              <ListItemAvatar>
                <Avatar alt='Remy Sharp' src={review.user_image} />
              </ListItemAvatar>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Rating
                  fillColorArray={fillColorArray}
                  readonly={true}
                  allowFraction
                  initialValue={review.user_rating}
                  size={20}
                />
                <ListItemText
                  primary={review.user_name ?? 'Anonymous'}
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: 'inline' }}
                        component='span'
                        variant='body2'
                        color='text.primary'
                      >
                        {review.comment ?? 'No comment'}
                      </Typography>
                    </React.Fragment>
                  }
                />
              </Box>
            </ListItem>
          ))}
        <Divider variant='inset' component='li' />
      </List>
    </Box>
  );
};

export default CommentRoll;
