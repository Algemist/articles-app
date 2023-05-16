import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Input } from '@/shared/ui/deprecated/Input';
import { Button } from '@/shared/ui/deprecated/Button';
import { HStack } from '@/shared/ui/deprecated/Stack';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
    addNewCommentActions,
    addNewCommentReducer,
} from '../../model/slice/addNewCommentSlice';
import { getAddNewCommentText } from '../../model/selectors/addNewCommentSelectors';
import cls from './AddNewCommentForm.module.scss';

export interface AddNewCommentFormProps {
    className?: string;
    onSendComment: (text: string) => void;
}

const reducers: ReducersList = {
    addNewComment: addNewCommentReducer,
};
const AddNewCommentForm = memo((props: AddNewCommentFormProps) => {
    const { className, onSendComment } = props;

    const { t } = useTranslation();
    const text = useSelector(getAddNewCommentText);
    const dispatch = useAppDispatch();

    const onCommentTextChange = useCallback(
        (value: string) => {
            dispatch(addNewCommentActions.setText(value));
        },
        [dispatch],
    );

    const onSendHandler = useCallback(() => {
        onSendComment(text || '');
        onCommentTextChange('');
    }, [onCommentTextChange, onSendComment, text]);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <HStack
                data-testid="AddNewCommentForm"
                justify="between"
                max
                className={classNames(cls.AddNewCommentForm, {}, [className])}
            >
                <Input
                    placeholder={t('Введите текст комментария')}
                    value={text}
                    onChange={onCommentTextChange}
                    className={cls.input}
                    data-testid="AddNewCommentForm.Input"
                />
                <Button
                    data-testid="AddNewCommentForm.Button"
                    onClick={onSendHandler}
                >
                    {t('Отправить')}
                </Button>
            </HStack>
        </DynamicModuleLoader>
    );
});

export default AddNewCommentForm;
