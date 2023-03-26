import { addNewCommentActions, addNewCommentReducer } from './addNewCommentSlice';
import { AddNewCommentSchema } from '../types/addNewComment';

describe('addNewCommentSlice.test', () => {
    test('test setText AddNewCommentSlice', () => {
        const state: DeepPartial<AddNewCommentSchema> = {
            text: '123',
        };
        expect(addNewCommentReducer(
            state as AddNewCommentSchema,
            addNewCommentActions.setText('321'),
        )).toEqual({ text: '321' });
    });
});
