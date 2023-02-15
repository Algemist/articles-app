import { classNames } from 'shared/lib/classNames/classNames';
import React from 'react';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => (
    <div className={classNames(cls.Navbar, {}, [className])}>
        <div className={cls.links}>
            /
        </div>
    </div>
);
