import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserView, MobileView } from 'react-device-detect';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './NotificationButtonDeprecated.module.scss';
import { Popover as PopoverDeprecated } from '@/shared/ui/deprecated/Popups';
import { Drawer as DrawerDeprecated } from '@/shared/ui/redesigned/Drawer';
import { NotificationButtonProps } from '../../../model/types/notificationButtonProps';
import { NotificationList } from '@/entities/Notification';

export const NotificationButtonDeprecated = memo(
    (props: NotificationButtonProps) => {
        const { className, trigger, onCloseDrawer, isOpen = false } = props;

        const { t } = useTranslation();

        return (
            <div>
                <BrowserView>
                    <PopoverDeprecated
                        className={classNames(cls.NotificationButton, {}, [
                            className,
                        ])}
                        direction="bottom left"
                        trigger={trigger}
                    >
                        <NotificationList className={cls.list} />
                    </PopoverDeprecated>
                </BrowserView>
                <MobileView>
                    {trigger}
                    <DrawerDeprecated isOpen={isOpen} onClose={onCloseDrawer}>
                        <NotificationList />
                    </DrawerDeprecated>
                </MobileView>
            </div>
        );
    },
);
