import Head from 'next/head';
import { FC } from 'react';
import { KEY_OG_TYPE } from '@/shared/lib/key';

type Props = {};

export const WebsiteHeadMeta: FC<Props> = () => {
  return (
    <Head>
      <meta property='og:type' content='website' key={KEY_OG_TYPE} />
    </Head>
  );
};
