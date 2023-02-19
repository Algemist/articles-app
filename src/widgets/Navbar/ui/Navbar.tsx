import { classNames } from 'shared/lib/classNames/classNames';
import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';
import { Modal } from 'shared/ui/Modal';
import { ButtonTheme } from 'shared/ui/Button/ui/Button';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev);
    }, []);

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <Button
                    theme={ButtonTheme.CLEAR_INVERTED}
                    onClick={onToggleModal}
                >
                    {t('Войти')}
                </Button>
            </div>
            <Modal
                isOpen={isAuthModal}
                onClose={onToggleModal}
            >
                {t('Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad animi atque, dolores explicabo id nam officia omnis quaerat quia quibusdam quisquam quo ratione, reiciendis saepe vel veritatis, voluptates voluptatum?\n')}
            </Modal>
        </div>
    );
};
