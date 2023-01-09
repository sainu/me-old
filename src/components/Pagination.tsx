import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import { FC } from 'react';
import { getPagingRange, getTotalPages } from '@/shared/lib/pagination';
import { Icon } from './Icon';

type Props = {
  totalCount: number;
  perPage: number;
  current: number;
};

const MinPage = 1;
const IconSize = 16;

export const Pagination: FC<Props> = ({ totalCount, perPage, current }) => {
  const router = useRouter();
  const { pathname, query } = router;
  const totalPages = getTotalPages(totalCount, perPage);
  const pages = Array.from(Array(totalPages - MinPage + 1).keys()).map(
    (i) => 1 + i
  );

  const range = getPagingRange(current, { min: 1, total: pages.length });
  const itemClasses =
    'flex items-center justify-center w-10 h-10 text-sm rounded-full';

  return (
    <nav className='mt-10'>
      <ul className='flex gap-3'>
        {range[0] === MinPage ? undefined : (
          <li className='flex items-center'>
            <Link
              href={{ pathname, query: { ...query, page: pages[0] } }}
              className={itemClasses}
              passHref
            >
              <Icon name='chevron-bar-left' width={IconSize} />
            </Link>
          </li>
        )}
        {range.map((page) => (
          <li key={page}>
            {page === current ? (
              <span className={`bg-gray-900 text-white ${itemClasses}`}>
                {page}
              </span>
            ) : (
              <Link
                href={{ pathname, query: { ...query, page } }}
                className={`bg-gray-200 ${itemClasses}`}
              >
                {page}
              </Link>
            )}
          </li>
        ))}
        {range[range.length - 1] === pages[pages.length - 1] ? undefined : (
          <li className='flex items-center'>
            <Link
              href={{
                pathname,
                query: { ...query, page: pages[pages.length - 1] },
              }}
              className={itemClasses}
              passHref
            >
              <Icon name='chevron-bar-right' width={IconSize} />
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};
