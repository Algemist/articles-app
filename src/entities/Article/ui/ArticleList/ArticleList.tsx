import { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Text, TextSize, TextTheme } from '@/shared/ui/deprecated/Text';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleView } from '../../model/consts/consts';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import cls from './ArticleList.module.scss';
import { Article } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
    target?: HTMLAttributeAnchorTarget;
}

const getSkeletons = (view: ArticleView) =>
    new Array(3)
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
        target,
    } = props;

    const { t } = useTranslation();

    if (!isLoading && !articles.length) {
        return (
            <div
                className={classNames(cls.ArticleList, {}, [
                    className,
                    cls[view],
                ])}
            >
                <Text
                    theme={TextTheme.PRIMARY}
                    title={t('Статьи не найдены')}
                    size={TextSize.L}
                />
            </div>
        );
    }

    return (
        <div
            className={classNames(cls.ArticleList, {}, [className, cls[view]])}
            data-testid="ArticleList"
        >
            {articles.map((article) => (
                <ArticleListItem
                    article={article}
                    view={view}
                    key={article.id}
                    target={target}
                    className={cls.card}
                />
            ))}
            {isLoading && getSkeletons(view)}
        </div>
    );
});
