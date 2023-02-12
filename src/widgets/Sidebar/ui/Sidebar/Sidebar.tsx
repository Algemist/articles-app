import { classNames } from 'shared/lib/classNames/classNames';
import React, { useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher';
import { Button } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundary';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const { t } = useTranslation();

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            className={
                classNames(
                    cls.Sidebar,
                    { [cls.collapsed]: collapsed },
                    [className],
                )
            }
            data-testid="Sidebar"
        >
            <Button
                data-testid="sidebar-toggle"
                onClick={onToggle}
            >
                {t('cкрыть')}
            </Button>
            <div className={cls.switchers}>
                <BugButton />
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} />
            </div>
        </div>
    );
};
