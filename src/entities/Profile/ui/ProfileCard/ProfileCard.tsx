import { FC } from 'react';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { Profile } from '../../model/types/profile';
import { ToggleFeatures } from '@/shared/lib/features';
import { ProfileCardDeprecated } from './ProfileCardDeprecated/ProfileCardDeprecated';
import { ProfileCardRedesigned } from './ProfileCardRedesigned/ProfileCardRedesigned';

export interface ProfileCardProps {
    className?: string;
    data?: Profile;
    error?: string;
    isLoading?: boolean;
    readOnly?: boolean;
    onChangeLastname?: (value?: string) => void;
    onChangeFirstname?: (value?: string) => void;
    onChangeCity?: (value?: string) => void;
    onChangeAge?: (value?: string) => void;
    onChangeAvatar?: (value?: string) => void;
    onChangeUsername?: (value?: string) => void;
    onChangeCurrency?: (currency?: Currency) => void;
    onChangeCountry?: (country?: Country) => void;
}

export const ProfileCard: FC<ProfileCardProps> = (props) => {
    const {
        className,
        error,
        isLoading,
        onChangeLastname,
        onChangeCity,
        onChangeAge,
        onChangeFirstname,
        onChangeAvatar,
        onChangeUsername,
        onChangeCurrency,
        onChangeCountry,
        data,
        readOnly,
    } = props;

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            off={
                <ProfileCardDeprecated
                    className={className}
                    error={error}
                    isLoading={isLoading}
                    onChangeLastname={onChangeLastname}
                    onChangeCity={onChangeCity}
                    onChangeAge={onChangeAge}
                    onChangeFirstname={onChangeFirstname}
                    onChangeAvatar={onChangeAvatar}
                    onChangeUsername={onChangeUsername}
                    onChangeCurrency={onChangeCurrency}
                    onChangeCountry={onChangeCountry}
                    data={data}
                    readOnly={readOnly}
                />
            }
            on={
                <ProfileCardRedesigned
                    className={className}
                    error={error}
                    isLoading={isLoading}
                    onChangeLastname={onChangeLastname}
                    onChangeCity={onChangeCity}
                    onChangeAge={onChangeAge}
                    onChangeFirstname={onChangeFirstname}
                    onChangeAvatar={onChangeAvatar}
                    onChangeUsername={onChangeUsername}
                    onChangeCurrency={onChangeCurrency}
                    onChangeCountry={onChangeCountry}
                    data={data}
                    readOnly={readOnly}
                />
            }
        />
    );
};
