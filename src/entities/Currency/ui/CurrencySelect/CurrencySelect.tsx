import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select/Select';
import { classNames } from 'shared/lib/classNames/classNames';
import { ListBox } from 'shared/ui/ListBox/ListBox';
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
        <ListBox
            direction="top right"
            className={classNames('', {}, [className])}
            onChange={onChangeHandler}
            value={value}
            items={options}
            defaultValue={t('Укажите валюту')}
            readonly={readOnly}
            label={t('Укажите валюту')}
        />
    );
});
