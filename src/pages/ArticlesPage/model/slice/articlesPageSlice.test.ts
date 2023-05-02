import { ArticleView } from '@/entities/Article';
import { articlesPageActions, articlesPageReducer } from './articlesPageSlice';
import { ArticlesPageSchema } from '../types/articlesPageSchema';

describe('articlesPageSlice.test', () => {
    test('test setView articlesPageSlice', () => {
        const state: DeepPartial<ArticlesPageSchema> = {
            view: ArticleView.BIG,
        };
        expect(
            articlesPageReducer(
                state as ArticlesPageSchema,
                articlesPageActions.setView(ArticleView.SMALL),
            ),
        ).toEqual({
            view: ArticleView.SMALL,
        });
    });
    test('test setPage articlesPageSlice', () => {
        const state: DeepPartial<ArticlesPageSchema> = {
            page: 1,
        };
        expect(
            articlesPageReducer(
                state as ArticlesPageSchema,
                articlesPageActions.setPage(42),
            ),
        ).toEqual({
            page: 42,
        });
    });
});
