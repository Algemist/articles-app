import { StateSchema } from 'app/providers/StoreProvider';

export const getArticleCommentsIsLoading = (state: StateSchema) => state.articleDetailsComment?.isLoading || false;
export const getArticleCommentsError = (state: StateSchema) => state.articleDetailsComment?.error;
