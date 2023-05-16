import React, { memo, useCallback, useState } from 'react';
import {
    Button as ButtonDeprecated,
    ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import NotificationIconDeprecated from '@/shared/assets/icons/ring.svg';
import NotificationIcon from '@/shared/assets/icons/RingRedesigned.svg';
import { ToggleFeatures } from '@/shared/lib/features';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { NotificationButtonRedesigned } from './NotificationButtonRedesigned/NotificationButtonRedesigned';
import { NotificationButtonDeprecated } from './NotificationButtonDeprecated/NotificationButtonDeprecated';

interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
    const { className } = props;
    const [isOpen, setIsOpen] = useState(false);

    const onOpenDrawer = useCallback(() => {
        setIsOpen(true);
    }, []);

    const onCloseDrawer = useCallback(() => {
        setIsOpen(false);
    }, []);

    const trigger = (
        <ToggleFeatures
            feature="isAppRedesigned"
            off={
                <ButtonDeprecated
                    onClick={onOpenDrawer}
                    theme={ButtonTheme.CLEAR}
                >
                    <IconDeprecated Svg={NotificationIconDeprecated} inverted />
                </ButtonDeprecated>
            }
            on={
                <Icon Svg={NotificationIcon} clickable onClick={onOpenDrawer} />
            }
        />
    );

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <NotificationButtonRedesigned
                    trigger={trigger}
                    onCloseDrawer={onCloseDrawer}
                    isOpen={isOpen}
                    className={className}
                />
            }
            off={
                <NotificationButtonDeprecated
                    trigger={trigger}
                    onCloseDrawer={onCloseDrawer}
                    isOpen={isOpen}
                    className={className}
                />
            }
        />
    );
});
