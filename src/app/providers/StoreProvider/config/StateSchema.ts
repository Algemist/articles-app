import { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/authByUsername';
import {
    AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { ArticleDetailsSchema } from 'entities/Article';
import { AddNewCommentSchema } from 'features/addNewComment';
import { ArticlesPageSchema } from 'pages/ArticlesPage';
import { UiSchema } from 'features/saveScroll';
import { ArticleDetailsPageSchema } from 'pages/ArticleDetailsPage/model/types';
import { rtkApi } from 'shared/api/rtkApi';
import { ProfileSchema } from 'features/EditableProfileCard';

export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;
    ui: UiSchema;
    [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;
    // Async reducers
    loginForm?: LoginSchema;
    articleDetails?: ArticleDetailsSchema;
    profile?: ProfileSchema;
    addNewComment?: AddNewCommentSchema;
    articlesPage?: ArticlesPageSchema;
    articleDetailsPage?: ArticleDetailsPageSchema;
}

export type StateSchemaKey = keyof StateSchema;
export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
    getMountedReducers: () => MountedReducers;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
    api: AxiosInstance;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    state: StateSchema;
}
