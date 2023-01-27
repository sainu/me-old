import { FC } from 'react';

type Props = {
  title: React.ReactNode;
};

export const PageTitle: FC<Props> = ({ title }) => {
  return <div className='text-3xl font-bold mb-12'>{title}</div>;
};
