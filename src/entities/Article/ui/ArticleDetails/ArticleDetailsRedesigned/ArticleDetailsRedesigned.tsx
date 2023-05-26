import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import cls from './ArticleDetailsRedesigned.module.scss';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from '../../../model/selectors/articleDetails';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { Text } from '@/shared/ui/redesigned/Text';
import { AppImage } from '@/shared/ui/redesigned/AppImage';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { fetchArticleById } from '../../../model/services/fetchArticleById';
import { articleRenderBlock } from '../../../lib/articleRenderBlock/articleRenderBlock';
import { ArticleDetailsProps } from '../ArticleDetails';

export const ArticleDetailsRedesigned = memo((props: ArticleDetailsProps) => {
    // eslint-disable-next-line react/prop-types
    const { id } = props;

    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const article = useSelector(getArticleDetailsData);
    const isLoading = useSelector(getArticleDetailsIsLoading);
    const error = useSelector(getArticleDetailsError);
    let content;

    useInitialEffect(() => {
        dispatch(fetchArticleById(id));
    });
    // Todo skeletons dont appear
    if (isLoading) {
        content = (
            <>
                <Skeleton
                    className={cls.avatar}
                    width={200}
                    height={200}
                    border="50%"
                />
                <Skeleton className={cls.title} width={300} height={32} />
                <Skeleton className={cls.skeleton} width={600} height={24} />
                <Skeleton className={cls.skeleton} width="100%" height={200} />
                <Skeleton className={cls.skeleton} width="100%" height={200} />
            </>
        );
    } else if (error) {
        content = (
            <Text
                variant="error"
                align="center"
                title={t('Произошла ошибка при загрузке статьи')}
            />
        );
    } else {
        content = (
            <>
                <Text
                    data-testid="ArticleDetails.Info.Title"
                    className={cls.title}
                    title={article?.title}
                    size="l"
                    bold
                />
                <Text
                    data-testid="ArticleDetails.Info.Title"
                    className={cls.title}
                    title={article?.subtitle}
                    size="m"
                />
                <AppImage
                    src={article?.img}
                    className={cls.img}
                    fallback={
                        <Skeleton width="100%" height={420} border="16px" />
                    }
                />
                {article?.blocks.map(articleRenderBlock)}
            </>
        );
    }

    return content;
});
