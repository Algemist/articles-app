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
        target,
        virtualized = true,
    } = props;

    const { t } = useTranslation();

    const isBig = view === ArticleView.BIG;

    const itemsPerRow = isBig ? 1 : 3;
    const rowCount = isBig ? articles.length : Math.ceil(articles.length / itemsPerRow);

    const rowRenderer = ({
        index, key, style,
    }: any) => {
        const items = [];
        const fromIndex = index * itemsPerRow;
        const toIndex = Math.min(fromIndex + itemsPerRow, articles.length);

        for (let i = fromIndex; i < toIndex; i += 1) {
            items.push(
                <ArticleListItem
                    article={articles[i]}
                    view={view}
                    className={cls.card}
                    target={target}
                    key={articles[i].id}
                />,
            );
        }

        return (
            <div
                key={key}
                style={style}
                className={cls.row}
            >
                {items}
            </div>
        );
    };

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

    if (!virtualized) {
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
                    style={{ height: '100%' }}
                    useWindowScroll
                    totalCount={articles.length}
                    data={articles}
                    itemContent={renderListItem}

                />
            ) : (
                <VirtuosoGrid
                    totalCount={articles.length}

                />
            )}
            {isLoading && getSkeletons(view)}
        </div>
    );

    // return (
    //     <WindowScroller
    //         scrollElement={document.getElementById(PAGE_ID) as Element}
    //     >
    //         {({
    //             width,
    //             height,
    //             registerChild,
    //             onChildScroll,
    //             isScrolling,
    //             scrollTop,
    //         }) => (
    //             <div
    //                 ref={registerChild}
    //                 className={classNames(cls.ArticleList, {}, [className, cls[view]])}
    //             >
    //                 {virtualized ? (
    //                     <List
    //                         autoHeight
    //                         height={height ?? 700}
    //                         rowCount={rowCount}
    //                         rowHeight={isBig ? 700 : 330}
    //                         rowRenderer={rowRenderer}
    //                         width={width ? width - 80 : 700}
    //                         onScroll={onChildScroll}
    //                         isScrolling={isScrolling}
    //                         scrollTop={scrollTop}
    //                     />
    //                 ) : (
    //
    //                     ))
    //                 )}
    //                 {isLoading && getSkeletons(view)}
    //             </div>
    //         )}
    //     </WindowScroller>
    // );
});
