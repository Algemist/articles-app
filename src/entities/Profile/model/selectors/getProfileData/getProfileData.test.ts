import { StateSchema } from 'app/providers/StoreProvider';
import { Currency } from 'entities/Currency/model/types/currency';
import { Country } from 'entities/Country/model/types/country';
import { getProfileData } from './getProfileData';
import { Profile } from '../../types/profile';

describe('getProfileData.test', () => {
    test('should return profile data', () => {
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
        const state: DeepPartial<StateSchema> = {
            profile: {
                data,
            },
        };

        expect(getProfileData(state as StateSchema)).toEqual(data);
    });
    test('should work with empty value', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getProfileData(state as StateSchema)).toEqual(undefined);
    });
});
