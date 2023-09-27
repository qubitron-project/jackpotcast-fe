import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { signIn, useSession } from 'next-auth/react';
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  CardContent,
  Box,
  Container,
  Fade,
  Grid,
  InputAdornment,
  TextField,
  Typography,
  Button,
  IconButton,
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import { LoadingButton } from '@mui/lab';
import AccountCircle from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import Lock from '@mui/icons-material/Lock';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useFormik, FormikProps } from 'formik';
import * as Yup from 'yup';

import { styles as classes } from '../../styles/signup.styles';
import CustomHead from '../../components/CustomHead/CustomHead';
import { useDispatch } from 'react-redux';
import { setNotify } from '../../redux/notifySlice';
import { signupRequest } from '../../apis/auth.api';
import AvatarSelector from '../../components/AvatarSelector/AvatarSelector';
import { useCustomRedirect } from '../../hooks/app.hooks';
import { useRouter } from 'next/router';
import axios from 'axios';
import { getSession } from 'next-auth/react';
import { getCookie, setCookie } from 'cookies-next';

interface IFormValues {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

// TODO: refactor this component page
const Signup = () => {
  const { data: sessionData, status, update } = useSession();
  const router = useRouter();
  const dispatch = useDispatch();
  const [subsList, setSubsList] = useState([]);

  const isLogged = status === 'authenticated';
  const [avatarPic, setAvatarPic] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { customRedirect } = useCustomRedirect();

  // useEffect(() => {
  //   if (isLogged) {
  //     console.log("Lredirect to /all");
  //     router.push("/");
  //     return;
  //   }
  // }, [isLogged]);

  const getSubsList = async () => {
    const { data } = await axios.get('/api/getYTData', {
      withCredentials: true,
    });
    setSubsList(
      data.map((sub) => ({
        id: sub.id,
        title: sub.snippet.title,
        description: sub.snippet.description,
        thumbnails: sub.snippet.thumbnails.default.url,
      }))
    );
    setIsLoading(false);
  };

  useEffect(() => {
    if (isLoading) {
      getSubsList();
      console.log('GET cookies: ', getCookie('token'));
    }
  }, [isLoading]);

  const handleSubmit = async (values: IFormValues) => {
    // console.log(values);
    try {
      setIsLoading(true);
      const register = await signupRequest({
        name: values.name,
        email: values.email,
        password: values.password,
        propic: avatarPic,
      });

      let result;
      if (register.user) {
        result = await signIn('credentials', {
          email: values.email,
          password: values.password,
          redirect: false,
        });
      }

      setIsLoading(false);

      if (result?.error) throw new Error(result.error);

      dispatch(
        setNotify({
          isOpen: true,
          message: 'Signup successfull',
          type: 'success',
        })
      );

      customRedirect('/');
    } catch (error: any) {
      setIsLoading(false);
      console.log(error);

      dispatch(
        setNotify({
          isOpen: true,
          message: error.message,
          type: 'error',
        })
      );
    }
  };
  const formikSchema = Yup.object().shape({
    name: Yup.string()
      .max(20, 'Max characters is of 20.')
      .required('Please enter your name.'),
    email: Yup.string()
      .email('Enter a valid email.')
      .required('Please enter your email.'),
    password: Yup.string()
      .min(4, 'Too short.')
      .required('Please enter your password.'),
    confirmPassword: Yup.string()
      .min(4, 'Too short.')
      .required('Please enter your password.')
      .oneOf([Yup.ref('password')], 'Passwords must match'),
  });

  const formik: FormikProps<IFormValues> = useFormik<IFormValues>({
    enableReinitialize: true,
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: formikSchema,
    onSubmit: handleSubmit,
  });

  return (
    <Container sx={classes.subscriptions}>
      <CustomHead title='Sign up with Jackpotcast-Chart' media_type={'movie'} />
      <Fade in={true}>
        <Grid container sx={classes.subscriptionsInner}>
          <Grid item justifyContent='center' display='flex'>
            <Image
              src='/assets/wantu_logo.png'
              alt='Wantu-Chart logo'
              width={36}
              height={36}
              style={classes.logo}
            />
          </Grid>
          {/* <Grid item sx={classes.signInnerHeader}>
            <Typography variant="h2">Sign Up</Typography>
          </Grid> */}

          {sessionData && (
            <>
              {isLoading && <p>Loading...</p>}
              <Typography variant='h5' align='center'>
                구독중인 {subsList.length}개 채널의 시리즈 <br />
                콘텐츠를 한눈에 보세요.
              </Typography>
              <List
                sx={{
                  width: '100%',
                  maxWidth: 360,
                  bgcolor: 'background.black',
                }}
              >
                {subsList.map((sub: any) => (
                  <ListItem key={sub.id} alignItems='flex-start'>
                    <ListItemAvatar>
                      <Avatar alt={sub.title} src={sub.thumbnails} />
                    </ListItemAvatar>
                    <ListItemText primary={sub.title} color='#000' />
                  </ListItem>
                ))}
              </List>
            </>
          )}

          <Grid item>
            <Box>
              <Box sx={classes.formGroup}>
                <AvatarSelector
                  avatarPic={avatarPic}
                  setAvatarPic={setAvatarPic}
                />
              </Box>
              <Box sx={classes.formGroup}>
                <Grid container spacing={1} sx={classes.field}>
                  <Grid item>
                    <AccountCircle color='secondary' />
                  </Grid>
                  <Grid item sx={classes.fieldInput}>
                    <TextField
                      sx={classes.input}
                      color='secondary'
                      fullWidth
                      id='name'
                      label='Name'
                      name='name'
                      variant='standard'
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      error={formik.touched.name && Boolean(formik.errors.name)}
                      helperText={formik.touched.name && formik.errors.name}
                    />
                  </Grid>
                </Grid>
              </Box>
              <Box sx={classes.formGroup}>
                <Grid container spacing={1} sx={classes.field}>
                  <Grid item>
                    <EmailIcon color='secondary' />
                  </Grid>
                  <Grid item sx={classes.fieldInput}>
                    <TextField
                      sx={classes.input}
                      color='secondary'
                      fullWidth
                      id='email'
                      label='Email'
                      name='email'
                      variant='standard'
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.email && Boolean(formik.errors.email)
                      }
                      helperText={formik.touched.email && formik.errors.email}
                    />
                  </Grid>
                </Grid>
              </Box>
              <Box sx={classes.formGroup}>
                <Grid container spacing={1} sx={classes.field}>
                  <Grid item>
                    <Lock color='secondary' />
                  </Grid>
                  <Grid item sx={classes.fieldInput}>
                    <TextField
                      sx={classes.input}
                      color='secondary'
                      fullWidth
                      id='password'
                      label='Password'
                      name='password'
                      type={showPassword ? 'text' : 'password'}
                      variant='standard'
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.password &&
                        Boolean(formik.errors.password)
                      }
                      helperText={
                        formik.touched.password && formik.errors.password
                      }
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position='end'>
                            <IconButton
                              color='secondary'
                              aria-label='toggle password visibility'
                              onClick={() =>
                                setShowPassword((prev) => (prev ? false : true))
                              }
                            >
                              {showPassword ? (
                                <Visibility />
                              ) : (
                                <VisibilityOff />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                </Grid>
              </Box>
              <Box sx={classes.formGroup}>
                <Grid container spacing={1} sx={classes.field}>
                  <Grid item>
                    <Lock color='secondary' />
                  </Grid>
                  <Grid item sx={classes.fieldInput}>
                    <TextField
                      sx={classes.input}
                      fullWidth
                      color='secondary'
                      id='confirmPassword'
                      label='Confirm Password'
                      name='confirmPassword'
                      type={showPassword ? 'text' : 'password'}
                      variant='standard'
                      value={formik.values.confirmPassword}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.confirmPassword &&
                        Boolean(formik.errors.confirmPassword)
                      }
                      helperText={
                        formik.touched.confirmPassword &&
                        formik.errors.confirmPassword
                      }
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position='end'>
                            <IconButton
                              color='secondary'
                              aria-label='toggle password visibility'
                              onClick={() =>
                                setShowPassword((prev) => (prev ? false : true))
                              }
                            >
                              {showPassword ? (
                                <Visibility />
                              ) : (
                                <VisibilityOff />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                </Grid>
              </Box>
              <LoadingButton
                fullWidth
                loading={isLoading}
                sx={classes.submit}
                variant='contained'
                color='secondary'
                onClick={() => formik.handleSubmit()}
              >
                Create account
              </LoadingButton>
              <Link href='/login' style={classes.altBtn}>
                <Button
                  variant='outlined'
                  color='secondary'
                  fullWidth
                  sx={classes.submit}
                >
                  Already have an account ?
                </Button>
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Fade>
    </Container>
  );
};

export default Signup;
