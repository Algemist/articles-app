import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { RatingCard } from '@/entities/Rating';
import { useGetArticleRating, useRateArticle } from '../../api/articleRaringApi';
import { getUserAuthData } from '@/entities/User';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';

export interface ArticleRatingProps {
    className?: string;
    articleId: string;
}
const ArticleRating = memo((props: ArticleRatingProps) => {
    const {
        className,
        articleId,
    } = props;

    const userAuthData = useSelector(getUserAuthData);
    const { data, isLoading } = useGetArticleRating({
        articleId,
        userId: userAuthData?.id ?? '',
    });
    const { t } = useTranslation();
    const [rateArticleMutation] = useRateArticle();

    const rating = data?.[0];

    const handleRateArticle = useCallback((starsCount: number, feedback?: string) => {
        try {
            rateArticleMutation({
                userId: userAuthData?.id ?? '',
                articleId,
                feedback,
                rate: starsCount,
            });
        } catch (e) {
            console.log(e);
        }
    }, [articleId, rateArticleMutation, userAuthData?.id]);

    const onAccept = useCallback((starsCount: number, feedback?: string) => {
        handleRateArticle(starsCount, feedback);
    }, [handleRateArticle]);

    const onCancel = useCallback((starsCount: number) => {
        handleRateArticle(starsCount);
    }, [handleRateArticle]);

    if (isLoading) {
        return (
            <Skeleton width="100%" height={120} />
        );
    }

    return (
        <RatingCard
            onAccept={onAccept}
            onCancel={onCancel}
            rate={rating?.rate}
            className={classNames('', {}, [className])}
            title={t('Оцените статью')}
            feedbackTitle={t('Оставьте отзыв об статье')}
            hasFeedback
        />
    );
});

export default ArticleRating;
