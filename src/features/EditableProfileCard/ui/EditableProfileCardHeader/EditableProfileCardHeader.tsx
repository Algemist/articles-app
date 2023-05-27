import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { Text as TextDeprecated, TextSize } from '@/shared/ui/deprecated/Text';
import {
    Button as ButtonDeprecated,
    ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { Text } from '@/shared/ui/redesigned/Text';
import { Button } from '@/shared/ui/redesigned/Button';
import { classNames } from '@/shared/lib/classNames/classNames';
import { getUserAuthData } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { updateProfileData } from '../../model/service/updateProfileData/updateProfileData';
import { profileActions } from '../../model/slice/profileSlice';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileReadOnly } from '../../model/selectors/getProfileReadOnly/getProfileReadOnly';
import { ToggleFeatures } from '@/shared/lib/features';
import { Card } from '@/shared/ui/redesigned/Card';

interface EditableProfileCardHeaderProps {
    className?: string;
}

export const EditableProfileCardHeader = memo(
    (props: EditableProfileCardHeaderProps) => {
        const { className } = props;

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
            <ToggleFeatures
                feature="isAppRedesigned"
                off={
                    <HStack
                        max
                        justify="between"
                        className={classNames('', {}, [className])}
                    >
                        <TextDeprecated text={t('Профиль')} size={TextSize.L} />
                        {canEdit && (
                            <div>
                                {readOnly ? (
                                    <ButtonDeprecated
                                        theme={ButtonTheme.OUTLINE}
                                        onClick={onEdit}
                                        data-testid="EditableProfileCardHeader.EditButton"
                                    >
                                        {t('Редактировать')}
                                    </ButtonDeprecated>
                                ) : (
                                    <HStack gap="8">
                                        <ButtonDeprecated
                                            theme={ButtonTheme.OUTLINE}
                                            onClick={onSave}
                                            data-testid="EditableProfileCardHeader.SaveButton"
                                        >
                                            {t('Сохранить')}
                                        </ButtonDeprecated>
                                        <ButtonDeprecated
                                            theme={ButtonTheme.OUTLINE_RED}
                                            onClick={onCancelEdit}
                                            data-testid="EditableProfileCardHeader.CancelButton"
                                        >
                                            {t('Отменить')}
                                        </ButtonDeprecated>
                                    </HStack>
                                )}
                            </div>
                        )}
                    </HStack>
                }
                on={
                    <Card max padding="24">
                        <HStack
                            max
                            justify="between"
                            className={classNames('', {}, [className])}
                        >
                            <Text text={t('Профиль')} size="l" />
                            {canEdit && (
                                <div>
                                    {readOnly ? (
                                        <Button
                                            variant="outline"
                                            onClick={onEdit}
                                            data-testid="EditableProfileCardHeader.EditButton"
                                        >
                                            {t('Редактировать')}
                                        </Button>
                                    ) : (
                                        <HStack gap="8">
                                            <Button
                                                variant="outline"
                                                color="success"
                                                onClick={onSave}
                                                data-testid="EditableProfileCardHeader.SaveButton"
                                            >
                                                {t('Сохранить')}
                                            </Button>
                                            <Button
                                                variant="outline"
                                                color="error"
                                                onClick={onCancelEdit}
                                                data-testid="EditableProfileCardHeader.CancelButton"
                                            >
                                                {t('Отменить')}
                                            </Button>
                                        </HStack>
                                    )}
                                </div>
                            )}
                        </HStack>
                    </Card>
                }
            />
        );
    },
);
