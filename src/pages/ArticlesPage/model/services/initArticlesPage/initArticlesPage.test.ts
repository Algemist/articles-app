import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { ArticleSortField } from '@/entities/Article';
import { initArticlesPage } from './initArticlesPage';

jest.mock('../fetchArticlesList/fetchArticlesList');

describe('initArticlesPage.test', () => {
    test('success with undefined params', async () => {
        const thunk = new TestAsyncThunk(initArticlesPage, {
            articlesPage: {
                _inited: false,
            },
        });
        await thunk.callThunk(new URLSearchParams());
        expect(thunk.dispatch).toBeCalledTimes(4);
    });
    test('success with params', async () => {
        const thunk = new TestAsyncThunk(initArticlesPage, {
            articlesPage: {
                _inited: false,
                search: 'search',
                sort: ArticleSortField.CREATED,
                order: 'asc',
            },
        });
        await thunk.callThunk(
            new URLSearchParams('sort=createdAt&order=asc&search=fsd&type=IT'),
        );
        expect(thunk.dispatch).toBeCalledTimes(8);
    });
    test('initArticlesPage not called', async () => {
        const thunk = new TestAsyncThunk(initArticlesPage, {
            articlesPage: {
                _inited: true,
            },
        });
        await thunk.callThunk({} as URLSearchParams);
        expect(thunk.dispatch).toBeCalledTimes(2);
    });
});
