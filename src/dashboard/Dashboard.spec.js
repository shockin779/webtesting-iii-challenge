import React from 'react';
import * as rtl from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import Dashboard from "./Dashboard";

// Test away
test('dashboard renders', () => {
    const wrapper = rtl.render(<Dashboard />);
    const display = wrapper.getByText(/unlocked/i);
    expect(display).toBeVisible();
})