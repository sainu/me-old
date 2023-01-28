import { composeStories } from '@storybook/testing-react';
import { render } from '@testing-library/react';
import * as stories from './LinkText.stories';

const { Default } = composeStories(stories);

describe('when href starts with http', () => {
  test('target is "_blank"', () => {
    // Act
    const { getByRole } = render(<Default href='https://example.com' />);

    // Assert
    expect(getByRole('link')).toHaveAttribute('target', '_blank');
  });

  test('rel is "noopener noreferrer"', () => {
    // Act
    const { getByRole } = render(<Default href='https://example.com' />);

    // Assert
    expect(getByRole('link')).toHaveAttribute('rel', 'noopener noreferrer');
  });

  test('renders the given href', () => {
    // Act
    const { getByRole } = render(<Default href='https://example.com' />);

    // Assert
    expect(getByRole('link')).toHaveAttribute('href', 'https://example.com');
  });

  test('renders the given text', () => {
    // Act
    const { getByRole } = render(
      <Default href='https://example.com'>Example</Default>
    );

    // Assert
    expect(getByRole('link')).toHaveTextContent('Example');
  });
});

describe('when href does not start with http', () => {
  test('target is "_self"', () => {
    // Act
    const { getByRole } = render(<Default href='/example' />);

    // Assert
    expect(getByRole('link')).toHaveAttribute('target', '_self');
  });

  test('rel is undefined', () => {
    // Act
    const { getByRole } = render(<Default href='/example' />);

    // Assert
    expect(getByRole('link')).not.toHaveAttribute('rel');
  });

  test('renders the given href', () => {
    // Act
    const { getByRole } = render(<Default href='/example' />);

    // Assert
    expect(getByRole('link')).toHaveAttribute('href', '/example');
  });

  test('renders the given text', () => {
    // Act
    const { getByRole } = render(<Default href='/example'>Example</Default>);

    // Assert
    expect(getByRole('link')).toHaveTextContent('Example');
  });
});
