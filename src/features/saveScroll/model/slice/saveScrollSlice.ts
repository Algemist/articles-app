import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UiSchema } from '../types/ScrollSchema';

const initialState: UiSchema = {
    scroll: {},
};

export const saveScrollSlice = createSlice({
    name: 'saveScroll',
    initialState,
    reducers: {
        setScrollPosition: (
            state,
            { payload }: PayloadAction<{ path: string; position: number }>,
        ) => {
            state.scroll[payload.path] = payload.position;
        },
    },
});

export const { actions: saveScrollActions } = saveScrollSlice;
export const { reducer: saveScrollReducer } = saveScrollSlice;
