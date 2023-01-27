import { FC } from 'react';

type Props = {
  title?: React.ReactNode;
};

export const Section: FC<Props> = ({ title, children }) => {
  return (
    <section className='mb-12'>
      {title && <div className='text-xl mb-8 font-bold'>{title}</div>}
      {children}
    </section>
  );
};
