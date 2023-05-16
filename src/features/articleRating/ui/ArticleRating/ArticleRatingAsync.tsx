import { lazy, Suspense } from 'react';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';
import { ArticleRatingProps } from './ArticleRating';

export const ArticleRatingLazy = lazy(() => import('./ArticleRating'));

export const ArticleRatingAsync = (props: ArticleRatingProps) => (
    <Suspense fallback={<Skeleton width="100%" height={120} />}>
        <ArticleRatingLazy {...props} />
    </Suspense>
);
