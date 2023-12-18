import React from 'react';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';

import matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

import Clicker from '.';


describe("Clicker component", () => {

    beforeEach(() => {
        render(<Clicker />);
    });

    it("Displays a heading with appropriate text", () => {

        const elem = screen.getByRole("heading");
        expect(elem).toBeInTheDocument();
        expect(elem.textContent).toBe("Clicker!");
    })
    afterEach(() => {
        cleanup();
    })

});