import { memo } from 'react';

import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { ToggleFeatures } from '@/shared/lib/features';
import { ArticleDetailsDeprecated } from './ArticleDetailsDeprecated/ArticleDetailsDeprecated';
import { ArticleDetailsRedesigned } from './ArticleDetailsRedesigned/ArticleDetailsRedesigned';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleDetailsDeprecated/ArticleDetailsDeprecated.module.scss';
import { VStack } from '@/shared/ui/redesigned/Stack';

export interface ArticleDetailsProps {
    className?: string;
    id?: string;
}

const initialReducers: ReducersList = {
    articleDetails: articleDetailsReducer,
};

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
    const { className, id } = props;

    return (
        <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
            <VStack
                gap="16"
                max
                className={classNames(cls.ArticleDetails, {}, [className])}
            >
                <ToggleFeatures
                    feature="isAppRedesigned"
                    off={
                        <ArticleDetailsDeprecated
                            id={id}
                            className={className}
                        />
                    }
                    on={
                        <ArticleDetailsRedesigned
                            id={id}
                            className={className}
                        />
                    }
                />
            </VStack>
        </DynamicModuleLoader>
    );
});
