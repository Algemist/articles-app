import { StateSchema } from '@/app/providers/StoreProvider';
import { ArticleView } from '@/entities/Article';
import {
    getArticlesPageError,
    getArticlesPageHasMore,
    getArticlesPageInited,
    getArticlesPageIsLoading,
    getArticlesPageLimit,
    getArticlesPageNum,
    getArticlesPageView,
} from './articlesPageSelectors';

describe('articlesPageSelectors.test', () => {
    test('getArticlesPageView test', () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: {
                view: ArticleView.BIG,
            },
        };
        expect(getArticlesPageView(state as StateSchema)).toEqual('BIG');
    });
    test('getArticlesPageView test with undefined value', () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: {
                view: undefined,
            },
        };
        expect(getArticlesPageView(state as StateSchema)).toEqual(
            ArticleView.SMALL,
        );
    });
    test('getArticlesPageIsLoading test', () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: {
                isLoading: true,
            },
        };
        expect(getArticlesPageIsLoading(state as StateSchema)).toEqual(true);
    });
    test('getArticlesPageIsLoading test with undefined value', () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: {
                isLoading: undefined,
            },
        };
        expect(getArticlesPageIsLoading(state as StateSchema)).toEqual(false);
    });
    test('getArticlesPageError test', () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: {
                error: 'error',
            },
        };
        expect(getArticlesPageError(state as StateSchema)).toEqual('error');
    });
    test('getArticlesPageLimit test', () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: {
                limit: 4,
            },
        };
        expect(getArticlesPageLimit(state as StateSchema)).toEqual(4);
    });
    test('getArticlesPageLimit test with undefined value', () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: {
                limit: undefined,
            },
        };
        expect(getArticlesPageLimit(state as StateSchema)).toEqual(9);
    });
    test('getArticlesPageNum test', () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: {
                page: 4,
            },
        };
        expect(getArticlesPageNum(state as StateSchema)).toEqual(4);
    });
    test('getArticlesPageNum test with undefined value', () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: {
                page: undefined,
            },
        };
        expect(getArticlesPageNum(state as StateSchema)).toEqual(1);
    });
    test('getArticlesPageHasMore test', () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: {
                hasMore: true,
            },
        };
        expect(getArticlesPageHasMore(state as StateSchema)).toEqual(true);
    });
    test('getArticlesPageInited test', () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: {
                _inited: true,
            },
        };
        expect(getArticlesPageInited(state as StateSchema)).toEqual(true);
    });
});
