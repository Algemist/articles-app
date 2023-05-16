import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Text, TextTheme } from '@/shared/ui/deprecated/Text';
import { AppLink, AppLinkTheme } from '@/shared/ui/deprecated/AppLink';
import { HStack } from '@/shared/ui/deprecated/Stack';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './DeprecatedNavbar.module.scss';
import { getRouteArticlesCreate } from '@/shared/const/router';
import { NotificationButton } from '@/features/notificationButton';
import { AvatarDropdown } from '@/features/avatarDropdown';
import { LoginModal } from '@/features/authByUsername';
import { User } from '@/entities/User';

interface DeprecatedNavbarProps {
    className?: string;
    authData?: User;
    onOpenModal: () => void;
    onCloseModal: () => void;
    isAuthModal: boolean;
}

export const DeprecatedNavbar = memo((props: DeprecatedNavbarProps) => {
    const { className, authData, onOpenModal, onCloseModal, isAuthModal } =
        props;

    const { t } = useTranslation();

    if (authData) {
        return (
            <header
                className={classNames(cls.DeprecatedNavbar, {}, [className])}
            >
                <Text
                    className={cls.appName}
                    title={t('Приложение статей')}
                    theme={TextTheme.INVERTED}
                />
                <AppLink
                    to={getRouteArticlesCreate()}
                    theme={AppLinkTheme.SECONDARY}
                    className={cls.createBtn}
                >
                    {t('Создать статью')}
                </AppLink>
                <HStack gap="16" className={cls.actions}>
                    <NotificationButton />
                    <AvatarDropdown authData={authData} />
                </HStack>
            </header>
        );
    }

    return (
        <header className={classNames(cls.DeprecatedNavbar, {}, [className])}>
            <div className={cls.links}>
                <Button
                    theme={ButtonTheme.CLEAR_INVERTED}
                    onClick={onOpenModal}
                >
                    {t('Войти')}
                </Button>
            </div>
            {isAuthModal && (
                <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
            )}
        </header>
    );
});
