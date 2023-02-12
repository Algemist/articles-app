import { fireEvent, screen } from '@testing-library/react';
import {
    renderWithTranslations,
} from 'shared/lib/tests/renderWithTranslations/renderWithTranslations';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
    test('test render', () => {
        renderWithTranslations(<Sidebar />);
        expect(screen.getByTestId('Sidebar')).toBeInTheDocument();
    });

    test('test toggle', () => {
        renderWithTranslations(<Sidebar />);
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('Sidebar')).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('Sidebar')).toHaveClass('collapsed');
    });
});
