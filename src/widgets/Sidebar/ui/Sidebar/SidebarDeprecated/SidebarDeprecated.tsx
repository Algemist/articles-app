import React, { memo, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './SidebarDeprecated.module.scss';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button';
import { VStack } from '@/shared/ui/Stack';
import { ThemeSwitcher } from '@/features/themeSwitcher';
import { LangSwitcher } from '@/features/langSwitcher';

interface SidebarDeprecatedProps {
    className?: string;
    onToggle: () => void;
    collapsed: boolean;
    itemList: ReactNode;
}

export const SidebarDeprecated = memo((props: SidebarDeprecatedProps) => {
    const { className, itemList, collapsed, onToggle } = props;

    return (
        <aside
            className={classNames(
                cls.SidebarDeprecated,
                { [cls.collapsed]: collapsed },
                [className],
            )}
            data-testid="Sidebar"
        >
            <Button
                data-testid="sidebar-toggle"
                onClick={onToggle}
                className={cls.collapseBtn}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                square
                size={ButtonSize.L}
            >
                {collapsed ? '>' : '<'}
            </Button>
            <VStack role="navigation" gap="8" className={cls.items}>
                {itemList}
            </VStack>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} short={collapsed} />
            </div>
        </aside>
    );
});
