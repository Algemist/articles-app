import { Profile } from 'entities/Profile';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ValidateProfileError } from '../../types/profile';
import { validateProfile } from './validateProfile';

const data: Profile = {
    first: 'Denis',
    age: 22,
    city: 'Moscow',
    avatar: 'http://avatar.png',
    country: Country.Russia,
    username: 'Algemist',
    currency: Currency.RUB,
    lastname: 'Davidov',
};

describe('correct profile', () => {
    test('success', async () => {
        const result = validateProfile(data);

        expect(result).toEqual([]);
    });

    test('with error in firstname', async () => {
        const dataWithError = { ...data, first: undefined };
        const result = validateProfile(dataWithError);

        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
    });

    test('with all errors', () => {
        const dataWithError = {
            ...data,
            first: undefined,
            lastname: undefined,
            country: undefined,
            age: undefined,
        };
        const result = validateProfile(dataWithError);

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_COUNTRY,
        ]);
    });

    test('with undefined value', () => {
        const result = validateProfile(undefined);

        expect(result).toEqual([ValidateProfileError.NO_DATA]);
    });
});
