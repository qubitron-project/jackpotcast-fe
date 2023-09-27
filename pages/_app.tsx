import { useEffect, useState } from 'react';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { SessionProvider } from 'next-auth/react';
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material';

import { store } from '../redux/store';
import '../styles/globals.css';
import theme from '../theme';
import Layout from '../components/Layout/Layout';
import * as gtag from '../analytics';
import { appWithTranslation } from 'next-i18next';
import { SWRConfig, SWRConfiguration } from 'swr';
import { fetcher } from '../utils/fetcher';
import SEO from '../next-seo.config';
import { DefaultSeo } from 'next-seo';
import { CookiesProvider } from 'react-cookie';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const router = useRouter();
  const { fallback } = pageProps;
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            retry: 3,
            staleTime: 30000, // 30 seconds
          },
        },
      })
  );

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  const option: SWRConfiguration = {
    fetcher,
    // fetcher: (url: any) => fetch(url).then((res) => res.json()),
    fallback: fallback || {},
    onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
      // 404에서 재시도 안함
      if (error.status === 404) return;

      // 특정 키에 대해 재시도 안함
      if (key === '/api/user') return;

      // 10번까지만 재시도함
      if (retryCount >= 10) return;

      // 5초 후에 재시도
      setTimeout(() => revalidate({ retryCount }), 5000);
    },
    dedupingInterval: 100,
    refreshInterval: 3000,
  };

  return (
    <SWRConfig value={option}>
      <CookiesProvider defaultSetOptions={{ path: '/' }}>
        <SessionProvider session={session}>
          <DefaultSeo {...SEO} />
          <QueryClientProvider client={queryClient}>
            <Hydrate state={pageProps.dehydratedState}>
              <Provider store={store}>
                <ThemeProvider theme={theme}>
                  <Layout>
                    <Component {...pageProps} />
                  </Layout>
                </ThemeProvider>
              </Provider>
            </Hydrate>
          </QueryClientProvider>
        </SessionProvider>
      </CookiesProvider>
    </SWRConfig>
  );
}

export default appWithTranslation(MyApp);
