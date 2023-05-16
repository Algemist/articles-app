import React, { memo, useCallback, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import { ToggleFeatures } from '@/shared/lib/features';
import { SidebarDeprecated } from './SidebarDeprecated/SidebarDeprecated';
import { SidebarRedesigned } from './SidebarRedesigned/SidebarRedesigned';

interface SidebarProps {
    className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const SidebarItemList = useSelector(getSidebarItems);
    const onToggle = useCallback(() => {
        setCollapsed((prev) => !prev);
    }, []);

    const itemList = useMemo(
        () =>
            SidebarItemList.map((el) => (
                <SidebarItem item={el} collapsed={collapsed} key={el.path} />
            )),
        [SidebarItemList, collapsed],
    );

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            off={
                <SidebarDeprecated
                    onToggle={onToggle}
                    collapsed={collapsed}
                    itemList={itemList}
                    className={className}
                />
            }
            on={
                <SidebarRedesigned
                    onToggle={onToggle}
                    collapsed={collapsed}
                    itemList={itemList}
                    className={className}
                />
            }
        />
    );
});
