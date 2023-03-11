import { Profile, updateProfileData } from 'entities/Profile';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { profileActions, profileReducer } from './profileSlice';
import { ProfileSchema, ValidateProfileError } from '../types/profile';

const data: Profile = {
    firstname: 'Denis',
    age: 22,
    city: 'Moscow',
    avatar: 'http://avatar.png',
    country: Country.Russia,
    username: 'Algemist',
    currency: Currency.RUB,
    lastname: 'Davidov',
};

describe('profileSlice.test', () => {
    test('test readOnly profile', () => {
        const state: DeepPartial<ProfileSchema> = {
            readonly: false,
        };
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.setReadOnly(true),
        )).toEqual({ readonly: true });
    });

    test('test update profile service pending', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateError: [ValidateProfileError.SERVER_ERROR],
        };

        expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.pending,
        )).toEqual({
            isLoading: true,
            validateError: undefined,
        });
    });
    test('test update profile service fullfiled', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
        };

        expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.fulfilled(data, ''),
        )).toEqual({
            isLoading: false,
            readonly: true,
            validateError: undefined,
            form: data,
            data,
        });
    });
});
