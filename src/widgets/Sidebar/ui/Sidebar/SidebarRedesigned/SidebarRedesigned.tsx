import React, { memo, ReactNode } from 'react';
import { AppLogo } from '@/shared/ui/redesigned/AppLogo';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './SidebarRedesigned.module.scss';
import { VStack } from '@/shared/ui/deprecated/Stack';
import { Icon } from '@/shared/ui/redesigned/Icon';
import ArrowIcon from '@/shared/assets/icons/ArrowRedesigned.svg';
import { ThemeSwitcher } from '@/features/themeSwitcher';
import { LangSwitcher } from '@/features/langSwitcher';

interface SidebarDeprecatedProps {
    className?: string;
    onToggle: () => void;
    collapsed: boolean;
    itemList: ReactNode;
}

export const SidebarRedesigned = memo((props: SidebarDeprecatedProps) => {
    const { className, itemList, collapsed, onToggle } = props;

    return (
        <aside
            className={classNames(
                cls.SidebarRedesigned,
                { [cls.collapsed]: collapsed },
                [className],
            )}
            data-testid="Sidebar"
        >
            <AppLogo className={cls.appLogo} size={collapsed ? 30 : 50} />
            <VStack role="navigation" gap="8" className={cls.items}>
                {itemList}
            </VStack>
            <Icon
                data-testid="sidebar-toggle"
                onClick={onToggle}
                className={cls.collapseBtn}
                Svg={ArrowIcon}
                clickable
            />
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} short={collapsed} />
            </div>
        </aside>
    );
});
