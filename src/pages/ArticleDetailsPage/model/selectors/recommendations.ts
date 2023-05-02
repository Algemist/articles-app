import { StateSchema } from '@/app/providers/StoreProvider';

export const getArticleDetailsRecommendationsIsLoading = (state: StateSchema) =>
    state.articleDetailsPage?.recommendations?.isLoading && false;
export const getArticleDetailsRecommendationsError = (state: StateSchema) =>
    state.articleDetailsPage?.recommendations?.error;
