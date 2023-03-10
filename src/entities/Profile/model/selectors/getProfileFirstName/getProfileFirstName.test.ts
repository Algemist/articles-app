import { StateSchema } from 'app/providers/StoreProvider';
import { Country, Currency } from 'shared/const/common';
import { getProfileFirstName } from './getProfileFirstName';

describe('getProfileFirstName.test', () => {
    test('should return firstname of profile', () => {
        const data = {
            first: 'Denis',
            age: '22',
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
