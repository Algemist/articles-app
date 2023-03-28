import { StateSchema } from 'app/providers/StoreProvider';
import { createSelector } from '@reduxjs/toolkit';

export const getSaveScroll = (state: StateSchema) => state.ui.scroll;
export const getUiScrollByPath = createSelector(
    getSaveScroll,
    (state: StateSchema, path: string) => path,
    (scroll, path) => scroll[path] || 0,
);
