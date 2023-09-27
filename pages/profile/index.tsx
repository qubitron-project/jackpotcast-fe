import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/react';
import { LoadingButton } from '@mui/lab';
import AccountCircle from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import {
  Container,
  Fade,
  Grid,
  Typography,
  Box,
  TextField,
  Button,
} from '@mui/material';
import * as Yup from 'yup';
import { FormikProps, useFormik } from 'formik';

import { styles as classes } from '../../styles/profile.styles';
import CustomHead from '../../components/CustomHead/CustomHead';
import AvatarSelector from '../../components/AvatarSelector/AvatarSelector';
import { useUpdateProfile } from '../../hooks/auth.hooks';

interface IFormValues {
  name: string;
  email: string;
}

// TODO: refactor this component page
function ProfilePage() {
  const { data: sessionData, status } = useSession();
  const isNotLogged = status === 'unauthenticated';
  const user = sessionData?.user;
  const [gapi, setGapi] = useState();
  const [googleAuth, setGoogleAuth] = useState();

  const [avatarPic, setAvatarPic] = useState(user?.image || 1);
  const [editable, setEditable] = useState(false);
  const { mutateAsync: updateProfile, isLoading: isLoadingProfileUpdate } =
    useUpdateProfile();

  useEffect(() => {
    if (isNotLogged) {
      signIn();
      return;
    }
  }, [isNotLogged]);

  useEffect(() => {
    setAvatarPic(user?.image || 1);
  }, [user?.image]);

  /*
   * Create form to request access token from Google's OAuth 2.0 server.
   */

  const handleSubmit = async (values: IFormValues) => {
    console.log(values);
    try {
      const updateReq = await updateProfile({
        token: sessionData?.user?.email || '',
        name: values.name,
        email: values.email,
        propic: avatarPic,
      });

      if (updateReq?.error) throw new Error(updateReq.error);

      await signOut({ redirect: true, callbackUrl: '/login' });
    } catch (error: any) {
      console.log(error);
    }
  };

  const formikSchema = Yup.object().shape({
    name: Yup.string()
      .max(20, 'Max characters is of 20.')
      .required('Please enter your name.'),
    email: Yup.string()
      .email('Enter a valid email.')
      .required('Please enter your email.'),
  });

  const formik: FormikProps<IFormValues> = useFormik<IFormValues>({
    enableReinitialize: true,
    initialValues: {
      name: user?.name || '',
      email: user?.email || '',
    },
    validationSchema: formikSchema,
    onSubmit: handleSubmit,
  });

  return (
    <Container sx={classes.sign}>
      <CustomHead title='My Profile' media_type={'movie'} />
      <Fade in={true}>
        <Grid container sx={classes.signInner}>
          <Grid item sx={classes.signInnerHeader}>
            <Typography variant='h2'>My Profile</Typography>
          </Grid>
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

              <LoadingButton
                disabled={!(formik.dirty || user?.propic !== avatarPic)}
                fullWidth
                loading={isLoadingProfileUpdate}
                sx={classes.submit}
                variant='contained'
                color='secondary'
                onClick={() => formik.handleSubmit()}
              >
                Update profile
              </LoadingButton>
              <Link href='/profile' style={classes.altBtn}>
                <Button
                  disabled
                  variant='outlined'
                  color='secondary'
                  fullWidth
                  sx={classes.submit}
                >
                  Delete account
                </Button>
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Fade>
    </Container>
  );
}

export default ProfilePage;
