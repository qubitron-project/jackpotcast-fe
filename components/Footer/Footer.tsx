import { Box, Typography, Grid, Link as MuiLink } from '@mui/material';
import React from 'react';
import { styles as classes } from './footer.styles';
// import { blurData } from "../../utils/utils";
import { useTranslation } from 'next-i18next';
import type { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Button from '@mui/material/Button';
import Link from 'next/link';

const Footer = () => {
  const { t } = useTranslation('footer');
  return (
    <Box sx={classes.footerMain}>
      {/* <Typography variant='h4' sx={classes.footerTopHead}>
        {t('footer:description')}
      </Typography> */}
      {/* <Box sx={classes.footerXD}>
        <MuiLink
          href='https://vqehul3crfw.typeform.com/to/BaqMjuzE'
          target='_blank'
          rel='noreferrer'
        >
          <Button variant='contained'>
            <Typography variant='subtitle1' sx={classes.footerTopHead}>
              크리에이터 지원하기
            </Typography>
          </Button>
        </MuiLink>
      </Box> */}
      <Box sx={classes.footerInner}>
        <Box sx={classes.footerTop}>
          <Grid container sx={classes.socials}>
            <Grid item>
              <MuiLink
                href='https://www.facebook.com/'
                target='_blank'
                rel='noreferrer'
                // sx={classes.sociallink}
              >
                <img
                  src='/assets/fb.svg'
                  alt='facebookLogo'
                  style={classes.socialLogo}
                />
              </MuiLink>
            </Grid>
            <Grid item>
              <MuiLink
                href='https://www.instagram.com/'
                target='_blank'
                rel='noreferrer'
                // sx={classes.sociallink}
              >
                <img
                  src='/assets/insta.svg'
                  alt='instagramLogo'
                  style={classes.socialLogo}
                />
              </MuiLink>
            </Grid>
            <Grid item>
              <MuiLink
                href='https://www.youtube.com/'
                target='_blank'
                rel='noreferrer'
                // sx={classes.sociallink}
              >
                <img
                  src='/assets/yt.svg'
                  alt='ytlogo'
                  style={classes.socialLogo}
                />
              </MuiLink>
            </Grid>
          </Grid>
        </Box>
        <Box sx={classes.footerBottom}>
          <Grid container sx={classes.footerLinksMob}>
            <Grid item sx={classes.footerCol}>
              <Link href={'http://jackpotcast.com'} target='_blank' shallow>
                <Typography variant='h6' sx={classes.footerColHead}>
                  회사소개
                </Typography>
              </Link>
            </Grid>
            <Grid item sx={classes.footerCol}>
              <Link href={'/service'} shallow>
                <Typography variant='h6' sx={classes.footerColHead}>
                  서비스이용약관
                </Typography>
              </Link>
            </Grid>
            <Grid item sx={classes.footerCol}>
              <Link href={'/privacy'} shallow>
                <Typography variant='h6' sx={classes.footerColHead}>
                  개인정보처리방침
                </Typography>
              </Link>
            </Grid>
            <Grid item sx={classes.footerCol}>
              <Link href={'/404'} shallow>
                <Typography variant='h6' sx={classes.footerColHead}>
                  광고 신청하기
                </Typography>
              </Link>
            </Grid>
          </Grid>

          <Grid container sx={classes.footerLinks}>
            <Grid item sx={classes.footerCol}>
              <Link href={'http://jackpotcast.com'} target='_blank' shallow>
                <Typography variant='h6' sx={classes.footerColHead}>
                  회사소개
                </Typography>
              </Link>
            </Grid>
            <Grid item sx={classes.footerCol}>
              <Link href={'/service'} shallow>
                <Typography variant='h6' sx={classes.footerColHead}>
                  이용약관
                </Typography>
              </Link>
            </Grid>
            <Grid item sx={classes.footerCol}>
              <Link href={'/privacy'} shallow>
                <Typography variant='h6' sx={classes.footerColHead}>
                  개인정보처리방침
                </Typography>
              </Link>
            </Grid>
            <Grid item sx={classes.footerCol}>
              <Link href={'/'} shallow>
                <Typography variant='h6' sx={classes.footerColHead}>
                  광고 신청하기
                </Typography>
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
export const getServerSideProps: GetServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en')),
  },
});
