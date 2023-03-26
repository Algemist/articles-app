import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleListItemSkeleton } from 'entities/Article/ui/ArticleListItem/ArticleListItemSkeleton';
import cls from './ArticleList.module.scss';
import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
}

const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.SMALL ? 9 : 3)
    .fill(0)
    .map((item, index) => (
        <ArticleListItemSkeleton
            view={view}
            key={index}
            className={cls.card}
        />
    ));

export const ArticleList = memo((props: ArticleListProps) => {
    const {
        className,
        articles,
        isLoading,
        view = ArticleView.SMALL,
    } = props;

    const { t } = useTranslation();

    if (isLoading) {
        return (
            <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
                {getSkeletons(view)}
            </div>
        );
    }

    const renderArticle = (article: Article) => (
        <ArticleListItem
            article={article}
            view={view}
            className={cls.card}
            key={article.id}
        />
    );

    return (
        <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
            {articles.length > 0 ? (
                articles.map((el) => renderArticle(el))
            ) : null}
        </div>
    );
});
