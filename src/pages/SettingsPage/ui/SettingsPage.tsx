import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Text } from '@/shared/ui/redesigned/Text';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page';
import { UiDesignSwitcher } from '@/features/uiDesignSwitcher';
import { VStack } from '@/shared/ui/redesigned/Stack';

interface SettingsPageProps {
    className?: string;
}
const SettingsPage = memo((props: SettingsPageProps) => {
    const { className } = props;

    const { t } = useTranslation('settings');

    return (
        <Page className={classNames('', {}, [className])}>
            <VStack gap="32">
                <Text title="Настройки пользователя" />
                <UiDesignSwitcher />
            </VStack>
        </Page>
    );
});

export default SettingsPage;
