import { classNames } from './classNames';

describe('classNames', () => {
    test('test', () => {
        expect(classNames('someClass')).toBe('someClass');
    });
});
