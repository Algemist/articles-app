import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Select } from 'shared/ui/Select/Select';
import { Country } from '../../model/types/country';

interface CountrySelectProps {
    className?: string;
    value?: Country;
    onChange?: (value?: Country) => void;
    readOnly?: boolean;
}

const options = [
    { content: Country.Russia, value: Country.Russia },
    { content: Country.Armenia, value: Country.Armenia },
    { content: Country.Belarus, value: Country.Belarus },
    { content: Country.Kazakhstan, value: Country.Kazakhstan },
];

export const CountrySelect = memo((props: CountrySelectProps) => {
    const {
        className,
        value,
        onChange,
        readOnly,
    } = props;

    const onChangeHandler = useCallback((value?: string) => {
        onChange?.(value as Country);
    }, [onChange]);

    const { t } = useTranslation();

    return (
        <Select
            className={classNames('', {}, [className])}
            label={t('Укажите страну')}
            value={value}
            options={options}
            onChange={onChangeHandler}
            readOnly={readOnly}
        />
    );
});
