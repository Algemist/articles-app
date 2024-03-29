import { StateSchema } from '@/app/providers/StoreProvider';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { Profile } from '@/entities/Profile';
import { getProfileForm } from './getProfileForm';

describe('getProfileForm.test', () => {
    test('should return profile form', () => {
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
        const state: DeepPartial<StateSchema> = {
            profile: {
                form: data,
            },
        };
        expect(getProfileForm(state as StateSchema)).toEqual(data);
    });
    test('should work with empty value', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileForm(state as StateSchema)).toBe(undefined);
    });
});
