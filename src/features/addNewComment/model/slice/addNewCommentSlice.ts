import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AddNewCommentSchema } from '../types/addNewComment';

const initialState: AddNewCommentSchema = {
    error: '',
    text: '',
};

export const addNewCommentSlice = createSlice({
    name: 'addNewComment',
    initialState,
    reducers: {
        setText: (state, action: PayloadAction<string>) => {
            state.text = action.payload;
        },
    },
});

export const { actions: addNewCommentActions } = addNewCommentSlice;
export const { reducer: addNewCommentReducer } = addNewCommentSlice;
