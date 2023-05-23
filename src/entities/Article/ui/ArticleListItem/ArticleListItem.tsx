import { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticleView } from '../../model/consts/consts';
import { Article } from '../../model/types/article';
import { ToggleFeatures } from '@/shared/lib/features';
import { ArticleListItemDeprecated } from './ArticleListItemDeprecated/ArticleListItemDeprecated';
import { ArticleListItemRedesigned } from './ArticleListItemRedesigned/ArticleListItemRedesigned';

export interface ArticleListItemProps {
    className?: string;
    article: Article;
    view: ArticleView;
    target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
    const { className, article, view, target = '_self' } = props;

    const { t } = useTranslation('articles');

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            off={
                <ArticleListItemDeprecated
                    article={article}
                    className={className}
                    view={view}
                    target={target}
                />
            }
            on={
                <ArticleListItemRedesigned
                    article={article}
                    className={className}
                    view={view}
                    target={target}
                />
            }
        />
    );
});
