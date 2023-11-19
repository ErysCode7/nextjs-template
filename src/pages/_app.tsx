import HeadLayout from '@/components/Layout/head-layout';
import MainLayout from '@/components/Layout/main-layout';
import { QueryLayout } from '@/components/Layout/query-layout';
import { AppContextProvider } from '@/context/app-context';
import useNProgress from '@/hooks/use-nprogress';
import '@/styles/globals.css';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';

const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => {
  useNProgress();

  return (
    <SessionProvider session={session}>
      <QueryLayout pageProps={pageProps}>
        <AppContextProvider>
          <HeadLayout>
            <MainLayout>
              <Component {...pageProps} />
            </MainLayout>
          </HeadLayout>
        </AppContextProvider>
      </QueryLayout>
    </SessionProvider>
  );
};

export default App;
