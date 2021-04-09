import React from 'react';
import ReactDOM from 'react-dom';
import Pet from './Pet'
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

describe('Pet Component', () => {
    it('should display name', () => {
        render(
            <BrowserRouter>
                <Pet name="Pesho" />
            </BrowserRouter>);

        expect(document.querySelector('h3').textContent).toBe('Name: Pesho')
    });

    it('should increase likes when pet button is pressed', () => {
        render(
            <BrowserRouter>
                <Pet likes={5} />
            </BrowserRouter>
        );

        expect(document.querySelector('.pet-info span').textContent).toBe(5);
    })
});