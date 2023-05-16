import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { VStack } from '@/shared/ui/deprecated/Stack';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';
import { classNames } from '@/shared/lib/classNames/classNames';
import { NotificationItem } from '../NotificationItem/NotificationItem';
import { useNotifications } from '../../api/notificationApi';
import cls from './NotificationList.module.scss';

interface NotificationListProps {
    className?: string;
}

export const NotificationList = memo((props: NotificationListProps) => {
    const { className } = props;
    const { data, isLoading } = useNotifications(null, {
        pollingInterval: 5000,
    });

    const { t } = useTranslation();

    if (isLoading) {
        return (
            <VStack
                gap="16"
                max
                className={classNames(cls.NotificationList, {}, [className])}
            >
                <Skeleton width="100%" border="8px" height="80px" />
                <Skeleton width="100%" border="8px" height="80px" />
                <Skeleton width="100%" border="8px" height="80px" />
            </VStack>
        );
    }

    return (
        <VStack
            gap="16"
            max
            className={classNames(cls.NotificationList, {}, [className])}
        >
            {data?.map((item) => (
                <NotificationItem key={item.id} notification={item} />
            ))}
        </VStack>
    );
});
