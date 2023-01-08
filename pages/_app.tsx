import 'styles/globals.scss'
import type { AppProps } from 'next/app'
import { usePageView } from 'hooks/usePageView'
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  usePageView()

  useEffect(() => {
    import("zenn-embed-elements"); // 数式をブラウザでレンダリングできるようにします
  }, []);

  return (<Component {...pageProps} />)
}
export default MyApp
