import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Card } from '@/shared/ui/deprecated/Card';
import { Input } from '@/shared/ui/deprecated/Input';
import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './ArticlePageFilters.module.scss';
import { ArticleTypeTabs } from '@/features/articleTypeTabs';
import { ArticleSortSelector } from '@/features/articleSortSelector';
import { ArticleViewSelector } from '@/features/articleViewSelector';
import { useArticlesFilters } from '../../lib/hooks/useArticlesFilters';

interface ArticlesPageFiltersProps {
    className?: string;
}

export const ArticlePageFilters = memo((props: ArticlesPageFiltersProps) => {
    const { className } = props;
    const { t } = useTranslation('articles');

    const {
        onChangeSearch,
        search,
        onChangeType,
        type,
        onChangeView,
        view,
        onChangeSort,
        sort,
        order,
        onChangeOrder,
    } = useArticlesFilters();

    return (
        <div className={classNames(cls.ArticlesPageFilters, {}, [className])}>
            <div className={cls.sortWrapper}>
                <ArticleSortSelector
                    order={order}
                    sort={sort}
                    onChangeOrder={onChangeOrder}
                    onChangeSort={onChangeSort}
                />
                <ArticleViewSelector view={view} onViewClick={onChangeView} />
            </div>
            <Card className={cls.search}>
                <Input
                    onChange={onChangeSearch}
                    value={search}
                    placeholder={t('Поиск')}
                />
            </Card>
            <ArticleTypeTabs
                value={type}
                onChangeType={onChangeType}
                className={cls.tabs}
            />
        </div>
    );
});
