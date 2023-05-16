import { memo, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';
import { ToggleFeatures } from '@/shared/lib/features';
import { RedesignedNavbar } from './RedesignedNavbar/RedesignedNavbar';
import { DeprecatedNavbar } from './DeprecatedNavbar/DeprecatedNavbar';

interface NavbarProps {
    className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const [isAuthModal, setIsAuthModal] = useState(false);
    const authData = useSelector(getUserAuthData);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onOpenModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    return (
        <ToggleFeatures
            on={
                <RedesignedNavbar
                    isAuthModal={isAuthModal}
                    onCloseModal={onCloseModal}
                    onOpenModal={onOpenModal}
                    authData={authData}
                    className={className}
                />
            }
            off={
                <DeprecatedNavbar
                    isAuthModal={isAuthModal}
                    onCloseModal={onCloseModal}
                    onOpenModal={onOpenModal}
                    authData={authData}
                    className={className}
                />
            }
            feature="isAppRedesigned"
        />
    );
});
