import { memo } from 'react';
import { ArticleView } from '../../model/consts/consts';
import { ToggleFeatures } from '@/shared/lib/features';
import { ArticleListItemSkeletonDeprecated } from './ArticleListItemSkeletonDeprecated/ArticleListItemSkeletonDeprecated';
import { ArticleListItemSkeletonRedesigned } from './ArticleListItemSkeletonRedesigned/ArticleListItemSkeletonRedesigned';

export interface ArticleListItemSkeletonProps {
    className?: string;
    view: ArticleView;
}

export const ArticleListItemSkeleton = memo(
    (props: ArticleListItemSkeletonProps) => {
        const { className, view } = props;
        return (
            <ToggleFeatures
                feature="isAppRedesigned"
                off={
                    <ArticleListItemSkeletonDeprecated
                        view={view}
                        className={className}
                    />
                }
                on={
                    <ArticleListItemSkeletonRedesigned
                        view={view}
                        className={className}
                    />
                }
            />
        );
    },
);
