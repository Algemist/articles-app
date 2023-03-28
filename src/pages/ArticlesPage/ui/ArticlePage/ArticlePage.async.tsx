import { lazy } from 'react';

export const ArticlePageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    setTimeout(() => resolve(import('./ArticlePage')), 400);
}));
