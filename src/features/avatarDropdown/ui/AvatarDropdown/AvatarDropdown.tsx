import React, { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Avatar } from '@/shared/ui/Avatar';
import { Dropdown } from '@/shared/ui/Popups';
import {
    isUserAdmin, isUserManager, User, userActions,
} from '@/entities/User';
import cls from './AvatarDropdown.module.scss';
import { getRouteAdminPanel, getRouteProfile } from '@/shared/const/router';

interface AvatarDropdownProps {
    className?: string;
    authData: User;
}

export const AvatarDropdown = memo((props: AvatarDropdownProps) => {
    const {
        className,
        authData,
    } = props;

    const { t } = useTranslation('avatarDropdown');
    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserManager);
    const dispatch = useDispatch();

    const isAdminPanelAvailable = isAdmin || isManager;

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    return (
        <Dropdown
            direction="bottom left"
            className={classNames(cls.AvatarDropdown, {}, [className])}
            items={[
                {
                    content: t('Профиль'),
                    href: getRouteProfile(authData.id),
                },
                ...(isAdminPanelAvailable ? [{
                    content: t('Панель администратора'),
                    href: getRouteAdminPanel(),
                }] : []),
                {
                    content: t('Выйти'),
                    onClick: onLogout,
                },
            ]}
            trigger={<Avatar fallbackInverted size={30} src={authData.avatar} />}
        />
    );
});
