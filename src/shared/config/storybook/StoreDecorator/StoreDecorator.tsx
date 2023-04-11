import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { loginReducer } from 'features/authByUsername/model/slice/loginSlice';
import { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailsReducer } from 'entities/Article';
import { addNewCommentReducer } from 'features/addNewComment/model/slice/addNewCommentSlice';
import { articlesPageReducer } from 'pages/ArticlesPage';
import { saveScrollReducer } from 'features/saveScroll';
import { articleDetailsPageReducer } from 'pages/ArticleDetailsPage';
import { profileReducer } from 'features/EditableProfileCard';

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    articleDetailsPage: articleDetailsPageReducer,
    addNewComment: addNewCommentReducer,
    articlesPage: articlesPageReducer,
    ui: saveScrollReducer,
};

export const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducers?: ReducersList,
) => (StoryComponent: Story) => (
    <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
        <StoryComponent />
    </StoreProvider>
);
