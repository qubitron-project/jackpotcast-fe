import { useRouter } from 'next/router';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { useState } from 'react';
import { useTranslation } from 'next-i18next';
import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function LanguageSwitcher() {
  const router = useRouter();
  const [language, setLanguage] = useState('');
  const { t } = useTranslation('common');
  const handleChange = (event: SelectChangeEvent) => {
    router.push(
      {
        pathname: router.pathname,
        query: router.query,
      },
      undefined,
      { locale: event.target.value }
    );

    setLanguage(event.target.value as string);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }}>
      <InputLabel id='demo-simple-select-label' color='success'>
        {t('common:language')}
      </InputLabel>
      <Select
        labelId='demo-simple-select-label'
        id='demo-simple-select'
        value={language}
        label={t('common:language')}
        onChange={handleChange}
        MenuProps={{
          sx: {
            '& MenuItem': {
              bgcolor: 'background.peper',
            },
          },
        }}
      >
        <MenuItem value={'en'}>English</MenuItem>
        <MenuItem value={'ko'}>한국어</MenuItem>
      </Select>
    </FormControl>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en')),
  },
});
