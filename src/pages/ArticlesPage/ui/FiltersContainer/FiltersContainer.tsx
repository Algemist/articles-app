import { memo } from 'react';
import { ArticlesFilters } from '@/widgets/ArticlesFilters';
import { useArticlesFilters } from '../../lib/hooks/useArticlesFilters';

interface FiltersContainerProps {
    className?: string;
}

export const FiltersContainer = memo((props: FiltersContainerProps) => {
    const { className } = props;
    const {
        onChangeSearch,
        search,
        onChangeType,
        type,
        onChangeSort,
        sort,
        order,
        onChangeOrder,
    } = useArticlesFilters();

    return (
        <ArticlesFilters
            search={search}
            sort={sort}
            onChangeSearch={onChangeSearch}
            onChangeType={onChangeType}
            onChangeSort={onChangeSort}
            onChangeOrder={onChangeOrder}
            order={order}
            type={type}
            className={className}
        />
    );
});
