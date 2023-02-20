import { screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { userEvent } from '@storybook/testing-library';
import { Counter } from './Counter';

describe('Counter', () => {
    test('test render', () => {
        componentRender(<Counter />, {
            initialState: {
                counter: { value: 10 },
            },
        });
        expect(screen.getByTestId('value-title')).toHaveTextContent('10');
        expect(screen.getByTestId('btn-increment')).toBeInTheDocument();
        expect(screen.getByTestId('btn-decrement')).toBeInTheDocument();
    });

    test('increment', () => {
        componentRender(<Counter />, {
            initialState: {
                counter: { value: 10 },
            },
        });
        userEvent.click(screen.getByTestId('btn-increment'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('11');
    });

    test('increment', () => {
        componentRender(<Counter />, {
            initialState: {
                counter: { value: 10 },
            },
        });
        userEvent.click(screen.getByTestId('btn-decrement'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('9');
    });
});
