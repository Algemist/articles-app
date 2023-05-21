import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { ListBox as ListBoxDeprecated } from '@/shared/ui/deprecated/Popups';
import { Country } from '../../model/types/country';
import { ToggleFeatures } from '@/shared/lib/features';
import { ListBox } from '@/shared/ui/redesigned/Popups';

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
    const { className, value, onChange, readOnly } = props;

    const onChangeHandler = useCallback(
        (value?: string) => {
            onChange?.(value as Country);
        },
        [onChange],
    );

    const { t } = useTranslation('profile');

    const CountryProps = {
        readonly: readOnly,
        className,
        onChange: onChangeHandler,
        value,
        items: options,
        defaultValue: t('Укажите страну'),
        label: t('Укажите страну'),
        direction: 'top right' as const,
    };

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            off={<ListBoxDeprecated {...CountryProps} />}
            on={<ListBox {...CountryProps} />}
        />
    );
});
