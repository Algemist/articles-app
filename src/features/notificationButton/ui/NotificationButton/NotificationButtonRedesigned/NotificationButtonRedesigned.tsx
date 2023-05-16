import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserView, MobileView } from 'react-device-detect';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './NotificationButtonRedesigned.module.scss';
import { NotificationButtonProps } from '../../../model/types/notificationButtonProps';
import { NotificationList } from '@/entities/Notification';
import { Popover } from '@/shared/ui/redesigned/Popups';
import { Drawer } from '@/shared/ui/redesigned/Drawer';

export const NotificationButtonRedesigned = memo(
    (props: NotificationButtonProps) => {
        const { className, trigger, onCloseDrawer, isOpen = false } = props;

        const { t } = useTranslation();

        return (
            <div>
                <BrowserView>
                    <Popover
                        className={classNames(cls.NotificationButton, {}, [
                            className,
                        ])}
                        direction="bottom left"
                        trigger={trigger}
                    >
                        <NotificationList className={cls.list} />
                    </Popover>
                </BrowserView>
                <MobileView>
                    {trigger}
                    <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
                        <NotificationList />
                    </Drawer>
                </MobileView>
            </div>
        );
    },
);
