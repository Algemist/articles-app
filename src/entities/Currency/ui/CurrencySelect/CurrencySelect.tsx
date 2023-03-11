import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select/Select';
import { classNames } from 'shared/lib/classNames/classNames';
import { Currency } from '../../model/types/currency';

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
    const {
        className,
        value,
        onChange,
        readOnly,
    } = props;

    const onChangeHandler = useCallback((value?: string) => {
        onChange?.(value as Currency);
    }, [onChange]);

    const { t } = useTranslation();

    return (
        <Select
            className={classNames('', {}, [className])}
            label={t('Укажите валюту')}
            value={value}
            options={options}
            onChange={onChangeHandler}
            readOnly={readOnly}
        />
    );
});
