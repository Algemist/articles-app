import React, { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text, TextTheme } from '@/shared/ui/Text';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { LoginModal } from '@/features/authByUsername';
import { getUserAuthData } from '@/entities/User';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink';
import { HStack } from '@/shared/ui/Stack';
import { NotificationButton } from '@/features/notificationButton';
import { AvatarDropdown } from '@/features/avatarDropdown';
import cls from './Navbar.module.scss';
import { getRouteArticlesCreate } from '@/shared/const/router';

interface NavbarProps {
    className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const authData = useSelector(getUserAuthData);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onOpenModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    if (authData) {
        return (
            <header className={classNames(cls.Navbar, {}, [className])}>
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
                <HStack
                    gap="16"
                    className={cls.actions}
                >
                    <NotificationButton />
                    <AvatarDropdown authData={authData} />
                </HStack>
            </header>
        );
    }

    return (
        <header className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <Button
                    theme={ButtonTheme.CLEAR_INVERTED}
                    onClick={onOpenModal}
                >
                    {t('Войти')}
                </Button>
            </div>
            {isAuthModal && (<LoginModal isOpen={isAuthModal} onClose={onCloseModal} />)}
        </header>
    );
});
