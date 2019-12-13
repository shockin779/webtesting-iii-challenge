import React from 'react';
import * as rtl from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import Display from './Display';

// Test away!

test('displays gate info', () => {
    const wrapper = rtl.render(<Display />);
    const lockedClass = wrapper.getByText(/locked|unlocked/i);
    const openClass = wrapper.getByText(/open|closed/i)
    expect(lockedClass).toBeVisible();
    expect(openClass).toBeVisible();
});

test('locked status', () => {
    const wrapper = rtl.render(<Display />);
    const lockElement = wrapper.getByText(/locked|unlocked/i);
    const lockedStatus = Display.defaultProps.locked;
    if(lockedStatus) {
        expect(lockElement.textContent).toBe('Locked');
    } else {
        expect(lockElement.textContent).toBe('Unlocked');
    }
})

test('when locked or closed, use red-led class', () => {
    const wrapper = rtl.render(<Display />);
    const lockedElement = wrapper.getByText(/locked|unlocked/i);
    const closedElement = wrapper.getByText(/closed|open/i);
    const lockedStatus = Display.defaultProps.locked;
    const closedStatus = Display.defaultProps.closed;
    if(lockedStatus) {
        expect(lockedElement.classList).toContain('red-led');
    } else {
        expect(lockedElement.classList).toContain('green-led');
    }
    if(closedStatus) {
        expect(closedElement.classList).toContain('red-led');
    } else {
        expect(closedElement.classList).toContain('green-led');
    }
})