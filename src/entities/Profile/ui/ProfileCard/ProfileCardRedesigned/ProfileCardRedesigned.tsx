import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { ProfileCardProps } from '../ProfileCard';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';
import { CurrencySelect } from '@/entities/Currency';
import { CountrySelect } from '@/entities/Country';
import { Input } from '@/shared/ui/redesigned/Input';
import { Card } from '@/shared/ui/redesigned/Card';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';

interface ProfileCardRedesignedProps extends ProfileCardProps {
    className?: string;
}

export const ProfileCardRedesigned = memo(
    (props: ProfileCardRedesignedProps) => {
        const {
            className,
            onChangeAvatar,
            onChangeCountry,
            onChangeCurrency,
            onChangeFirstname,
            onChangeLastname,
            onChangeUsername,
            onChangeCity,
            onChangeAge,
            readOnly,
            isLoading,
            error,
            data,
        } = props;

        const { t } = useTranslation('profile');
        if (isLoading) {
            return (
                <Card max padding="24">
                    <VStack gap="32" max>
                        <HStack max justify="center">
                            <Skeleton
                                border="100%"
                                width="128px"
                                height="128px"
                            />
                        </HStack>
                        <HStack gap="32" max>
                            <VStack gap="16" max>
                                <Skeleton width="100%" height="38" />
                                <Skeleton width="100%" height="38" />
                                <Skeleton width="100%" height="38" />
                                <Skeleton width="100%" height="38" />
                            </VStack>
                            <VStack gap="16" max>
                                <Skeleton width="100%" height="38" />
                                <Skeleton width="100%" height="38" />
                                <Skeleton width="100%" height="38" />
                                <Skeleton width="100%" height="38" />
                            </VStack>
                        </HStack>
                    </VStack>
                </Card>
            );
        }

        if (error) {
            return (
                <HStack max justify="center" className={className}>
                    <Text
                        title={t('Произошла ошибка при загрузке профиля')}
                        text={t('Попробуйте обновить страницу')}
                        variant="error"
                        align="center"
                    />
                </HStack>
            );
        }

        return (
            <Card padding="24" max className={className}>
                <VStack gap="32">
                    {data?.avatar && (
                        <HStack justify="center" max>
                            <Avatar src={data?.avatar} size={128} />
                        </HStack>
                    )}
                    <HStack gap="24" max>
                        <VStack gap="16" max>
                            <Input
                                value={data?.first}
                                label={t('Ваше имя')}
                                onChange={onChangeFirstname}
                                readOnly={readOnly}
                                data-testid="ProfileCard.Name"
                            />
                            <Input
                                value={data?.lastname}
                                label={t('Ваша фамилия')}
                                onChange={onChangeLastname}
                                readOnly={readOnly}
                                data-testid="ProfileCard.LastName"
                            />
                            <Input
                                value={data?.age}
                                label={t('Ваш возраст')}
                                onChange={onChangeAge}
                                readOnly={readOnly}
                                data-testid="ProfileCard.Age"
                            />
                            <Input
                                value={data?.city}
                                label={t('Ваш город')}
                                onChange={onChangeCity}
                                readOnly={readOnly}
                                data-testid="ProfileCard.City"
                            />
                        </VStack>
                        <VStack gap="16" max>
                            <Input
                                value={data?.username}
                                label={t('Имя пользователя')}
                                onChange={onChangeUsername}
                                readOnly={readOnly}
                                data-testid="ProfileCard.Username"
                            />
                            <Input
                                value={data?.avatar}
                                label={t('Введите ссылку на аватар')}
                                onChange={onChangeAvatar}
                                readOnly={readOnly}
                                data-testid="ProfileCard.Avatar"
                            />
                            <CurrencySelect
                                value={data?.currency}
                                onChange={onChangeCurrency}
                                readOnly={readOnly}
                                data-testid="ProfileCard.Currency"
                            />
                            <CountrySelect
                                value={data?.country}
                                onChange={onChangeCountry}
                                readOnly={readOnly}
                                data-testid="ProfileCard.Country"
                            />
                        </VStack>
                    </HStack>
                </VStack>
            </Card>
        );
    },
);
