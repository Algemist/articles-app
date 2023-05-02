import React from 'react';
import { I18nextProvider } from 'react-i18next';
import { render } from '@testing-library/react';
import i18nForTest from '@/shared/config/i18n/i18nForTest';

export function renderWithTranslations(component: React.ReactNode) {
    return render(
        <I18nextProvider i18n={i18nForTest}>{component}</I18nextProvider>,
    );
}
