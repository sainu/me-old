import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { usePageView } from '@/shared/hooks/usePageView';

function MyApp({ Component, pageProps }: AppProps) {
  usePageView();

  useEffect(() => {
    import('zenn-embed-elements'); // 数式をブラウザでレンダリングできるようにします
  }, []);

  return <Component {...pageProps} />;
}
export default MyApp;
