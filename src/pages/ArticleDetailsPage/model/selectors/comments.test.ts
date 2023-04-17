import { StateSchema } from '@/app/providers/StoreProvider';
import { getArticleCommentsIsLoading, getArticleCommentsError } from './comments';

describe('comments.test', () => {
    test('test getArticleCommentsIsLoading', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetailsPage: {
                comments: {
                    isLoading: true,
                },
            },
        };
        expect(getArticleCommentsIsLoading(state as StateSchema)).toEqual(true);
    });
    test('test getArticleCommentsIsLoading should work with undefined', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetailsPage: {
                comments: {
                    isLoading: undefined,
                },
            },
        };
        expect(getArticleCommentsIsLoading(state as StateSchema)).toEqual(false);
    });
    test('test getArticleCommentsError', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetailsPage: {
                comments: {
                    error: 'error',
                },
            },
        };
        expect(getArticleCommentsError(state as StateSchema)).toEqual('error');
    });
});
