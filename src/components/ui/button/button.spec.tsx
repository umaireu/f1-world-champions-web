import { fireEvent } from '@testing-library/react';
import { render } from '@utils/test/render';
import { Button } from './button';

describe('button', () => {
  it('should correctly render provided children', () => {
    const { getByText } = render({ ui: <Button>I am a button!</Button> });
    expect(getByText('I am a button!')).toBeInTheDocument();
  });

  it('should be disabled when the disabled prop is true', () => {
    const { getByRole } = render({
      ui: <Button disabled>I am a button!</Button>,
    });
    const button = getByRole('button');

    expect(button).toBeDisabled();
  });

  it('should be clickable if button is not disabled', () => {
    const onClickMock = vi.fn();
    const { getByRole } = render({
      ui: <Button onClick={onClickMock}>I am a button!</Button>,
    });
    const button = getByRole('button');

    fireEvent.click(button);

    expect(onClickMock).toBeCalled();
  });

  it('should not be clickable if button isdisabled', () => {
    const onClickMock = vi.fn();
    const { getByRole } = render({
      ui: <Button disabled onClick={onClickMock} />,
    });
    const button = getByRole('button');

    fireEvent.click(button);

    expect(onClickMock).not.toBeCalled();
  });
});
