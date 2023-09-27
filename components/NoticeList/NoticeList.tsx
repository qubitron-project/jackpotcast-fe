import React from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Box, Button, Typography } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import { styles as classes } from './noticeList.styles';
import { NoticeResult } from '../../types/apiResponses';
import { blurData, formatImgURL, toUrlFriendly } from '../../utils/utils';
import Link from 'next/link';
import { useIsMobile } from '../../hooks/app.hooks';
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';

type NoticeListProps = {
  noticeData?: NoticeResult[];
};

const NoticeList = ({ noticeData }: NoticeListProps) => {
  const isMobile = useIsMobile();
  const [isWindow, setIsWindow] = useState<boolean>(false);
  const [hideImage, setHideImage] = useState<boolean>(false);

  useEffect(() => {
    setIsWindow(true);
  }, []);

  if (!noticeData?.length) return null;

  return (
    <Box>
      <List component='nav' aria-label='main mailbox folders'>
        {noticeData
          .slice(0, 5)
          ?.map(({ id, title, content, type, created_at, updated_at }, i) => (
            <ListItem
              key={id}
              secondaryAction={
                <Typography
                  variant='body2'
                  color='white'
                  sx={{ display: { xs: 'none', md: 'block' } }}
                >
                  {dayjs(created_at).format('YYYY-MM-DD')}
                </Typography>
              }
              disablePadding
            >
              <ListItemButton>
                <ListItemIcon>
                  {type == 'event' ? '이벤트' : '공지'}
                </ListItemIcon>
                <ListItemText
                  aria-multiline='false'
                  primaryTypographyProps={{
                    style: {
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                    },
                  }}
                  primary={title}
                />
              </ListItemButton>
            </ListItem>
          ))}
      </List>
    </Box>
  );
};

export default NoticeList;
