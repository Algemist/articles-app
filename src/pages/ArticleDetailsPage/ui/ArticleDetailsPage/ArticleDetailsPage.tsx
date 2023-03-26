import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { CommentList } from 'entities/Comment';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { AddNewCommentForm } from 'features/addNewComment';
import { addCommentForArticle } from 'pages/ArticleDetailsPage/model/service/addCommentForArticle/addCommentForArticle';
import {
    fetchCommentsByArticleId,
} from '../../model/service/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { getArticleCommentsError, getArticleCommentsIsLoading } from '../../model/selectors/comments';
import cls from './ArticleDetailsPage.module.scss';
import { articleDetailsCommentReducer, getArticleComments } from '../../model/slice/articleDetailsCommentSlice';

const initReducers: ReducersList = {
    articleDetailsComment: articleDetailsCommentReducer,
};

const ArticleDetailsPage = () => {
    const { t } = useTranslation('article');
    const { id } = useParams<{id: string}>();
    const comments = useSelector(getArticleComments.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
    const commentsError = useSelector(getArticleCommentsError);
    const dispatch = useAppDispatch();

    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text));
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
    });

    if (!id) {
        return (
            <div>
                <Text
                    theme={TextTheme.ERROR}
                    align={TextAlign.CENTER}
                    title={t('Статья не найдена')}
                />
            </div>
        );
    }

    return (
        <DynamicModuleLoader reducers={initReducers} removeAfterUnmount>
            <div className={classNames(cls.ArticleDetailsPage, {}, [])}>
                <ArticleDetails id={id} />
                <Text className={cls.commentTitle} title={t('Комментарии')} />
                <AddNewCommentForm onSendComment={onSendComment} />
                <CommentList
                    isLoading={commentsIsLoading}
                    comments={comments}
                />
            </div>
        </DynamicModuleLoader>

    );
};

export default memo(ArticleDetailsPage);
