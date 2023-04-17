import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Popover } from 'shared/ui/Popups';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import NotificationIcon from 'shared/assets/icons/ring.svg';
import { NotificationList } from 'entities/Notification';
import cls from './NotificationButton.module.scss';

interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
    const {
        className,
    } = props;

    return (
        <Popover
            trigger={(

                <Button
                    theme={ButtonTheme.CLEAR}
                >
                    <Icon
                        Svg={NotificationIcon}
                        inverted
                    />
                </Button>
            )}
            direction="bottom left"
            className={classNames(cls.NotificationButton, {}, [className])}
        >
            <NotificationList
                className={cls.list}
            />
        </Popover>
    );
});
