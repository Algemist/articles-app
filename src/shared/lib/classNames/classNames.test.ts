import { classNames } from 'shared/lib/classNames/classNames';

describe('classNames', () => {
    test('test', () => {
        expect(classNames('someClass')).toBe('someClass');
    });
});
