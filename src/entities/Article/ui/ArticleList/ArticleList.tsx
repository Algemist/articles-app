import { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Virtuoso, VirtuosoGrid } from 'react-virtuoso';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text, TextSize, TextTheme } from '@/shared/ui/Text/Text';
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
    virtualized?: boolean;
    onEndReached?: () => void;
}

const getSkeletons = (view: ArticleView) => new Array(3)
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
        virtualized = true,
        onEndReached,
    } = props;

    const { t } = useTranslation();

    if (!isLoading && !articles.length) {
        return (
            <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
                <Text
                    theme={TextTheme.PRIMARY}
                    title={t('Статьи не найдены')}
                    size={TextSize.L}
                />
            </div>
        );
    }

    if (!virtualized || !onEndReached) {
        return (
            <div
                className={classNames(cls.ArticleList, {}, [className, cls[view]])}
            >
                {articles.map((article) => (
                    <ArticleListItem
                        article={article}
                        view={view}
                        key={article.id}
                    />
                ))}
                {isLoading && getSkeletons(view)}
            </div>
        );
    }

    const renderListItem = (index: number, article: Article) => (
        <ArticleListItem
            article={article}
            view={view}
        />
    );

    return (
        <div
            className={classNames(cls.ArticleList, {}, [className, cls[view]])}
        >
            {view === ArticleView.BIG ? (
                <Virtuoso
                    useWindowScroll
                    data={articles}
                    itemContent={renderListItem}
                    endReached={onEndReached}
                />
            ) : (
                <VirtuosoGrid
                    totalCount={articles.length}

                />
            )}
            {/* {isLoading && getSkeletons(view)} */}
        </div>
    );
});
