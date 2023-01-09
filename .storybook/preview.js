import '../src/styles/globals.css';
import Image from 'next/image';

/**
 * @see https://chuckwebtips.hatenablog.com/entry/2022/08/15/190337
 */
Image.propTypes = {
  unoptimized: null,
};
Image.defaultProps = {
  unoptimized: true,
};

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
