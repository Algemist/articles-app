import { StateSchema } from 'app/providers/StoreProvider';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { getProfileFirstName } from './getProfileFirstName';
import { Profile } from '../../types/profile';

describe('getProfileFirstName.test', () => {
    test('should return firstname of profile', () => {
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
                data,
            },
        };
        expect(getProfileFirstName(state as StateSchema)).toBe('Denis');
    });
    test('should work with empty value', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileFirstName(state as StateSchema)).toBe('');
    });
});
