import { memo } from 'react';
import { useSelector } from 'react-redux';
import { ArticleAdditionalInfo } from '@/widgets/ArticleAdditionalInfo';
import { Card } from '@/shared/ui/redesigned/Card';
import cls from './AdditionalInfoContainer.module.scss';
import { getArticleDetailsData } from '@/entities/Article';

export const AdditionalInfoContainer = memo(() => {
    const article = useSelector(getArticleDetailsData);

    if (!article) {
        return null;
    }

    return (
        <Card
            className={cls.AdditionalInfoContainer}
            padding="24"
            border="round"
        >
            <ArticleAdditionalInfo
                author={article.user}
                createdAt={article.createdAt}
                views={article.views}
            />
        </Card>
    );
});
