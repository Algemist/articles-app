import { StateSchema } from '@/app/providers/StoreProvider';
import {
    getAddNewCommentError,
    getAddNewCommentText,
} from './addNewCommentSelectors';

describe('addNewCommentSelectors.test', () => {
    test('getAddNewCommentText test', () => {
        const state: DeepPartial<StateSchema> = {
            addNewComment: {
                text: 'text',
            },
        };
        expect(getAddNewCommentText(state as StateSchema)).toEqual('text');
    });
    test('getAddNewCommentText should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {
            addNewComment: {
                text: undefined,
            },
        };
        expect(getAddNewCommentText(state as StateSchema)).toEqual('');
    });
    test('getAddNewCommentError test', () => {
        const state: DeepPartial<StateSchema> = {
            addNewComment: {
                text: undefined,
                error: 'error',
            },
        };
        expect(getAddNewCommentError(state as StateSchema)).toEqual('error');
    });
});
