import { Profile } from 'entities/Profile';

import { ValidateProfileError } from '../../consts/consts';

export const validateProfile = (profile?: Profile) => {
    if (!profile) {
        return [ValidateProfileError.NO_DATA];
    }
    const {
        lastname,
        first,
        age,
        country,
    } = profile;
    const error: ValidateProfileError[] = [];

    if (!first || !lastname) {
        error.push(ValidateProfileError.INCORRECT_USER_DATA);
    }

    if (!age || !Number.isInteger(age)) {
        error.push(ValidateProfileError.INCORRECT_AGE);
    }

    if (!country) {
        error.push(ValidateProfileError.INCORRECT_COUNTRY);
    }

    return error;
};
