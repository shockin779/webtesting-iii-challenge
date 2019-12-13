// Test away!
import React from 'react';
import * as rtl from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import Controls from './Controls';

test('buttons are displayed for toggling closed and locked', () => {
    const wrapper = rtl.render(<Controls />);
    const lockUnlockButton = wrapper.getByText(/unlock gate|lock gate/i);
    const openCloseButton = wrapper.getByText(/open gate|close gate/i);
    expect(lockUnlockButton).toBeVisible();
    expect(openCloseButton).toBeVisible();
});