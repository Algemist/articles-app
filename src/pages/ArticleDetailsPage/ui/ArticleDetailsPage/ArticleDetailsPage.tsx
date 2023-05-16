import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { VStack } from '@/shared/ui/deprecated/Stack';
import { Card } from '@/shared/ui/deprecated/Card';
import { ArticleDetails } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Page } from '@/widgets/Page';
import { ArticleRecommendationList } from '@/features/articleRecommendationList';
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import { articleDetailsPageReducer } from '../../model/slice';
import cls from './ArticleDetailsPage.module.scss';
import { ArticleRating } from '@/features/articleRating';
import { getFeatureFlag, ToggleFeatures } from '@/shared/lib/features';

const initReducers: ReducersList = {
    articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage = () => {
    const { id } = useParams<{ id: string }>();
    const { t } = useTranslation('detailsArticle');
    const isArticleRatingEnabled = getFeatureFlag('isArticleRatingEnabled');
    const isCounterEnabled = getFeatureFlag('isCounterEnabled');

    if (!id) {
        return null;
    }

    return (
        <DynamicModuleLoader reducers={initReducers} removeAfterUnmount>
            <Page className={classNames(cls.ArticleDetailsPage, {}, [])}>
                <VStack gap="16" max>
                    <ArticleDetailsPageHeader />
                    <ArticleDetails id={id} />
                    <ToggleFeatures
                        feature="isArticleRatingEnabled"
                        on={<ArticleRating articleId={id} />}
                        off={<Card>{t('оценка статьи скоро появится')}</Card>}
                    />
                    <ArticleRecommendationList />
                    <ArticleDetailsComments id={id} />
                </VStack>
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);
