import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Text, TextSize } from '@/shared/ui/deprecated/Text';
import { VStack } from '@/shared/ui/deprecated/Stack';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleList } from '@/entities/Article';
import { useArticleRecommendationsList } from '../api/articleRecommendationsApi';

interface ArticleRecommendationListProps {
    className?: string;
}

export const ArticleRecommendationList = memo(
    (props: ArticleRecommendationListProps) => {
        const { className } = props;

        const { t } = useTranslation('detailsArticle');
        const {
            data: articles,
            isLoading,
            error,
        } = useArticleRecommendationsList(3);

        if (isLoading || error || !articles) {
            return null;
        }

        return (
            <VStack
                data-testid="ArticleRecommendationList"
                gap="8"
                className={classNames('', {}, [className])}
            >
                <Text size={TextSize.L} title={t('Рекомендуем')} />
                <ArticleList articles={articles} target="_blank" />
            </VStack>
        );
    },
);
