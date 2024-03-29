import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './ProfileCardDeprecated.module.scss';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Loader } from '@/shared/ui/deprecated/Loader';
import { Text, TextAlign, TextTheme } from '@/shared/ui/deprecated/Text';
import { Avatar } from '@/shared/ui/deprecated/Avatar';
import { Input } from '@/shared/ui/deprecated/Input';
import { CurrencySelect } from '@/entities/Currency';
import { CountrySelect } from '@/entities/Country';
import { ProfileCardProps } from '../ProfileCard';

interface ProfileCardDeprecatedProps extends ProfileCardProps {
    className?: string;
}

export const ProfileCardDeprecated = memo(
    (props: ProfileCardDeprecatedProps) => {
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
                <HStack
                    max
                    justify="center"
                    className={classNames(
                        cls.ProfileCard,
                        { [cls.loading]: true },
                        [className],
                    )}
                >
                    <Loader />
                </HStack>
            );
        }

        if (error) {
            return (
                <HStack
                    max
                    justify="center"
                    className={classNames(cls.ProfileCard, {}, [
                        className,
                        cls.error,
                    ])}
                >
                    <Text
                        title={t('Произошла ошибка при загрузке профиля')}
                        theme={TextTheme.ERROR}
                        align={TextAlign.CENTER}
                        text={t('Попробуйте обновить страницу')}
                    />
                </HStack>
            );
        }

        const mods: Mods = {
            [cls.editing]: !readOnly,
        };

        return (
            <VStack
                gap="8"
                max
                className={classNames(cls.ProfileCardDeprecated, mods, [
                    className,
                ])}
            >
                {data?.avatar && (
                    <HStack justify="center" max className={cls.avatarWrapper}>
                        <Avatar src={data.avatar} />
                    </HStack>
                )}
                <Input
                    value={data?.first}
                    placeholder={t('Ваше имя')}
                    className={cls.input}
                    onChange={onChangeFirstname}
                    readOnly={readOnly}
                    data-testid="ProfileCard.Name"
                />
                <Input
                    value={data?.lastname}
                    placeholder={t('Ваша фамилия')}
                    className={cls.input}
                    onChange={onChangeLastname}
                    readOnly={readOnly}
                    data-testid="ProfileCard.LastName"
                />
                <Input
                    value={data?.age}
                    placeholder={t('Ваш возраст')}
                    className={cls.input}
                    onChange={onChangeAge}
                    readOnly={readOnly}
                    data-testid="ProfileCard.Age"
                />
                <Input
                    value={data?.city}
                    placeholder={t('Ваш город')}
                    className={cls.input}
                    onChange={onChangeCity}
                    readOnly={readOnly}
                    data-testid="ProfileCard.City"
                />
                <Input
                    value={data?.username}
                    placeholder={t('Имя пользователя')}
                    className={cls.input}
                    onChange={onChangeUsername}
                    readOnly={readOnly}
                    data-testid="ProfileCard.Username"
                />
                <Input
                    value={data?.avatar}
                    placeholder={t('Введите ссылку на аватар')}
                    className={cls.input}
                    onChange={onChangeAvatar}
                    readOnly={readOnly}
                    data-testid="ProfileCard.Avatar"
                />
                <CurrencySelect
                    className={cls.input}
                    value={data?.currency}
                    onChange={onChangeCurrency}
                    readOnly={readOnly}
                    data-testid="ProfileCard.Currency"
                />
                <CountrySelect
                    className={cls.input}
                    value={data?.country}
                    onChange={onChangeCountry}
                    readOnly={readOnly}
                    data-testid="ProfileCard.Country"
                />
            </VStack>
        );
    },
);
