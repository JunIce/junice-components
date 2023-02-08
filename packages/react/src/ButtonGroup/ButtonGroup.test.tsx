import React from 'react';
import { render } from '@testing-library/react';

import Button from './ButtonGroup';
import { BaseButtonProps } from './interface';

describe('Button', () => {
  const renderComponent = ({ type }: Partial<BaseButtonProps>) =>
    render(<Button type={type}>type</Button>);

  it('should render primary', () => {
    const { getByRole } = renderComponent({ type: 'primary' });
    expect(getByRole('button')).toHaveClass('btn', 'btn-primary');
  });
});
