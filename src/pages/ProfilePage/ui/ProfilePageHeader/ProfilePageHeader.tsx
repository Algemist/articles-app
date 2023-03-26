import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import {
    getProfileData, getProfileReadOnly, profileActions, updateProfileData,
} from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUserAuthData } from 'entities/User';
import cls from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
    className?: string;
}

export const ProfilePageHeader: FC<ProfilePageHeaderProps> = (props) => {
    const {
        className,
    } = props;

    const { t } = useTranslation('profile');
    const readOnly = useSelector(getProfileReadOnly);
    const authData = useSelector(getUserAuthData);
    const profileData = useSelector(getProfileData);
    const canEdit = authData?.id === profileData?.id;
    const dispatch = useAppDispatch();

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadOnly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
            <Text
                text={t('Профиль')}
            />
            {canEdit && (
                <div className={cls.btnsWrapper}>
                    {readOnly ? (
                        <Button
                            theme={ButtonTheme.OUTLINE}
                            className={cls.editBtn}
                            onClick={onEdit}
                        >
                            {t('Редактировать')}
                        </Button>
                    ) : (
                        <>
                            <Button
                                theme={ButtonTheme.OUTLINE}
                                className={cls.saveBtn}
                                onClick={onSave}
                            >
                                {t('Сохранить')}
                            </Button>
                            <Button
                                theme={ButtonTheme.OUTLINE_RED}
                                className={cls.cancelBtn}
                                onClick={onCancelEdit}
                            >
                                {t('Отменить')}
                            </Button>
                        </>
                    )}
                </div>
            )}

        </div>
    );
};
