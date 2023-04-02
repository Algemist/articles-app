import { getQueryParams } from './addQueryParams';

describe('addQueryParams.test', () => {
    test('should work with one param', () => {
        const params = getQueryParams({
            test: 'value',
        });
        expect(params).toEqual('?test=value');
    });
    test('should work with multiply params', () => {
        const params = getQueryParams({
            test: 'value',
            secondTest: '2',
        });
        expect(params).toEqual('?test=value&secondTest=2');
    });
    test('should handle undefined param', () => {
        const params = getQueryParams({
            test: 'value',
            secondTest: undefined,
        });
        expect(params).toEqual('?test=value');
    });
});
