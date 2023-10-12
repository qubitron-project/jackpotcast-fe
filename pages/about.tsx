import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Box, Button, Grid, LinearProgress, Typography } from '@mui/material';
import ReactPlayer from 'react-player';
import { styles as classes } from '../components/MainSlider/mainSlider.styles';
import { NOTICES_LIST } from './api/config';
import NoticeList from '../components/NoticeList/NoticeList';
import useSWR from 'swr';

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ['about'])),
  },
});
const AboutPage: React.FC = () => {
  const router = useRouter();
  const { t } = useTranslation('about');
  const [value, setValue] = useState('1');
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  const {
    data: notices,
    isLoading: isNoticeLoading,
    error: isNoticeError,
  } = useSWR(`${NOTICES_LIST}`);

  return (
    <>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList
            onChange={handleChange}
            textColor='inherit'
            indicatorColor='secondary'
            aria-label='Episode Tabs'
          >
            <Tab
              label={<Typography variant='h5'>회사소개</Typography>}
              value='1'
            />
            <Tab
              label={<Typography variant='h5'>투자하기</Typography>}
              value='2'
            />
            <Tab
              label={<Typography variant='h5'>크리에이터 가입하기</Typography>}
              value='3'
            />
          </TabList>
        </Box>
        <TabPanel value='1'>
          <Box sx={classes.playerWrapper}>
            {isClient ? (
              <ReactPlayer
                style={{
                  objectFit: 'cover',
                  objectPosition: 'top',
                  height: '50vh',
                }}
                url={`https://www.youtube.com/watch?v=r6QE8hYhUhA`}
                muted
                playing={true}
                loop={true}
                controls={false}
                width='100%'
                height='100%'
              />
            ) : (
              'not loaded'
            )}
          </Box>

          <Typography variant='h5'>잭팟캐스트는요….</Typography>
          <Typography variant='body1'>
            JACKPOTCAST는 Open MCN Business Platform 입니다. JACKPOTCAST는
            MCN(Multi Channel Network) 비즈니스 기반으로 기본적으로 크리에이터를
            모집하고 성장, 관리, 지원 활동을 합니다. 그중, 성장을 희망하는
            Beginner 그룹의 크리에이터를 우선 대상으로 하고, 투자자가 직접
            크리에이터를 선택하여 이들에게 투자하고 성장을 통해 발생하는 수익을
            일정 부분 분배하는 것을 기본 모델로 합니다. JACKPOTCAST는
            크리에이터와 투자자를 단순히 연결하는 것을 뛰어넘어, 투자자가
            지속가능한 성장을 돕는 서포터이자 파트너가 되도록 연결하는 것을
            목표로 합니다. 매칭된 서포터는 크리에이터의 성장을 통한 수익에서
            보상이 주어지는 보상 시스템이기 때문에 단순한 서포터가 아닌, 때로는
            투자자가, 때로는 기획자가, 때로는 마케터가 되어 끊임없는 관심과
            지지를 통해 빠른 성장을 지원하고 응원해야 합니다. 크리에이터는 이에
            호응하여 보다 적극적인 커뮤니티 활동과 피드백으로 서포터와 밀접한
            관계 형성을 통해 성장을 통한 경제적인 보상뿐만 아니라, 정서적인
            보상도 함께 제공하게 됩니다. 서포터에게 일종의 성덕의 기회를
            제공하는 특별한 커뮤니티가 형성되도록 합니다. 아울러, 투자자에게는
            JACKPOTCAST 생태계에서 제공되는 다양한 수익 보상 플랫폼에 일반
            참여자 보다 더 많은 보상이 주어지는 특별한 지위와 기회가 제공됩니다.
            JACKPOTCAST는 이러한 커뮤니티 지원을 통해 생태계 내에서 크리에이터와
            서포터 모두에게 향상된 수익을 창출하도록 돕는 OPEN MCN 매칭
            플랫폼입니다.
          </Typography>
          <NoticeList noticeData={notices?.results} />
        </TabPanel>
        <TabPanel value='2'>투자하기 입니다....</TabPanel>
        <TabPanel value='3'>크리에이터 가입하기 입니다....</TabPanel>
      </TabContext>
    </>
  );
};

export default AboutPage;
