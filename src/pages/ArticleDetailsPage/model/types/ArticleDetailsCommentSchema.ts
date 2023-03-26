import { Comment } from 'entities/Comment';
import { EntityState } from '@reduxjs/toolkit';

export interface ArticleDetailsCommentSchema extends EntityState<Comment> {
    isLoading?: boolean;
    error?: string;
}
