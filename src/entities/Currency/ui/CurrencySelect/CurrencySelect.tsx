import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { ListBox as ListBoxDeprecated } from '@/shared/ui/deprecated/Popups';
import { Currency } from '../../model/types/currency';
import { ToggleFeatures } from '@/shared/lib/features';
import { ListBox } from '@/shared/ui/redesigned/Popups';

interface CurrencySelectProps {
    className?: string;
    value?: Currency;
    onChange?: (value?: Currency) => void;
    readOnly?: boolean;
}

const options = [
    { content: Currency.RUB, value: Currency.RUB },
    { content: Currency.EUR, value: Currency.EUR },
    { content: Currency.USD, value: Currency.USD },
];

export const CurrencySelect = memo((props: CurrencySelectProps) => {
    const { className, value, onChange, readOnly } = props;

    const onChangeHandler = useCallback(
        (value?: string) => {
            onChange?.(value as Currency);
        },
        [onChange],
    );

    const { t } = useTranslation('profile');

    const ListboxProps = {
        direction: 'top right' as const,
        className,
        onChange: onChangeHandler,
        value,
        items: options,
        defaultValue: t('Укажите валюту'),
        readonly: readOnly,
        label: t('Укажите валюту'),
    };

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            off={<ListBoxDeprecated {...ListboxProps} />}
            on={<ListBox {...ListboxProps} />}
        />
    );
});
