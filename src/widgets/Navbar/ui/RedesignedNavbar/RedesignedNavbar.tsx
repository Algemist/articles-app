import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { Button } from '@/shared/ui/redesigned/Button';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './RedesignedNavbar.module.scss';
import { NotificationButton } from '@/features/notificationButton';
import { AvatarDropdown } from '@/features/avatarDropdown';
import { LoginModal } from '@/features/authByUsername';
import { User } from '@/entities/User';

interface RedesignedNavbarProps {
    className?: string;
    authData?: User;
    onOpenModal: () => void;
    onCloseModal: () => void;
    isAuthModal: boolean;
}

export const RedesignedNavbar = memo((props: RedesignedNavbarProps) => {
    const { className, authData, onOpenModal, onCloseModal, isAuthModal } =
        props;

    const { t } = useTranslation();

    if (authData) {
        return (
            <header
                className={classNames(cls.RedesignedNavbar, {}, [className])}
            >
                <HStack gap="16" className={cls.actions}>
                    <NotificationButton />
                    <AvatarDropdown authData={authData} />
                </HStack>
            </header>
        );
    }

    return (
        <header className={classNames(cls.RedesignedNavbar, {}, [className])}>
            <div className={cls.links}>
                <Button variant="clear" onClick={onOpenModal}>
                    {t('Войти')}
                </Button>
            </div>
            {isAuthModal && (
                <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
            )}
        </header>
    );
});
