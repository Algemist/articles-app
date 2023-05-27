import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Button as ButtonDeprecated } from '@/shared/ui/deprecated/Button';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import { Text as TextDeprecated, TextTheme } from '@/shared/ui/deprecated/Text';
import { Button } from '@/shared/ui/redesigned/Button';
import { Input } from '@/shared/ui/redesigned/Input';
import { Text } from '@/shared/ui/redesigned/Text';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';
import { ToggleFeatures } from '@/shared/lib/features';
import { VStack } from '@/shared/ui/redesigned/Stack';

export interface LoginFormProps {
    className?: string;
    onSuccess: () => void;
}

const initialReducers: ReducersList = {
    loginForm: loginReducer,
};

const LoginForm = memo((props: LoginFormProps) => {
    const { className, onSuccess } = props;

    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);

    const onChangeUserName = useCallback(
        (value: string) => {
            dispatch(loginActions.setUsername(value));
        },
        [dispatch],
    );

    const onChangePassword = useCallback(
        (value: string) => {
            dispatch(loginActions.setPassword(value));
        },
        [dispatch],
    );

    const onLoginClick = useCallback(async () => {
        const result = await dispatch(loginByUsername({ username, password }));
        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess();
        }
    }, [dispatch, username, password, onSuccess]);

    const content = (
        <ToggleFeatures
            feature="isAppRedesigned"
            off={
                <>
                    <TextDeprecated title={t('Форма авторизации')} />
                    {error && (
                        <TextDeprecated
                            title={t('Вы вели неверный логин или пароль')}
                            theme={TextTheme.ERROR}
                        />
                    )}
                    <InputDeprecated
                        type="text"
                        placeholder={t('Введите логин')}
                        autofocus
                        onChange={onChangeUserName}
                        value={username}
                    />
                    <InputDeprecated
                        type="text"
                        placeholder={t('Введите пароль')}
                        onChange={onChangePassword}
                        value={password}
                    />
                    <ButtonDeprecated
                        onClick={onLoginClick}
                        disabled={isLoading}
                        className={cls.loginBtn}
                    >
                        {t('Войти')}
                    </ButtonDeprecated>
                </>
            }
            on={
                <>
                    <Text title={t('Форма авторизации')} size="s" />
                    {error && (
                        <Text
                            title={t('Вы вели неверный логин или пароль')}
                            variant="error"
                        />
                    )}
                    <Input
                        type="text"
                        placeholder={t('Введите логин')}
                        autofocus
                        onChange={onChangeUserName}
                        value={username}
                    />
                    <Input
                        type="text"
                        placeholder={t('Введите пароль')}
                        onChange={onChangePassword}
                        value={password}
                    />
                    <Button
                        variant="outline"
                        onClick={onLoginClick}
                        disabled={isLoading}
                        className={cls.loginBtn}
                    >
                        {t('Войти')}
                    </Button>
                </>
            }
        />
    );

    return (
        <DynamicModuleLoader removeAfterUnmount reducers={initialReducers}>
            <VStack
                gap="16"
                className={classNames(cls.LoginForm, {}, [className])}
            >
                {content}
            </VStack>
        </DynamicModuleLoader>
    );
});

export default LoginForm;
