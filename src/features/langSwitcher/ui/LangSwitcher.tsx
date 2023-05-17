import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import {
    Button as ButtonDeprecated,
    ButtonTheme,
} from '@/shared/ui/deprecated/Button/Button';
import { ToggleFeatures } from '@/shared/lib/features';
import { Button } from '@/shared/ui/redesigned/Button';

interface LangSwitcherProps {
    className?: string;
    short?: boolean;
}

export const LangSwitcher = memo(({ className, short }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggleLang = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            off={
                <ButtonDeprecated
                    theme={ButtonTheme.CLEAR_INVERTED}
                    onClick={toggleLang}
                >
                    {t(short ? 'Короткий Язык' : 'Язык')}
                </ButtonDeprecated>
            }
            on={
                <Button variant="clear" onClick={toggleLang}>
                    {t(short ? 'Короткий Язык' : 'Язык')}
                </Button>
            }
        />
    );
});
