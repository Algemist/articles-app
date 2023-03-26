import { StateSchema } from 'app/providers/StoreProvider';
import { getArticleCommentsIsLoading, getArticleCommentsError } from './comments';

describe('comments.test', () => {
    test('test getArticleCommentsIsLoading', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetailsComment: {
                isLoading: true,
            },
        };
        expect(getArticleCommentsIsLoading(state as StateSchema)).toEqual(true);
    });
    test('test getArticleCommentsIsLoading should work with undefined', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetailsComment: {
                isLoading: undefined,
            },
        };
        expect(getArticleCommentsIsLoading(state as StateSchema)).toEqual(false);
    });
    test('test getArticleCommentsError', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetailsComment: {
                error: 'error',
            },
        };
        expect(getArticleCommentsError(state as StateSchema)).toEqual('error');
    });
});
