import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import MainIcon from '@/shared/assets/icons/Home.svg';
import AboutIcon from '@/shared/assets/icons/List.svg';
import ProfileIcon from '@/shared/assets/icons/profile.svg';
import ArticlesIcon from '@/shared/assets/icons/articles.svg';
import { SidebarItemType } from '../types/sidebar';
import {
    getRouteAbout, getRouteArticles, getRouteMain, getRouteProfile,
} from '@/shared/const/router';

export const getSidebarItems = createSelector(
    getUserAuthData,
    (userData) => {
        const sidebarItemList: SidebarItemType[] = [
            {
                path: getRouteMain(),
                Icon: MainIcon,
                text: 'Главная страница',
            },
            {
                path: getRouteAbout(),
                Icon: AboutIcon,
                text: 'Страница о нас',
            },
        ];

        if (userData) {
            sidebarItemList.push(
                {
                    path: getRouteProfile(userData.id),
                    Icon: ProfileIcon,
                    text: 'Профиль',
                    authOnly: true,
                },
                {
                    path: getRouteArticles(),
                    Icon: ArticlesIcon,
                    text: 'Статьи',
                    authOnly: true,
                },
            );
        }

        return sidebarItemList;
    },
);
