import { ReactNode } from 'react';

export interface NotificationButtonProps {
    className?: string;
    onCloseDrawer: () => void;
    isOpen?: boolean;
    trigger: ReactNode;
}
