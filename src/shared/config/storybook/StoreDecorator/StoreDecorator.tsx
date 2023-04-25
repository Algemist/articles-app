import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import { ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailsReducer } from '@/entities/Article';
import { articleDetailsPageReducer } from '@/pages/ArticleDetailsPage';
import { addNewCommentReducer } from '@/features/addNewComment/testing';
import { profileReducer } from '@/features/EditableProfileCard/testing';
import { loginReducer } from '@/features/authByUsername/testing';

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    articleDetailsPage: articleDetailsPageReducer,
    addNewComment: addNewCommentReducer,
};

export const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducers?: ReducersList,
) => (StoryComponent: Story) => (
    <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
        <StoryComponent />
    </StoreProvider>
);
